import { useRef, useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useI18n } from '../i18n'
import { useAnchor } from '../hooks/useLenis'
import { routeHref } from '../router'
import { inView, stagger, up } from '../anim'
import Heading from './Heading'
import Owl3D from './Owl3D'
import Icon from './Icon'

const COPY = {
  en: { label: '3D in the browser', title: ['Built to be explored.', 'Drag the owl.'], body: (n) => `This owl is ${n.toLocaleString('en')} live particles, drawn by your browser in real time. Scroll and it comes together, keep scrolling and it scatters. It’s the kind of 3D experience we build for brands that want to be remembered.`, hint: 'Drag to spin · move to disturb', cta: '3D & animated websites' },
  ar: { label: 'أبعاد ثلاثية في المتصفح', title: ['مصمّم ليُستكشف.', 'اسحب البومة.'], body: (n) => `هذه البومة مكوّنة من ${n.toLocaleString('ar-JO')} جزيئاً حيّاً يرسمها متصفحك في الوقت الحقيقي. مرّر فتتجمّع، واستمر فتتفرّق. هذا نوع التجارب ثلاثية الأبعاد التي نبنيها للعلامات التي تريد أن تُذكر.`, hint: 'اسحب للتدوير · حرّك المؤشر للعبث', cta: 'مواقع ثلاثية الأبعاد ومتحركة' },
}

export default function Showcase3D() {
  const { lang } = useI18n()
  const c = COPY[lang]
  const anchor = useAnchor()
  const ref = useRef(null)
  const progress = useRef(0.5)
  const [count, setCount] = useState(0)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  useMotionValueEvent(scrollYProgress, 'change', (v) => { progress.current = v })
  return (
    <section className="sec s3d" id="owl-3d" ref={ref}>
      <div className="wrap s3d-in">
        <motion.div {...inView} variants={stagger(0.1)} className="s3d-copy">
          <Heading label={c.label} title={c.title} />
          <motion.p className="lead" variants={up}>{c.body(count || 30000)}</motion.p>
          <motion.span className="mono s3d-hint" variants={up}>{c.hint}</motion.span>
          <motion.a variants={up} href={routeHref('/services/3d')} onClick={anchor} className="btn btn-ghost">{c.cta}<Icon name="arrow" className="flip" /></motion.a>
        </motion.div>
        <div className="s3d-stage"><span className="s3d-ring" /><Owl3D progress={progress} onCount={setCount} /></div>
      </div>
    </section>
  )
}
