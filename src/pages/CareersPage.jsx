import { useState } from 'react'
import { motion } from 'framer-motion'
import { useI18n } from '../i18n'
import { PAGE_COPY } from '../pages-content'
import { useMeta } from '../hooks/useMeta'
import { inView, stagger, up } from '../anim'
import { sendForm, EMAIL_RE } from '../lib/send'
import Heading from '../components/Heading'
import Icon from '../components/Icon'
import Spotlight from '../components/Spotlight'

const VALUE_ICONS = ['rocket', 'team', 'chart', 'eye']

export default function CareersPage() {
  const { t, lang } = useI18n()
  const C = PAGE_COPY[lang].careers
  useMeta(C.label, C.lead)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [area, setArea] = useState(C.areas[0])

  const submit = async (e) => {
    e.preventDefault()
    const f = e.target, fd = new FormData(f)
    if (fd.get('website')) return
    const d = Object.fromEntries(['name', 'email', 'link', 'message'].map((k) => [k, (fd.get(k) || '').trim()]))
    const errs = {}
    if (d.name.length < 2) errs.name = t.contact.errName
    if (!EMAIL_RE.test(d.email)) errs.email = t.contact.errEmail
    if (d.link && !/^https?:\/\/\S+\.\S+/.test(d.link)) errs.link = C.errLink
    setErrors(errs)
    if (Object.keys(errs).length) return
    setStatus('sending')
    try {
      const r = await sendForm({ subject: `Careers: ${d.name} (${area})`, fields: [['Name', d.name], ['Email', d.email], ['Area', area], ['Link', d.link], ['', d.message]], data: { type: 'careers', area, ...d } })
      setStatus(r); if (r === 'sent') f.reset()
    } catch { setStatus('error') }
  }
  const field = (name, label, o = {}) => (
    <label className={'fld' + (errors[name] ? ' err' : '') + (o.full ? ' full' : '')}>
      {o.area ? <textarea name={name} rows="4" placeholder=" " /> : <input name={name} type={o.type || 'text'} placeholder=" " />}
      <span>{label}</span>{errors[name] && <em>{errors[name]}</em>}
    </label>
  )

  return (
    <div>
      <section className="sec page-top">
        <div className="wrap">
          <Heading as="h1" label={C.label} title={C.title} lead={C.lead} />
          <motion.div className="values" {...inView} variants={stagger(0.1)}>
            {t.about.values.map((v, i) => (
              <motion.div key={v.t} variants={up}>
                <Spotlight className="card value"><span className="value-ic"><Icon name={VALUE_ICONS[i]} /></span><h3>{v.t}</h3><p>{v.d}</p><span className="value-n mono">0{i + 1}</span></Spotlight>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <section className="sec">
        <div className="wrap ct-grid">
          <motion.div {...inView} variants={stagger(0.1)}>
            <motion.span className="pill" variants={up}><i />{t.footer.city}</motion.span>
            <motion.h2 className="h2 cr-h" variants={up}>{C.none}</motion.h2>
            <motion.p className="lead" variants={up}>{C.noneP}</motion.p>
          </motion.div>
          <motion.form className="ct-form" onSubmit={submit} noValidate {...inView} variants={up}>
            <div className="ct-needs"><span className="mono">{C.area}</span>
              <div>{C.areas.map((x) => <button type="button" key={x} className={area === x ? 'on' : ''} aria-pressed={area === x} onClick={() => setArea(x)}>{x}</button>)}</div>
            </div>
            <div className="ct-fields">
              {field('name', t.contact.name)}
              {field('email', t.contact.email, { type: 'email' })}
              {field('link', C.link, { full: true, type: 'url' })}
              {field('message', C.about, { full: true, area: true })}
              <input className="hp" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
            </div>
            <div className="ct-send">
              <button className="btn btn-grad" type="submit" disabled={status === 'sending'}>{status === 'sending' ? t.contact.sending : C.send}<Icon name="arrow" className="flip" /></button>
              <div role="status" aria-live="polite">
                {status === 'sent' && <p className="ok">{C.ok}</p>}
                {status === 'mailto' && <p className="ok">{t.contact.okMail}</p>}
                {status === 'error' && <p className="fail">{t.contact.fail}</p>}
              </div>
            </div>
          </motion.form>
        </div>
      </section>
    </div>
  )
}
