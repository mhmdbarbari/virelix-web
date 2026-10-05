import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useI18n } from '../i18n'
import { useSmoothScroll } from '../hooks/useLenis'
import { useMeta } from '../hooks/useMeta'
import { EASE, stagger, up } from '../anim'
import { prefillContact } from '../lib/send'
import Heading from '../components/Heading'
import OwlEyes from '../components/OwlEyes'
import Icon from '../components/Icon'
import Contact from '../components/Contact'

// Live check by our own function (api/check.js: opens the site and checks speed, SEO, mobile and security).
// Where no function is running (static hosting, single-file preview) it falls back to Google PageSpeed Insights
// called from the browser; a free API key (VITE_PSI_KEY) raises Google's daily quota.
const KEY = import.meta.env.VITE_PSI_KEY
const API = import.meta.env.VITE_HASH_ROUTER ? null : (import.meta.env.VITE_CHECK_ENDPOINT || '/api/check')
const CATS = ['performance', 'seo', 'accessibility', 'best-practices']
const METRICS = ['first-contentful-paint', 'largest-contentful-paint', 'total-blocking-time', 'cumulative-layout-shift', 'speed-index']

const C = {
  en: {
    label: 'Free website check', title: ['How good is', 'your website?'], lead: 'Paste your link and get a free live report: speed, SEO, mobile and security, with the fixes that matter most.',
    ph: 'yourwebsite.com', go: 'Check my site', powered: 'Live check of your real site · you can verify every result on Google PageSpeed',
    src: { virelix: 'Live check by VIRELIX', google: 'Results from Google Lighthouse (mobile)', psi: 'Results from Google Lighthouse (mobile)' },
    verify: 'Verify on Google PageSpeed', wait: 'A full test takes up to 30 seconds.',
    steps: ['Opening your site on a phone…', 'Loading it on a mobile connection…', 'Measuring speed (LCP, CLS, TBT)…', 'Checking SEO and accessibility…', 'Checking security…', 'Writing your report…'],
    cats: { performance: 'Speed', seo: 'SEO', accessibility: 'Mobile & accessibility', 'best-practices': 'Security & best practices' },
    metrics: 'Key numbers', fixes: 'What to fix first', noFixes: 'No major issues found. Nice work.',
    verdict: (s) => (s >= 90 ? 'Excellent. Your site is in great shape.' : s >= 70 ? 'Good, with a few things worth fixing.' : s >= 50 ? 'Decent, but it is leaving visitors and rankings on the table.' : 'Your site needs work. It is likely losing visitors and search traffic.'),
    mx: { 'm-ttfb': 'Server response', 'm-load': 'Page download', 'm-size': 'Page size (HTML)', 'm-files': 'Scripts / stylesheets', 'm-imgs': 'Images with alt text', 'm-https': 'Connection' },
    fx: {
      ttfb: 'Server answers slowly. Faster hosting or caching would help', compress: 'Turn on compression (gzip or Brotli)', weight: 'The page’s HTML is heavy', scripts: 'Too many script files', css: 'Too many stylesheet files',
      redirects: 'Too many redirects before the page loads', lazy: 'Load images lazily (loading="lazy")', status: 'The page does not answer with “200 OK”', title: 'Add a clear page title (10 to 65 characters)',
      desc: 'Add a meta description (50 to 170 characters)', h1: 'Use exactly one main heading (H1)', index: 'The page tells Google not to index it (noindex)', canonical: 'Add a canonical link', robots: 'Add a robots.txt file',
      sitemap: 'Add a sitemap.xml', og: 'Add social sharing tags (Open Graph)', schema: 'Add structured data (Schema.org) for rich results', viewport: 'Not set up for phones (missing viewport tag)', lang: 'Declare the page language',
      alt: 'Some images have no alt text', favicon: 'Add a favicon', https: 'Not secure: switch to HTTPS', mixed: 'Secure page loads insecure (http) files', hsts: 'Add the HSTS security header',
      nosniff: 'Add the X-Content-Type-Options security header', frame: 'Protect against clickjacking (X-Frame-Options or CSP)', doctype: 'Add <!doctype html>', charset: 'Declare the character set (UTF-8)',
    },
    fixCta: 'Want us to fix this?', fixP: 'We’ll go through the report with you and tell you exactly what we’d change, free.', fixBtn: 'Send me the fix plan', again: 'Check another site',
    errDns: 'We couldn’t find that address. Check the spelling and try again.', errBlocked: (n) => `That site refused our check (error ${n}). Some sites block automated visits. Leave your link and we’ll check it by hand.`,
    errUrl: 'Please enter a valid website address.', errBusy: 'The free checker is busy right now (daily limit reached). Leave your link and we’ll send you the report.', errFail: 'We couldn’t test that site. Check the address, or leave it with us and we’ll look manually.', leave: 'Leave my link',
    msg: (u, r) => `Free website check for ${u}\n${r}\nPlease send me a fix plan.\n\n`,
  },
  ar: {
    label: 'فحص مجاني لموقعك', title: ['ما مدى جودة', 'موقعك؟'], lead: 'ضع رابط موقعك واحصل على تقرير مباشر مجاني: السرعة وSEO والموبايل والأمان، مع أهم الإصلاحات.',
    ph: 'yourwebsite.com', go: 'افحص موقعي', powered: 'فحص مباشر لموقعك الحقيقي · وتقدر تتحقق من كل نتيجة على Google PageSpeed',
    src: { virelix: 'فحص مباشر من VIRELIX', google: 'النتائج من Google Lighthouse (موبايل)', psi: 'النتائج من Google Lighthouse (موبايل)' },
    verify: 'تحقّق على Google PageSpeed', wait: 'الفحص الكامل يستغرق حتى 30 ثانية.',
    steps: ['نفتح موقعك على هاتف…', 'نحمّله على اتصال موبايل…', 'نقيس السرعة (LCP وCLS وTBT)…', 'نفحص SEO وسهولة الوصول…', 'نفحص الأمان…', 'نكتب تقريرك…'],
    cats: { performance: 'السرعة', seo: 'SEO', accessibility: 'الموبايل وسهولة الوصول', 'best-practices': 'الأمان وأفضل الممارسات' },
    metrics: 'أهم الأرقام', fixes: 'ما يجب إصلاحه أولاً', noFixes: 'لا توجد مشاكل كبيرة. عمل رائع.',
    verdict: (s) => (s >= 90 ? 'ممتاز. موقعك في حالة رائعة.' : s >= 70 ? 'جيد، مع بعض الأمور التي تستحق الإصلاح.' : s >= 50 ? 'مقبول، لكنه يخسر زواراً وترتيباً في البحث.' : 'موقعك يحتاج إلى عمل. غالباً يخسر زواراً وزيارات من محركات البحث.'),
    mx: { 'm-ttfb': 'استجابة الخادم', 'm-load': 'تحميل الصفحة', 'm-size': 'حجم الصفحة (HTML)', 'm-files': 'ملفات السكربت / التنسيق', 'm-imgs': 'صور بنص بديل', 'm-https': 'الاتصال' },
    fx: {
      ttfb: 'الخادم بطيء في الاستجابة. استضافة أسرع أو تخزين مؤقت سيساعد', compress: 'فعّل الضغط (gzip أو Brotli)', weight: 'كود الصفحة ثقيل', scripts: 'ملفات سكربت كثيرة', css: 'ملفات تنسيق كثيرة',
      redirects: 'تحويلات كثيرة قبل تحميل الصفحة', lazy: 'حمّل الصور عند الحاجة (loading="lazy")', status: 'الصفحة لا تستجيب بـ “200 OK”', title: 'أضف عنواناً واضحاً للصفحة (10 إلى 65 حرفاً)',
      desc: 'أضف وصفاً للصفحة (meta description) من 50 إلى 170 حرفاً', h1: 'استخدم عنواناً رئيسياً واحداً (H1)', index: 'الصفحة تطلب من Google عدم أرشفتها (noindex)', canonical: 'أضف رابط canonical', robots: 'أضف ملف robots.txt',
      sitemap: 'أضف خريطة موقع sitemap.xml', og: 'أضف وسوم المشاركة على السوشال (Open Graph)', schema: 'أضف بيانات منظمة (Schema.org) لنتائج بحث أغنى', viewport: 'الموقع غير مهيأ للهواتف (وسم viewport مفقود)', lang: 'حدّد لغة الصفحة',
      alt: 'بعض الصور بلا نص بديل', favicon: 'أضف أيقونة للموقع (favicon)', https: 'غير آمن: انتقل إلى HTTPS', mixed: 'صفحة آمنة تحمّل ملفات غير آمنة (http)', hsts: 'أضف ترويسة الأمان HSTS',
      nosniff: 'أضف ترويسة الأمان X-Content-Type-Options', frame: 'احمِ الموقع من clickjacking (‏X-Frame-Options أو CSP)', doctype: 'أضف <!doctype html>', charset: 'حدّد ترميز الأحرف (UTF-8)',
    },
    fixCta: 'تريدنا أن نصلحه؟', fixP: 'نراجع التقرير معك ونخبرك بالضبط ما الذي سنغيّره، مجاناً.', fixBtn: 'أرسلوا لي خطة الإصلاح', again: 'افحص موقعاً آخر',
    errDns: 'لم نجد هذا العنوان. تأكد من كتابته وحاول مجدداً.', errBlocked: (n) => `رفض هذا الموقع الفحص (خطأ ${n}). بعض المواقع تمنع الزيارات الآلية. اترك رابطك وسنفحصه يدوياً.`,
    errUrl: 'الرجاء إدخال عنوان موقع صحيح.', errBusy: 'أداة الفحص المجانية مشغولة الآن (تم بلوغ الحد اليومي). اترك رابطك وسنرسل لك التقرير.', errFail: 'لم نتمكن من فحص هذا الموقع. تأكد من العنوان، أو اتركه لنا وسنفحصه يدوياً.', leave: 'اترك رابطي',
    msg: (u, r) => `فحص مجاني لموقع ${u}\n${r}\nأرسلوا لي خطة الإصلاح.\n\n`,
  },
}

