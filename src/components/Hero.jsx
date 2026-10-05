import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useI18n } from '../i18n'
import { useAnchor } from '../hooks/useLenis'
import { routeHref } from '../router'
import { EASE } from '../anim'
import { SERVICES } from '../content'
import OwlEyes from './OwlEyes'
import Icon from './Icon'

export default function Hero({ ready }) {
  const { t, lang } = useI18n()
  const anchor = useAnchor()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const owlY = useTransform(scrollYProgress, [0, 1], ['0%', '28%'])
  const owlS = useTransform(scrollYProgress, [0, 1], [1, 0.82])
  const txtY = useTransform(scrollYProgress, [0, 1], ['0%', '-18%'])
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const go = ready ? 'show' : 'hidden'
  const v = { hidden: {}, show: { transition: { staggerChildren: 0.11, delayChildren: 0.25 } } }
  const ln = { hidden: { y: '115%', rotate: lang === 'ar' ? -3 : 3 }, show: { y: '0%', rotate: 0, transition: { duration: 1.2, ease: EASE } } }
  const fadeUp = { hidden: { opacity: 0, y: 26 }, show: { opacity: 1, y: 0, transition: { duration: 1, ease: EASE } } }

  return (
    <section className="hero" ref={ref} id="top">
      <div className="wrap hero-in">
        <motion.div className="hero-copy" style={{ y: txtY, opacity: fade }} initial="hidden" animate={go} variants={v}>
          <motion.span className="pill" variants={fadeUp}><i />{t.hero.kicker}</motion.span>
          <h1 className="h1">
            {t.hero.lines.map((l, i) => (
              <span className="ln" key={l}><motion.span className={i >= 2 ? 'grad' : ''} variants={ln}>{l}</motion.span></span>
            ))}
          </h1>
          <motion.p className="hero-lead" variants={fadeUp}>{t.hero.lead}</motion.p>
          <motion.div className="hero-cta" variants={fadeUp}>
            <a href="#contact" className="btn btn-grad" onClick={anchor}>{t.hero.cta}<Icon name="arrow" className="flip" /></a>
            <a href={routeHref('/work')} className="btn btn-ghost" onClick={anchor}>{t.hero.cta2}</a>
          </motion.div>
        </motion.div>

        <motion.div className="hero-owl" style={{ y: owlY, scale: owlS }} initial={{ opacity: 0, scale: 0.9, filter: 'blur(14px)' }} animate={ready ? { opacity: 1, scale: 1, filter: 'blur(0px)' } : {}} transition={{ duration: 1.4, ease: EASE, delay: 0.35 }}>
          <span className="hero-halo" />
          <OwlEyes />
        </motion.div>
      </div>

      <motion.div className="hero-band" initial={{ opacity: 0 }} animate={ready ? { opacity: 1 } : {}} transition={{ delay: 1.2, duration: 1 }}>
        <div className="marquee"><div className="marquee-track">
          {[0, 1].map((k) => (
            <div className="marquee-set" key={k} aria-hidden={k === 1}>
              {SERVICES.map((s) => <span key={s.id}><Icon name={s.icon} />{t.services.items[s.id].t}</span>)}
            </div>
          ))}
        </div></div>
      </motion.div>
    </section>
  )
}
