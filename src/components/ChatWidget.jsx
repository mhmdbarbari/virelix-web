import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useI18n } from '../i18n'
import { CONTACT } from '../content'
import { useSmoothScroll } from '../hooks/useLenis'
import { prefillContact } from '../lib/send'
import { demoAnswer } from '../chat/demo'
import owlEyes from '../assets/img/owl-head-eyes.webp'

// POST endpoint that streams plain-text answers (api/chat.js on Vercel). Unset = demo mode.
const ENDPOINT = import.meta.env.VITE_CHAT_ENDPOINT?.trim() // trim: a stray BOM/space in the env value must not break the URL
const EASE = [0.16, 1, 0.3, 1]
const TOKEN = /\[(contact|planner|whatsapp|careers|check|service:[a-z0-9-]+|work:[a-z0-9-]+)\]/g

const UI = {
  en: {
    fab: 'Ask the owl', title: 'VIRELIX assistant', live: 'AI · answers in seconds', demo: 'Demo mode · answers from our website',
    hi: 'Hi! I’m the VIRELIX owl. Ask me about our services, our work, or how to start a project.',
    sugg: ['What do you build?', 'Do you make 3D websites?', 'How much does a website cost?', 'Where are you based?'],
    ph: 'Ask a question…', note: 'AI answers can be wrong. Please don’t share confidential information.', person: 'Talk to a person',
    act: { contact: 'Contact the team', planner: 'Plan your project', whatsapp: 'WhatsApp us', careers: 'See careers', check: 'Free website check' },
    asked: 'From the website chat, I asked:',
  },
  ar: {
    fab: 'اسأل البومة', title: 'مساعد VIRELIX', live: 'ذكاء اصطناعي · يردّ خلال ثوانٍ', demo: 'وضع تجريبي · إجابات من موقعنا',
    hi: 'أهلاً! أنا بومة VIRELIX. اسألني عن خدماتنا، أعمالنا، أو كيف تبدأ مشروعك.',
    sugg: ['شو بتعملوا؟', 'بتعملوا مواقع 3D؟', 'كم بكلّف الموقع؟', 'وين مكتبكم؟'],
    ph: 'اكتب سؤالك…', note: 'إجابات الذكاء الاصطناعي قد تخطئ. لا تشارك معلومات سرية.', person: 'تحدّث مع شخص',
    act: { contact: 'تواصل مع الفريق', planner: 'خطّط لمشروعك', whatsapp: 'راسلنا واتساب', careers: 'الوظائف', check: 'فحص موقعك مجاناً' },
    asked: 'من محادثة الموقع، سألت:',
  },
}

