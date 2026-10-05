import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useI18n } from '../i18n'
import { gsap, useGSAP, prefersReducedMotion } from '../motion'
import { inView, stagger, up } from '../anim'
import Heading from './Heading'
import Icon from './Icon'
import Spotlight from './Spotlight'

const VALUE_ICONS = ['rocket', 'team', 'chart', 'eye']

export default function About() {
  const { t, lang } = useI18n()
  const ref = useRef(null)
  // Manifesto words light up as you scroll past them.
  useGSAP(() => {
    if (prefersReducedMotion()) return
    gsap.fromTo(ref.current.querySelectorAll('.mf-w'), { opacity: 0.16 }, {
      opacity: 1, stagger: 0.05, ease: 'none',
      scrollTrigger: { trigger: ref.current.querySelector('.manifesto'), start: 'top 78%', end: 'bottom 45%', scrub: true },
    })
  }, { scope: ref, dependencies: [lang], revertOnUpdate: true })

  return (
    <section className="sec about" id="about" ref={ref}>
      <div className="wrap">
        <Heading label={t.about.label} title={t.about.title} className="about-head" />
        <div className="about-grid">
          <p className="manifesto">{t.about.body.split(' ').map((w, i) => <span className="mf-w" key={i}>{w} </span>)}</p>
          <motion.p className="about-p2" {...inView} variants={up}>{t.about.body2}</motion.p>
        </div>
        <motion.div className="values" {...inView} variants={stagger(0.1)}>
          {t.about.values.map((v, i) => (
            <motion.div key={v.t} variants={up}>
              <Spotlight className="card value">
                <span className="value-ic"><Icon name={VALUE_ICONS[i]} /></span>
                <h3>{v.t}</h3>
                <p>{v.d}</p>
                <span className="value-n mono">0{i + 1}</span>
              </Spotlight>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
