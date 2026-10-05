// Serverless function: GET /api/check?url=example.com&lang=en
// Opens the site like a visitor would and checks speed, SEO, mobile/accessibility and security basics.
// Needs no API key. If PSI_KEY (a free Google PageSpeed Insights key) is set in the hosting environment,
// Google Lighthouse scores and metrics are added on top.
// Also served locally by `npm run dev` (see vite.config.js).
import { lookup } from 'node:dns/promises'
import { isIP } from 'node:net'

const UA = 'Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0 Mobile Safari/537.36 VirelixCheck/1.0'
const MAX_BYTES = 3_000_000
const TIMEOUT = 15_000

// ---------- safety: only public http(s) sites, never internal addresses ----------
function privateIp(ip) {
  if (ip.includes(':')) {
    const v = ip.toLowerCase()
    if (v.startsWith('::ffff:')) return privateIp(v.slice(7))
    return v === '::1' || v === '::' || v.startsWith('fc') || v.startsWith('fd') || v.startsWith('fe8') || v.startsWith('fe9') || v.startsWith('fea') || v.startsWith('feb')
  }
  const [a, b] = ip.split('.').map(Number)
  return a === 0 || a === 10 || a === 127 || (a === 169 && b === 254) || (a === 172 && b >= 16 && b <= 31) || (a === 192 && b === 168) ||
    (a === 100 && b >= 64 && b <= 127) || (a === 198 && (b === 18 || b === 19)) || a >= 224
}

async function assertPublic(u) {
  if (!/^https?:$/.test(u.protocol)) throw new Error('bad-url')
  if (u.port && !['80', '443'].includes(u.port)) throw new Error('bad-url')
  if (u.username || u.password) throw new Error('bad-url')
  const host = u.hostname.replace(/^\[|\]$/g, '')
  if (isIP(host)) { if (privateIp(host)) throw new Error('bad-url'); return }
  if (!host.includes('.') || /\.(local|internal|localhost)$/i.test(host)) throw new Error('bad-url')
  const addrs = await lookup(host, { all: true }).catch(() => { throw new Error('no-dns') })
  if (!addrs.length || addrs.some((a) => privateIp(a.address))) throw new Error('bad-url')
}

async function readCapped(res) {
  const reader = res.body?.getReader()
  if (!reader) return ''
  const chunks = []
  let size = 0
  for (;;) {
    const { done, value } = await reader.read()
    if (done) break
    chunks.push(value); size += value.length
    if (size > MAX_BYTES) { reader.cancel().catch(() => {}); break }
  }
  return { text: Buffer.concat(chunks.map((c) => Buffer.from(c))).toString('utf8'), size }
}

// Follows redirects by hand so every hop is checked.
async function visit(start) {
  let u = start, hops = 0
  const t0 = Date.now()
  for (;;) {
    await assertPublic(u)
    const res = await fetch(u, { redirect: 'manual', headers: { 'user-agent': UA, accept: 'text/html,*/*', 'accept-encoding': 'gzip, deflate, br' }, signal: AbortSignal.timeout(TIMEOUT) })
    if (res.status >= 300 && res.status < 400 && res.headers.get('location') && hops < 6) {
      u = new URL(res.headers.get('location'), u); hops++; res.body?.cancel().catch(() => {}); continue
    }
    const ttfb = Date.now() - t0
    const { text, size } = await readCapped(res)
    return { res, url: u, hops, ttfb, total: Date.now() - t0, html: text || '', size: size || 0 }
  }
}

async function exists(u) {
  try {
    await assertPublic(u)
    const r = await fetch(u, { redirect: 'follow', headers: { 'user-agent': UA }, signal: AbortSignal.timeout(6000) })
    const body = r.ok ? (await r.text()).slice(0, 2000) : ''
    return r.ok && !/<html/i.test(body) ? body : ''
  } catch { return '' }
}

