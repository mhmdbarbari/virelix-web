import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useI18n } from '../i18n'
import { CONTACT } from '../content'
import { inView, stagger, up } from '../anim'
import Heading from './Heading'
import Icon from './Icon'

// Set VITE_CONTACT_ENDPOINT (Formspree, Getform, your API…) to receive messages directly.
// Without it, the form opens the visitor's email app with the message filled in.
const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export default function Contact() {
  const { t } = useI18n()
  const c = t.contact
  const [needs, setNeeds] = useState([])
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const formRef = useRef(null)

  // Pre-fill from the project planner or the chat assistant: { needs: number[], message: string }.
  useEffect(() => {
    const on = (e) => {
      const d = e.detail || {}
      if (d.needs) setNeeds(d.needs.map((i) => c.needs[i]).filter(Boolean))
      const m = formRef.current?.elements.message
      if (m && d.message) { m.value = d.message; m.rows = Math.min(14, d.message.split('\n').length + 1) }
    }
    addEventListener('vx:prefill', on)
    return () => removeEventListener('vx:prefill', on)
  }, [c])

  const submit = async (e) => {
    e.preventDefault()
    const f = e.target, fd = new FormData(f)
    if (fd.get('website')) return
    const d = { name: (fd.get('name') || '').trim(), email: (fd.get('email') || '').trim(), company: (fd.get('company') || '').trim(), message: (fd.get('message') || '').trim(), needs }
    const errs = {}
    if (d.name.length < 2) errs.name = c.errName
    if (!EMAIL_RE.test(d.email)) errs.email = c.errEmail
    setErrors(errs)
    if (Object.keys(errs).length) { f.querySelector(`[name="${Object.keys(errs)[0]}"]`)?.focus(); return }
    if (!ENDPOINT) {
      const body = [`Name: ${d.name}`, `Email: ${d.email}`, d.company && `Company: ${d.company}`, needs.length && `Needs: ${needs.join(', ')}`, '', d.message].filter((x) => typeof x === 'string').join('\n')
      window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent('New project: ' + (d.company || d.name))}&body=${encodeURIComponent(body)}`
      setStatus('mailto'); return
    }
    setStatus('sending')
    try {
      const r = await fetch(ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify({ ...d, page: location.href }) })
      if (!r.ok) throw new Error(r.status)
      setStatus('sent'); f.reset(); setNeeds([])
    } catch { setStatus('error') }
  }

  const field = (name, label, opts = {}) => (
    <label className={'fld' + (errors[name] ? ' err' : '') + (opts.full ? ' full' : '')}>
      {opts.area ? <textarea name={name} rows="4" placeholder=" " /> : <input name={name} type={opts.type || 'text'} placeholder=" " autoComplete={opts.ac} aria-invalid={!!errors[name]} />}
      <span>{label}</span>
      {errors[name] && <em>{errors[name]}</em>}
    </label>
  )
  const toggle = (n) => setNeeds((a) => (a.includes(n) ? a.filter((x) => x !== n) : [...a, n]))

  return (
    <section className="sec contact" id="contact">
      <div className="wrap">
        <Heading label={c.label} title={c.title} lead={c.lead} />
        <div className="ct-grid">
          <motion.form ref={formRef} className="ct-form" onSubmit={submit} noValidate {...inView} variants={stagger(0.06)}>
            <motion.div className="ct-needs" variants={up}>
              <span className="mono">{c.need}</span>
              <div>{c.needs.map((n) => <button type="button" key={n} className={needs.includes(n) ? 'on' : ''} aria-pressed={needs.includes(n)} onClick={() => toggle(n)}>{n}</button>)}</div>
            </motion.div>
            <motion.div className="ct-fields" variants={up}>
              {field('name', c.name, { ac: 'name' })}
              {field('email', c.email, { type: 'email', ac: 'email' })}
              {field('company', c.company, { full: true, ac: 'organization' })}
              {field('message', c.message, { full: true, area: true })}
              <input className="hp" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
            </motion.div>
            <motion.div variants={up} className="ct-send">
              <button className="btn btn-grad" type="submit" disabled={status === 'sending'}>{status === 'sending' ? c.sending : c.send}<Icon name="arrow" className="flip" /></button>
              <div role="status" aria-live="polite">
                {status === 'sent' && <p className="ok">{c.ok}</p>}
                {status === 'mailto' && <p className="ok">{c.okMail}</p>}
                {status === 'error' && <p className="fail">{c.fail}</p>}
              </div>
            </motion.div>
          </motion.form>

          <motion.aside className="ct-info card" {...inView} variants={stagger(0.08)}>
            <motion.a variants={up} href={`mailto:${CONTACT.email}`} className="ct-row"><span className="ct-ic"><Icon name="mail" /></span><span><small>{c.emailL}</small><b dir="ltr">{CONTACT.email}</b></span></motion.a>
            <motion.a variants={up} href={CONTACT.phoneHref} className="ct-row"><span className="ct-ic"><Icon name="phone" /></span><span><small>{c.phoneL}</small><b dir="ltr">{CONTACT.phone}</b></span></motion.a>
            <motion.a variants={up} href={CONTACT.mapsUrl} target="_blank" rel="noopener noreferrer" className="ct-row"><span className="ct-ic"><Icon name="pin" /></span><span><small>{c.locL}</small><b>{c.address}</b></span></motion.a>
            <motion.div variants={up} className="ct-social">
              <a className="btn btn-wa" href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noopener noreferrer"><Icon name="whatsapp" />{c.whatsapp}</a>
              {CONTACT.instagram && <a className="soc" href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Icon name="instagram" /></a>}
              {CONTACT.tiktok && <a className="soc" href={CONTACT.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok"><Icon name="tiktok" /></a>}
            </motion.div>
          </motion.aside>
        </div>

        <motion.div className="map" {...inView} variants={up}>
          <iframe title="VIRELIX HQ map" src={CONTACT.mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          <div className="map-card">
            <b>{c.hq}</b><span>{c.address}</span>
            <a className="mono" href={CONTACT.mapsUrl} target="_blank" rel="noopener noreferrer">{c.openMaps} ↗</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
