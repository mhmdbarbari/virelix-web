import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useI18n } from '../i18n'
import { WORK } from '../content'
import { useAnchor } from '../hooks/useLenis'
import { routeHref } from '../router'
import { gsap, useGSAP } from '../motion'
import { inView, stagger, up } from '../anim'
import Heading from './Heading'
import WorkCard from './WorkCard'
import Icon from './Icon'

/**
 * Selected work. On desktop the section pins and the projects glide sideways as you scroll (cinematic gallery);
 * on small screens and with reduced motion it is a normal grid.
 */
export default function WorkSection() {
  const { t, lang } = useI18n()
  const anchor = useAnchor()
  const sec = useRef(null), track = useRef(null)
  const [idx, setIdx] = useState(1)

  useGSAP(() => {
    const mm = gsap.matchMedia()
    mm.add('(min-width: 1001px) and (prefers-reduced-motion: no-preference)', () => {
      const rtl = document.documentElement.dir === 'rtl'
      const dist = () => Math.max(0, track.current.scrollWidth - innerWidth + 80)
      const tween = gsap.to(track.current, {
        x: () => (rtl ? dist() : -dist()), ease: 'none',
        scrollTrigger: {
          trigger: sec.current, start: 'top top', end: () => '+=' + dist(), pin: true, scrub: 0.8, invalidateOnRefresh: true,
          onUpdate: (s) => setIdx(Math.min(WORK.length, 1 + Math.floor(s.progress * WORK.length * 0.999))),
        },
      })
      // screenshots drift inside their frames for depth
      gsap.utils.toArray(track.current.querySelectorAll('.work-shot img, .work-cover > *')).forEach((el) => {
        gsap.fromTo(el, { xPercent: rtl ? -6 : 6 }, { xPercent: rtl ? 6 : -6, ease: 'none', scrollTrigger: { trigger: el, containerAnimation: tween, start: 'left right', end: 'right left', scrub: true } })
      })
    })
    return () => mm.revert()
  }, { scope: sec, dependencies: [lang], revertOnUpdate: true })

  return (
    <section className="sec work-sec gallery-sec" id="work" ref={sec}>
      <div className="wrap gallery-head">
        <Heading label={t.work.label} title={t.work.title} />
        <div className="gallery-meta">
          <span className="mono gallery-count"><b>0{idx}</b> / 0{WORK.length}</span>
          <motion.a {...inView} variants={up} href={routeHref('/work')} onClick={anchor} className="btn btn-ghost">{t.work.all} →</motion.a>
        </div>
      </div>
      <div className="gallery-viewport">
        <motion.div className="gallery-track" ref={track} {...inView} variants={stagger(0.1)}>
          {WORK.map((p) => <WorkCard key={p.id} p={p} big />)}
          <motion.a variants={up} href={routeHref('/work')} onClick={anchor} className="gallery-end" data-cursor={t.work.view}>
            <span className="mono">{t.work.label}</span>
            <b>{t.work.pageTitle.join(' ')}</b>
            <i><Icon name="arrow" className="flip" /></i>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