// ---------- HTML helpers (regex is enough for these signals) ----------
const tags = (html, name) => html.match(new RegExp(`<${name}\\b[^>]*>`, 'gi')) || []
const attr = (tag, name) => { const m = tag.match(new RegExp(`\\b${name}\\s*=\\s*("([^"]*)"|'([^']*)'|([^\\s>]+))`, 'i')); return m ? (m[2] ?? m[3] ?? m[4] ?? '') : null }
const meta = (html, key) => { const t = tags(html, 'meta').find((m) => (attr(m, 'name') || attr(m, 'property') || '').toLowerCase() === key); return t ? attr(t, 'content') : null }
const strip = (s) => s.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()

function analyse(v, robots, sitemap) {
  const { res, html } = v
  const h = (k) => res.headers.get(k) || ''
  const head = html.slice(0, 200_000)
  const title = strip((head.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [])[1] || '')
  const desc = (meta(head, 'description') || '').trim()
  const h1 = (html.match(/<h1\b/gi) || []).length
  const imgs = tags(html, 'img')
  const noAlt = imgs.filter((t) => attr(t, 'alt') === null).length
  const lazy = imgs.filter((t) => (attr(t, 'loading') || '').toLowerCase() === 'lazy').length
  const scripts = tags(html, 'script').filter((t) => attr(t, 'src')).length
  const links = tags(html, 'link')
  const rel = (r) => links.filter((t) => (attr(t, 'rel') || '').toLowerCase().split(/\s+/).includes(r))
  const css = rel('stylesheet').length
  const https = v.url.protocol === 'https:'
  const mixed = https && /\b(?:src|href)\s*=\s*["']http:\/\/(?!www\.w3\.org)[^"']+\.(?:js|css|png|jpe?g|gif|webp|svg|woff2?)/i.test(html)
  const htmlTag = tags(html, 'html')[0] || ''
  const enc = h('content-encoding')
  const csp = h('content-security-policy')

  const c = [] // [id, category, weight, status 1 | .5 | 0, value?]
  const add = (id, cat, w, s, val) => c.push({ id, cat, w, s, v: val })
  const band = (x, good, ok) => (x <= good ? 1 : x <= ok ? 0.5 : 0)
  // speed
  add('ttfb', 'performance', 3, band(v.ttfb, 800, 1800), `${v.ttfb} ms`)
  add('compress', 'performance', 2, enc ? 1 : 0)
  add('weight', 'performance', 1, band(v.size, 150_000, 400_000), `${Math.round(v.size / 1024)} KB`)
  add('scripts', 'performance', 1, band(scripts, 15, 30), String(scripts))
  add('css', 'performance', 1, band(css, 6, 12), String(css))
  add('redirects', 'performance', 1, v.hops <= 1 ? 1 : v.hops === 2 ? 0.5 : 0, String(v.hops))
  if (imgs.length > 4) add('lazy', 'performance', 1, lazy ? 1 : 0)
  // seo
  add('status', 'seo', 3, res.status === 200 ? 1 : 0, String(res.status))
  add('title', 'seo', 3, !title ? 0 : title.length >= 10 && title.length <= 65 ? 1 : 0.5, title ? `${title.length}` : '')
  add('desc', 'seo', 3, !desc ? 0 : desc.length >= 50 && desc.length <= 170 ? 1 : 0.5, desc ? `${desc.length}` : '')
  add('h1', 'seo', 2, h1 === 1 ? 1 : h1 === 0 ? 0 : 0.5, String(h1))
  add('index', 'seo', 3, /noindex/i.test(meta(head, 'robots') || '') || /noindex/i.test(h('x-robots-tag')) ? 0 : 1)
  add('canonical', 'seo', 1, rel('canonical').length ? 1 : 0)
  add('robots', 'seo', 1, robots ? 1 : 0)
  add('sitemap', 'seo', 1, sitemap || /sitemap:/i.test(robots) ? 1 : 0)
  add('og', 'seo', 1, meta(head, 'og:title') && meta(head, 'og:image') ? 1 : meta(head, 'og:title') || meta(head, 'og:image') ? 0.5 : 0)
  add('schema', 'seo', 1, /application\/ld\+json/i.test(html) ? 1 : 0)
  // mobile & accessibility
  add('viewport', 'accessibility', 3, /width\s*=\s*device-width/i.test(meta(head, 'viewport') || '') ? 1 : 0)
  add('lang', 'accessibility', 2, attr(htmlTag, 'lang') ? 1 : 0)
  if (imgs.length) add('alt', 'accessibility', 2, noAlt === 0 ? 1 : noAlt / imgs.length <= 0.2 ? 0.5 : 0, `${imgs.length - noAlt}/${imgs.length}`)
  add('favicon', 'accessibility', 1, rel('icon').length || links.some((t) => /icon/i.test(attr(t, 'rel') || '')) ? 1 : 0)
  // security & best practices
  add('https', 'best-practices', 3, https ? 1 : 0)
  add('mixed', 'best-practices', 2, mixed ? 0 : 1)
  add('hsts', 'best-practices', 1, https && h('strict-transport-security') ? 1 : 0)
  add('nosniff', 'best-practices', 1, /nosniff/i.test(h('x-content-type-options')) ? 1 : 0)
  add('frame', 'best-practices', 1, h('x-frame-options') || /frame-ancestors/i.test(csp) ? 1 : 0)
  add('doctype', 'best-practices', 1, /^\s*(<!--[\s\S]*?-->\s*)*<!doctype html/i.test(html) ? 1 : 0)
  add('charset', 'best-practices', 1, /<meta[^>]+charset/i.test(head) || /charset=/i.test(h('content-type')) ? 1 : 0)

  const cats = ['performance', 'seo', 'accessibility', 'best-practices']
  const scores = Object.fromEntries(cats.map((k) => {
    const xs = c.filter((x) => x.cat === k)
    const w = xs.reduce((a, x) => a + x.w, 0)
    return [k, Math.round((100 * xs.reduce((a, x) => a + x.w * x.s, 0)) / (w || 1))]
  }))
  const fixes = c.filter((x) => x.s < 1).sort((a, b) => b.w * (1 - b.s) - a.w * (1 - a.s)).slice(0, 6).map(({ id, v: val }) => ({ id, v: val || '' }))
  const metrics = [
    { id: 'm-ttfb', v: `${v.ttfb} ms`, s: band(v.ttfb, 800, 1800) },
    { id: 'm-load', v: `${(v.total / 1000).toFixed(1)} s`, s: band(v.total, 1500, 3500) },
    { id: 'm-size', v: `${(v.size / 1024).toFixed(v.size < 10240 ? 1 : 0)} KB`, s: band(v.size, 150_000, 400_000) },
    { id: 'm-files', v: `${scripts} / ${css}`, s: band(scripts + css, 20, 40) },
    { id: 'm-imgs', v: imgs.length ? `${imgs.length - noAlt}/${imgs.length}` : '0', s: noAlt ? 0.5 : 1 },
    { id: 'm-https', v: https ? 'HTTPS' : 'HTTP', s: https ? 1 : 0 },
  ]
  return { scores, fixes, metrics, title }
}

// ---------- Google Lighthouse via PageSpeed Insights (when PSI_KEY is set) ----------
// The same engine and numbers as pagespeed.web.dev, so visitors can verify the result themselves.
const CATS = ['performance', 'seo', 'accessibility', 'best-practices']
const clean = (t) => String(t || '').replace(/`/g, '').replace(/\s*\[[^\]]+\]\([^)]+\)\.?/g, '').trim()

async function lighthouse(url, lang) {
  const key = process.env.PSI_KEY
  if (!key) return null
  const q = new URLSearchParams({ url, strategy: 'mobile', locale: lang, key })
  for (const k of ['PERFORMANCE', 'SEO', 'ACCESSIBILITY', 'BEST_PRACTICES']) q.append('category', k)
  try {
    const r = await fetch('https://www.googleapis.com/pagespeedonline/v5/runPagespeed?' + q, { signal: AbortSignal.timeout(55_000) })
    if (!r.ok) return null
    const lh = (await r.json()).lighthouseResult
    if (!lh || lh.runtimeError) return null
    const A = lh.audits
    const metrics = ['first-contentful-paint', 'largest-contentful-paint', 'total-blocking-time', 'cumulative-layout-shift', 'speed-index']
      .filter((m) => A[m]?.displayValue).map((m) => ({ id: m, t: clean(A[m].title), v: A[m].displayValue, s: A[m].score }))
    const srt = A['server-response-time']
    if (srt?.numericValue != null) metrics.push({ id: 'm-ttfb', v: `${Math.round(srt.numericValue)} ms`, s: srt.score })
    // speed: the opportunities with the biggest savings; other categories: every failed audit that counts toward the score
    const speed = Object.values(A).filter((a) => a.details?.type === 'opportunity' && a.score !== null && a.score < 0.9)
      .sort((a, b) => (b.details.overallSavingsMs || 0) - (a.details.overallSavingsMs || 0)).slice(0, 4)
      .map((a) => ({ t: clean(a.title), v: a.displayValue || '' }))
    const rest = CATS.slice(1).flatMap((k) => (lh.categories[k]?.auditRefs || []).filter((ref) => ref.weight > 0)
      .map((ref) => ({ a: A[ref.id], w: ref.weight })).filter(({ a }) => a && a.score !== null && a.score < 0.9 && a.scoreDisplayMode !== 'notApplicable'))
      .sort((x, y) => y.w - x.w).map(({ a }) => ({ t: clean(a.title), v: '' }))
    return { scores: Object.fromEntries(CATS.map((k) => [k, Math.round((lh.categories[k]?.score ?? 0) * 100)])), metrics, fixes: [...speed, ...rest] }
  } catch { return null }
}

const verifyUrl = (u) => 'https://pagespeed.web.dev/analysis?form_factor=mobile&url=' + encodeURIComponent(u)

export async function runCheck(raw, lang = 'en') {
  let u
  try { u = new URL(/^https?:\/\//i.test(raw) ? raw : 'https://' + raw) } catch { throw new Error('bad-url') }
  await assertPublic(u)
  const google = lighthouse(u.href, lang)
  let v = null, fail = null
  try { v = await visit(u) } catch (e) {
    if (e.message === 'bad-url' || e.message === 'no-dns') throw e
    try { if (u.protocol === 'https:') v = await visit(new URL(u.href.replace(/^https:/, 'http:'))); else fail = e } catch (e2) { fail = e2 }
  }
  if (v && v.res.status >= 400) fail = Object.assign(new Error('blocked'), { status: v.res.status })
  const own = v && !fail ? analyse(v, ...(await Promise.all([exists(new URL('/robots.txt', v.url.origin)), exists(new URL('/sitemap.xml', v.url.origin))]))) : null
  const lh = await google
  const url = v?.url.href || u.href
  if (lh) {
    // Lighthouse is the main result; add our checks Lighthouse doesn't make (sitemap, robots.txt, social tags, security headers)
    const extra = (own?.fixes || []).filter((f) => ['sitemap', 'robots', 'og', 'schema', 'hsts'].includes(f.id))
    return { url, source: 'google', verify: verifyUrl(url), scores: lh.scores, metrics: lh.metrics, fixes: [...lh.fixes.slice(0, 7), ...extra].slice(0, 8) }
  }
  if (fail) throw fail
  return { url, source: 'virelix', verify: verifyUrl(url), ...own }
}

export default async function handler(req, res) {
  const q = new URL(req.url, 'http://x').searchParams
  const send = (code, body) => { res.statusCode = code; res.setHeader('content-type', 'application/json; charset=utf-8'); res.setHeader('cache-control', 'no-store'); res.end(JSON.stringify(body)) }
  if (req.method !== 'GET') return send(405, { error: 'method' })
  const url = (q.get('url') || '').trim().slice(0, 500)
  if (!url) return send(400, { error: 'bad-url' })
  try {
    send(200, await runCheck(url, q.get('lang') === 'ar' ? 'ar' : 'en'))
  } catch (e) {
    const code = e.message === 'bad-url' ? 400 : 502
    send(code, { error: ['bad-url', 'no-dns', 'blocked'].includes(e.message) ? e.message : 'unreachable', status: e.status })
  }
}
