import { motion } from 'framer-motion'
import { inView, stagger, line, up } from '../anim'

/** Section label pill + two-line title (second line in the brand gradient), revealed line by line. */
export default function Heading({ label, title, lead, as: H = 'h2', className = '' }) {
  return (
    <motion.div className={'head ' + className} {...inView} variants={stagger(0.1)}>
      {label && <motion.span className="pill" variants={up}><i />{label}</motion.span>}
      <H className="h2">
        {title.map((t, i) => (
          <span className="ln" key={i}><motion.span className={i === title.length - 1 ? 'grad' : ''} variants={line}>{t}</motion.span></span>
        ))}
      </H>
      {lead && <motion.p className="lead" variants={up}>{lead}</motion.p>}
    </motion.div>
  )
}
