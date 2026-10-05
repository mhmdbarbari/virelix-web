import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useI18n } from '../i18n'
import { inView, up } from '../anim'
import Heading from './Heading'

/** Six phases on a line that fills as you scroll; each phase lights up when the line reaches it. */
export default function Process() {
  const { t } = useI18n()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 65%', 'end 55%'] })
  const fill = useTransform(scrollYProgress, [0, 1], [0, 1])
  return (
    <section className="sec process" id="process">
      <div className="wrap proc">
        <div className="proc-side"><Heading label={t.process.label} title={t.process.title} /></div>
        <ol className="proc-list" ref={ref}>
          <span className="proc-rail"><motion.i style={{ scaleY: fill }} /></span>
          {t.process.steps.map((s, i) => (
            <Step key={s.t} s={s} i={i} n={t.process.steps.length} progress={scrollYProgress} phase={t.process.phase} />
          ))}
        </ol>
      </div>
    </section>
  )
}

function Step({ s, i, n, progress, phase }) {
  const at = i / (n - 1)
  const on = useTransform(progress, [at - 0.12, at], [0, 1])
  const op = useTransform(on, [0, 1], [0.35, 1])
  return (
    <motion.li className="proc-step" style={{ opacity: op }}>
      <motion.span className="proc-dot" style={{ scale: useTransform(on, [0, 1], [0.6, 1]) }}><b>{i + 1}</b></motion.span>
      <span className="mono proc-ph">{phase} 0{i + 1}</span>
      <h3>{s.t}</h3>
      <p>{s.d}</p>
    </motion.li>
  )
}
