// Builds api/_knowledge.md: the only content the chat assistant may answer from. Runs before every build.
import { createServer } from 'vite'
import { writeFileSync } from 'node:fs'

const vite = await createServer({ server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' })
const { COPY, CONTACT, SERVICES, WORK, STACK } = await vite.ssrLoadModule('/src/content.js')
const { SERVICE_PAGES, PROJECT_PAGES } = await vite.ssrLoadModule('/src/pages-content.js')
await vite.close()

const en = COPY.en, ar = COPY.ar
const L = ['# VIRELIX: site knowledge', '', en.about.body, en.about.body2, '', `Tagline: ${en.intro.tagline.join(' ')}`]
const h = (x) => L.push('', `## ${x}`, '')
h('Contact')
L.push(`- Email: ${CONTACT.email}`, `- Phone / WhatsApp: ${CONTACT.phone} [whatsapp]`, `- Address: ${en.contact.address}`, '- Replies within one working day.')
h('Services')
for (const s of SERVICES) {
  const it = en.services.items[s.id], p = SERVICE_PAGES[s.id].en
  L.push(`### ${it.t} (Arabic: ${ar.services.items[s.id].t}) [service:${s.id}]`, `Team: ${s.side === 'build' ? 'Build (code)' : 'Grow (marketing)'}`, it.d, p.intro)
  L.push('What we deliver:', ...p.deliver.map((d) => `- ${d.t}: ${d.d}`), `Tools: ${SERVICE_PAGES[s.id].tech.join(', ')}`)
  L.push('FAQ:', ...p.faqs.map((f) => `- Q: ${f.q} A: ${f.a}`), '')
}
h('Work (selected projects)')
for (const w of WORK) {
  const it = en.work.items[w.id]
  L.push(`### ${it.t} (${it.kind}) [work:${w.id}]`, it.d, `Built: ${PROJECT_PAGES[w.id].en.built.join('; ')}`, '')
}
h('Process')
en.process.steps.forEach((s, i) => L.push(`${i + 1}. ${s.t}: ${s.d}`))
h('Values')
en.about.values.forEach((v) => L.push(`- ${v.t}: ${v.d}`))
h('Numbers')
en.numbers.items.forEach((n) => L.push(`- ${n.v}${n.s} ${n.l}`))
h('Stack')
L.push(STACK.join(', '))
h('Blog')
Object.values(en.blog.items).forEach((b) => L.push(`- ${b.t} (${b.tag})`))
h('Careers')
L.push('No roles are listed right now; people can send an open application on the careers page [careers].')
h('Starting a project')
L.push('- Project planner: four questions, then a brief with the right services and team, sent to us pre-filled [planner].', '- Or use the contact form [contact]. Pricing depends on the project; we reply with questions and a proposal.')
writeFileSync(new URL('../api/_knowledge.md', import.meta.url), L.join('\n') + '\n')
console.log('api/_knowledge.md written')
