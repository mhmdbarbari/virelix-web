import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'
import { useI18n } from '../i18n'
import { inView, stagger, up } from '../anim'
import Heading from './Heading'
import Spotlight from './Spotlight'

function Count({ to, suffix }) {
  const ref = useRef(null)
  const seen = useInView(ref, { once: true, margin: '-15% 0px' })
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!seen) return
    const c = animate(0, to, { duration: 1.8, ease: [0.16, 1, 0.3, 1], onUpdate: (v) => setN(Math.round(v)) })
    return () => c.stop()
  }, [seen, to])
  return <b ref={ref}>{n}{suffix}</b>
}

export default function Numbers() {
  const { t } = useI18n()
  return (
    <section className="sec numbers" id="impact">
      <div className="wrap">
        <Heading label={t.numbers.label} title={t.numbers.title} />
        <motion.div className="num-grid" {...inView} variants={stagger(0.1)}>
          {t.numbers.items.map((it) => (
            <motion.div key={it.l} variants={up}>
              <Spotlight className="card num"><Count to={it.v} suffix={it.s} /><span>{it.l}</span></Spotlight>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