function parse(text, streaming) {
  const actions = [...new Set([...text.matchAll(TOKEN)].map((m) => m[1]))].slice(0, 3)
  let body = text.replace(TOKEN, '')
  if (streaming) body = body.replace(/\[[a-z0-9:-]*$/, '')
  return { body: body.replace(/\n{3,}/g, '\n\n').trim(), actions }
}

export default function ChatWidget() {
  const { t, lang } = useI18n()
  const u = UI[lang]
  const [open, setOpen] = useState(false)
  const [msgs, setMsgs] = useState([])
  const [input, setInput] = useState('')
  const [busy, setBusy] = useState(false)
  const [demo, setDemo] = useState(!ENDPOINT)
  const listRef = useRef(null), inputRef = useRef(null), abortRef = useRef(null)
  const navigate = useNavigate()
  const { scrollTo } = useSmoothScroll()

  useEffect(() => { if (open) setTimeout(() => inputRef.current?.focus(), 350) }, [open])
  useEffect(() => { if (!open) return; const esc = (e) => e.key === 'Escape' && setOpen(false); addEventListener('keydown', esc); return () => removeEventListener('keydown', esc) }, [open])
  useEffect(() => { const l = listRef.current; if (l) l.scrollTop = l.scrollHeight }, [msgs])
  useEffect(() => () => abortRef.current?.abort(), [])
  useEffect(() => { const o = () => setOpen(true); addEventListener('vx:chat-open', o); return () => removeEventListener('vx:chat-open', o) }, [])

  const label = (a) => {
    if (u.act[a]) return u.act[a]
    const [k, id] = a.split(':')
    if (k === 'service') return t.services.items[id]?.t
    if (k === 'work') return t.work.items[id]?.t
    return null
  }
  const update = (fn) => setMsgs((m) => { const c = [...m]; c[c.length - 1] = fn(c[c.length - 1]); return c })

  async function ask(q) {
    q = q.trim().slice(0, 1200)
    if (!q || busy) return
    setInput('')
    const history = [...msgs.filter((m) => m.content), { role: 'user', content: q }]
    setMsgs([...history, { role: 'assistant', content: '', streaming: true }])
    setBusy(true)
    const finish = (text) => update(() => ({ role: 'assistant', content: text }))
    if (demo) { await new Promise((r) => setTimeout(r, 450)); finish(demoAnswer(q)); setBusy(false); return }
    try {
      abortRef.current = new AbortController()
      const res = await fetch(ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json' }, signal: abortRef.current.signal, body: JSON.stringify({ messages: history.map(({ role, content }) => ({ role, content })) }) })
      if (!res.ok || !res.body) throw new Error(String(res.status))
      const reader = res.body.getReader(), dec = new TextDecoder()
      let text = ''
      for (;;) { const { done, value } = await reader.read(); if (done) break; text += dec.decode(value, { stream: true }); update((m) => ({ ...m, content: text })) }
      finish(text || '…')
    } catch (e) {
      if (e.name === 'AbortError') return
      finish(demoAnswer(q))   // busy or offline: answer this one from site content, but keep trying the AI for the next question
    } finally { setBusy(false) }
  }

  function act(a) {
    setOpen(false)
    if (a === 'whatsapp') { window.open(`https://wa.me/${CONTACT.whatsapp}`, '_blank', 'noopener'); return }
    if (a === 'contact') {
      const asked = msgs.filter((m) => m.role === 'user').map((m) => `- ${m.content}`).slice(-4)
      prefillContact({ message: asked.length ? `${u.asked}\n${asked.join('\n')}\n\n` : '' })
      if (document.querySelector('#contact form')) scrollTo('#contact form', { offset: -140 })
      else navigate('/', { state: { scrollTo: '#contact' } })
      return
    }
    if (a === 'planner') return navigate('/start')
    if (a === 'careers') return navigate('/careers')
    if (a === 'check') return navigate('/check')
    const [k, id] = a.split(':')
    navigate(k === 'service' ? '/services/' + id : '/work/' + id)
  }

  return (
    <>
      <motion.button className={'chat-fab' + (open ? ' is-open' : '')} onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-controls="chat-panel"
        initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 2.6, duration: 0.6, ease: EASE }} data-mag>
        <span className="chat-fab-t">{open ? '×' : u.fab}</span>
        <span className="chat-fab-owl"><img src={owlEyes} alt="" /></span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.section id="chat-panel" className="chat-panel" role="dialog" aria-label={u.title}
            initial={{ opacity: 0, y: 24, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 16, scale: 0.97 }} transition={{ duration: 0.4, ease: EASE }}>
            <header className="chat-head">
              <span className="chat-av"><img src={owlEyes} alt="" /></span>
              <div><b>{u.title}</b><small>{demo ? u.demo : u.live}</small></div>
              <button className="chat-x" onClick={() => setOpen(false)} aria-label="Close">×</button>
            </header>
            <div className="chat-list" ref={listRef} data-lenis-prevent aria-live="polite">
              <div className="chat-msg bot"><p>{u.hi}</p></div>
              {msgs.map((m, i) => {
                if (m.role === 'user') return <div className="chat-msg me" key={i}><p dir="auto">{m.content}</p></div>
                const { body, actions } = parse(m.content, m.streaming)
                return (
                  <div className="chat-msg bot" key={i}>
                    {body ? <p dir="auto">{body}</p> : <span className="chat-typing" aria-label="…"><i /><i /><i /></span>}
                    {!m.streaming && actions.length > 0 && <div className="chat-acts">{actions.map((a) => label(a) && <button key={a} onClick={() => act(a)}>{label(a)} {lang === 'ar' ? '←' : '→'}</button>)}</div>}
                  </div>
                )
              })}
              {!msgs.length && <div className="chat-sugg">{u.sugg.map((s) => <button key={s} onClick={() => ask(s)}>{s}</button>)}</div>}
            </div>
            <form className="chat-in" onSubmit={(e) => { e.preventDefault(); ask(input) }}>
              <input ref={inputRef} value={input} onChange={(e) => setInput(e.target.value)} placeholder={u.ph} maxLength={1200} aria-label={u.ph} dir="auto" />
              <button type="submit" disabled={busy || !input.trim()} aria-label="Send">{lang === 'ar' ? '↑' : '↑'}</button>
            </form>
            <p className="chat-note">{u.note} <button onClick={() => act('contact')}>{u.person}</button></p>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  )
}
