import { useState } from 'react'
import { InstagramIcon, TikTokIcon, WhatsAppIcon } from './SocialIcons'
import { useLanguage } from '../lib/i18n'

const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=King+Hussein+Business+Park,+Amman,+Jordan'

// in dev this stays empty so Vite's /api proxy (vite.config.js) handles it;
// in production set VITE_API_URL to the deployed backend's origin
const API_URL = import.meta.env.VITE_API_URL || ''

// structural metadata (icon/link) paired by index with the translated title/value
const INFO_META = [
  { icon: '✉', href: 'mailto:contact@vrelix.net' },
  { icon: '◷', href: 'tel:+962787844005', ltr: true }, // phone digits must not get bidi-reordered under RTL
  { icon: '◎', href: MAPS_URL, external: true },
]

const SOCIALS = [
  { label: 'WhatsApp', href: 'https://wa.me/962787844005', Icon: WhatsAppIcon },
  { label: 'Instagram', href: 'https://www.instagram.com/virelix.solutions', Icon: InstagramIcon },
  { label: 'TikTok', href: 'https://www.tiktok.com/@virelix.solutions', Icon: TikTokIcon },
]

export default function Contact() {
  const { t } = useLanguage()
  const f = t('contact.form')
  const info = t('contact.info').map((r, i) => ({ ...r, ...INFO_META[i] }))
  const map = t('contact.map')

  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [serverError, setServerError] = useState('')

  const set = k => e => {
    setForm(fm => ({ ...fm, [k]: e.target.value }))
    setErrors(er => ({ ...er, [k]: false }))
  }

  const submit = async e => {
    e.preventDefault()
    if (sending) return
    const er = {
      name: form.name.trim().length < 2,
      email: !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email.trim()),
      message: form.message.trim().length < 4,
    }
    setErrors(er)
    if (er.name || er.email || er.message) return
    setSending(true)
    setServerError('')
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setSent(true)
      } else if (res.status === 429) {
        setServerError(f.errorRate)
      } else {
        setServerError(f.errorGeneric)
      }
    } catch {
      setServerError(f.errorNetwork)
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact">
      <div className="eyebrow reveal">{t('contact.eyebrow')}</div>
      <h2 className="title reveal">{t('contact.title')}<em>{t('contact.titleEm')}</em></h2>
      <div className="wrap">
        {sent ? (
          <div id="formOk" style={{ display: 'block' }}>
            <b>{f.success}</b>
          </div>
        ) : (
          <form onSubmit={submit} noValidate>
            <div className={`field${errors.name ? ' bad' : ''}`}>
              <input className="hoverable" id="fName" type="text" placeholder=" "
                autoComplete="name" value={form.name} onChange={set('name')} />
              <label htmlFor="fName">{f.name}</label><span className="err">{f.required}</span>
            </div>
            <div className={`field${errors.email ? ' bad' : ''}`}>
              <input className="hoverable" id="fMail" type="email" placeholder=" "
                autoComplete="email" value={form.email} onChange={set('email')} />
              <label htmlFor="fMail">{f.email}</label><span className="err">{f.invalidEmail}</span>
            </div>
            <div className="field">
              <input className="hoverable" id="fComp" type="text" placeholder=" "
                autoComplete="organization" value={form.company} onChange={set('company')} />
              <label htmlFor="fComp">{f.company}</label>
            </div>
            <div className={`field${errors.message ? ' bad' : ''}`}>
              <textarea className="hoverable" id="fMsg" rows="4" placeholder=" "
                value={form.message} onChange={set('message')} />
              <label htmlFor="fMsg">{f.message}</label><span className="err">{f.required}</span>
            </div>
            {serverError && <p className="form-err">{serverError}</p>}
            <button type="submit" className="btn btn-primary hoverable magnetic" disabled={sending}
              style={sending ? { opacity: 0.6, pointerEvents: 'none' } : undefined}>
              {sending ? f.sending : <>{f.send} <span className="arr">→</span></>}
            </button>
          </form>
        )}
        <div className="c-info">
          {info.map(r => (
            <div key={r.title} className="row">
              <div className="ic">{r.icon}</div>
              <div>
                <b>{r.title}</b>
                {r.href
                  ? <a className="cval hoverable" href={r.href} dir={r.ltr ? 'ltr' : undefined}
                      {...(r.external ? { target: '_blank', rel: 'noreferrer' } : {})}>{r.value}</a>
                  : <span>{r.value}</span>}
              </div>
            </div>
          ))}
          <div className="socials">
            {SOCIALS.map(({ label, href, Icon }) => (
              <a key={label} className="hoverable" href={href} target="_blank" rel="noreferrer"
                aria-label={label} title={label}>
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="map-wrap reveal">
        <iframe
          title="VIRELIX — Al Hussein Business Park, Amman"
          src="https://www.google.com/maps?q=Al+Hussein+Business+Park,+Amman,+Jordan&z=16&output=embed"
          loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
        <a className="map-label hoverable" href={MAPS_URL} target="_blank" rel="noreferrer">
          <b>{map.hq}</b>
          <span>{map.address}</span>
          <em>{map.open} ↗</em>
        </a>
      </div>
    </section>
  )
}
