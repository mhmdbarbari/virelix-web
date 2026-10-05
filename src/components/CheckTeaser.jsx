import { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useI18n } from '../i18n'
import { inView, stagger, up } from '../anim'
import Icon from './Icon'

const C = {
  en: { label: 'Free tool', t: 'Is your website losing visitors?', d: 'Get a free speed and SEO report from Google in 20 seconds.', go: 'Check it free' },
  ar: { label: 'أداة مجانية', t: 'هل يخسر موقعك زواره؟', d: 'احصل على تقرير مجاني للسرعة وSEO من Google خلال 20 ثانية.', go: 'افحصه مجاناً' },
}

export default function CheckTeaser() {
  const { lang } = useI18n()
  const c = C[lang]
  const navigate = useNavigate()
  const [v, setV] = useState('')
  return (
    <section className="sec ck-teaser-sec">
      <motion.div className="wrap" {...inView} variants={stagger(0.1)}>
        <motion.form variants={up} className="card ck-teaser" onSubmit={(e) => { e.preventDefault(); navigate('/check' + (v.trim() ? '?url=' + encodeURIComponent(v.trim()) : '')) }}>
          <div>
            <span className="pill"><i />{c.label}</span>
            <h2>{c.t}</h2>
            <p>{c.d}</p>
          </div>
          <label className="ck-input">
            <Icon name="globe" />
            <input value={v} onChange={(e) => setV(e.target.value)} placeholder="yourwebsite.com" dir="ltr" inputMode="url" aria-label="Website" />
            <button className="btn btn-grad" type="submit" data-mag>{c.go}<Icon name="arrow" className="flip" /></button>
          </label>
        </motion.form>
      </motion.div>
    </section>
  )
}