const tone = (s) => (s >= 90 ? 'good' : s >= 50 ? 'ok' : 'bad')

function Ring({ score, label, delay }) {
  const R = 46, L = 2 * Math.PI * R
  return (
    <div className={'ck-ring ' + tone(score)}>
      <svg viewBox="0 0 110 110" aria-hidden="true">
        <circle cx="55" cy="55" r={R} className="bgc" />
        <motion.circle cx="55" cy="55" r={R} className="fg" strokeDasharray={L} initial={{ strokeDashoffset: L }} animate={{ strokeDashoffset: L * (1 - score / 100) }} transition={{ duration: 1.4, ease: EASE, delay }} />
      </svg>
      <b>{score}</b><span>{label}</span>
    </div>
  )
}

export default function CheckPage() {
  const { lang } = useI18n()
  const c = C[lang]
  useMeta(c.label, c.lead)
  const { scrollTo } = useSmoothScroll()
  const [url, setUrl] = useState('')
  const [state, setState] = useState('idle')        // idle | loading | done | error
  const [err, setErr] = useState('')
  const [res, setRes] = useState(null)
  const [step, setStep] = useState(0)
  const ctrl = useRef(null)
  const { search } = useLocation()
  const auto = useRef(false)

  useEffect(() => {
    if (state !== 'loading') return
    const id = setInterval(() => setStep((s) => Math.min(s + 1, c.steps.length - 1)), 4000)
    return () => clearInterval(id)
  }, [state, c.steps.length])
  useEffect(() => () => ctrl.current?.abort(), [])
  // /check?url=… (from the home page box) fills the field and starts right away.
  useEffect(() => {
    const u = new URLSearchParams(search).get('url')
    if (u && !auto.current) { auto.current = true; setUrl(u); setTimeout(() => run(null, u), 300) }
  }, [search]) // eslint-disable-line react-hooks/exhaustive-deps

  const norm = (u) => { u = u.trim(); if (!/^https?:\/\//i.test(u)) u = 'https://' + u; try { const x = new URL(u); return x.hostname.includes('.') ? x.href : null } catch { return null } }

  async function run(e, given) {
    e?.preventDefault()
    const target = norm(given ?? url)
    if (!target) { setErr(c.errUrl); setState('error'); return }
    setState('loading'); setStep(0); setErr('')
    ctrl.current = new AbortController()
    const t0 = Date.now()
    const show = (r) => setTimeout(() => {          // keep the scan on screen for a moment, it reads better than a flash
      setRes(r); setState('done')
      setTimeout(() => scrollTo('#check-res', { offset: -110 }), 80)
    }, Math.max(0, 2600 - (Date.now() - t0)))
    if (API) {
      try {
        const r = await fetch(`${API}?url=${encodeURIComponent(target)}&lang=${lang}`, { signal: ctrl.current.signal })
        const j = r.headers.get('content-type')?.includes('json') ? await r.json() : null
        if (j && !j.error) return show(j)
        if (j?.error) {
          setErr(j.error === 'bad-url' ? c.errUrl : j.error === 'no-dns' ? c.errDns : j.error === 'blocked' ? c.errBlocked(j.status) : c.errFail)
          setState('error'); return
        }
      } catch (ex) { if (ex.name === 'AbortError') return }
      // no function here (static hosting): fall through to Google
    }
    const q = new URLSearchParams({ url: target, strategy: 'mobile', locale: lang })
    CATS.forEach((k) => q.append('category', k.toUpperCase().replace('-', '_')))
    if (KEY) q.set('key', KEY)
    try {
      const r = await fetch('https://www.googleapis.com/pagespeedonline/v5/runPagespeed?' + q, { signal: ctrl.current.signal })
      if (r.status === 429) throw Object.assign(new Error('busy'), { busy: true })
      if (!r.ok) throw new Error(String(r.status))
      const j = await r.json(), lh = j.lighthouseResult
      const scores = Object.fromEntries(CATS.map((k) => [k, Math.round((lh.categories[k]?.score ?? 0) * 100)]))
      const metrics = METRICS.filter((m) => lh.audits[m]).map((m) => ({ id: m, t: lh.audits[m].title, v: lh.audits[m].displayValue, s: lh.audits[m].score }))
      const fixes = Object.values(lh.audits)
        .filter((a) => a.details?.type === 'opportunity' && a.score !== null && a.score < 0.9)
        .sort((a, b) => (b.details.overallSavingsMs || 0) - (a.details.overallSavingsMs || 0)).slice(0, 5)
        .map((a) => ({ t: a.title, v: a.displayValue || '' }))
      show({ url: target, source: 'psi', scores, metrics, fixes })
    } catch (ex) {
      if (ex.name === 'AbortError') return
      setErr(ex.busy ? c.errBusy : c.errFail); setState('error')
    }
  }

  const fixTitle = (f) => f.t || c.fx[f.id] || f.id
  const avg = res ? Math.round(CATS.reduce((a, k) => a + res.scores[k], 0) / CATS.length) : 0
  const sendPlan = () => {
    const summary = res ? CATS.map((k) => `${c.cats[k]}: ${res.scores[k]}/100`).join(' · ') + (res.fixes.length ? '\n' + res.fixes.map((f) => `- ${fixTitle(f)}`).join('\n') : '') : ''
    prefillContact({ needs: [0], message: c.msg(res?.url || norm(url) || url, summary) })
    setTimeout(() => scrollTo('#contact form', { offset: -140 }), 40)
  }

  return (
    <div>
      <section className="sec page-top check">
        <div className="wrap ck-wrap">
          <Heading as="h1" label={c.label} title={c.title} lead={c.lead} />
          <motion.form className="ck-form" onSubmit={run} initial="hidden" animate="show" variants={stagger(0.08, 0.3)}>
            <motion.label variants={up} className="ck-input">
              <Icon name="globe" />
              <input value={url} onChange={(e) => setUrl(e.target.value)} placeholder={c.ph} dir="ltr" inputMode="url" autoComplete="url" aria-label={c.ph} disabled={state === 'loading'} />
              <button className="btn btn-grad" type="submit" disabled={state === 'loading' || !url.trim()} data-mag>{c.go}<Icon name="arrow" className="flip" /></button>
            </motion.label>
            <motion.span variants={up} className="mono ck-powered">{c.powered}</motion.span>
          </motion.form>

          <AnimatePresence mode="wait">
            {state === 'loading' && (
              <motion.div key="load" className="ck-load" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                <div className="ck-scan"><OwlEyes /><span className="ck-beam" /></div>
                <AnimatePresence mode="wait"><motion.p key={step} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>{c.steps[step]}</motion.p></AnimatePresence>
                <small className="ck-wait">{c.wait}</small>
              </motion.div>
            )}
            {state === 'error' && (
              <motion.div key="err" className="card ck-err" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                <p>{err}</p>
                {err !== c.errUrl && <button className="btn btn-grad" onClick={sendPlan}>{c.leave}<Icon name="arrow" className="flip" /></button>}
              </motion.div>
            )}
            {state === 'done' && res && (
              <motion.div key="res" id="check-res" className="ck-res" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                <div className="ck-head"><span className="mono"><span dir="ltr">{res.url}</span> · {c.src[res.source] || c.src.virelix}</span><h2>{c.verdict(avg)}</h2></div>
                <div className="ck-rings">{CATS.map((k, i) => <Ring key={k} score={res.scores[k]} label={c.cats[k]} delay={0.2 + i * 0.12} />)}</div>
                <div className="ck-grid">
                  <div className="card ck-block">
                    <h3>{c.metrics}</h3>
                    <ul className="ck-metrics">{res.metrics.map((m) => <li key={m.id} className={tone((m.s ?? 0) * 100)}><span>{m.t || c.mx[m.id] || m.id}</span><b dir="ltr">{m.v}</b></li>)}</ul>
                  </div>
                  <div className="card ck-block">
                    <h3>{c.fixes}</h3>
                    {res.fixes.length ? <ol className="ck-fixes">{res.fixes.map((f) => <li key={f.t || f.id}><span>{fixTitle(f)}</span>{f.t && f.v && <em dir="ltr">{f.v}</em>}</li>)}</ol> : <p className="ck-none">{c.noFixes}</p>}
                  </div>
                </div>
                <div className="ck-cta">
                  <div><b>{c.fixCta}</b><p>{c.fixP}</p></div>
                  <div className="ck-cta-btns">
                    <button className="btn btn-grad" onClick={sendPlan} data-mag>{c.fixBtn}<Icon name="arrow" className="flip" /></button>
                    <a className="btn btn-ghost" href={res.verify || 'https://pagespeed.web.dev/analysis?form_factor=mobile&url=' + encodeURIComponent(res.url)} target="_blank" rel="noopener noreferrer">{c.verify} ↗</a>
                    <button className="btn btn-ghost" onClick={() => { setState('idle'); setRes(null); setUrl(''); scrollTo(0) }}>{c.again}</button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
      <Contact />
    </div>
  )
}
