import { useState } from 'react'
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'
import { useI18n } from '../i18n'
import { WORK } from '../content'
import { useMeta } from '../hooks/useMeta'
import { stagger } from '../anim'
import Heading from '../components/Heading'
import WorkCard from '../components/WorkCard'

export default function WorkPage() {
  const { t } = useI18n()
  useMeta(t.nav.work, t.work.pageLead)
  const [f, setF] = useState('all')
  const list = WORK.filter((p) => f === 'all' || p.cat.includes(f))
  return (
    <section className="sec page-top" id="work-page">
      <div className="wrap">
        <Heading as="h1" label={t.work.label} title={t.work.pageTitle} lead={t.work.pageLead} />
        <LayoutGroup>
          <div className="filters" role="tablist">
            {Object.entries(t.work.filters).map(([k, l]) => (
              <button key={k} role="tab" aria-selected={f === k} className={f === k ? 'on' : ''} onClick={() => setF(k)}>
                {f === k && <motion.span layoutId="flt" className="flt-pill" />}<span>{l}</span>
              </button>
            ))}
          </div>
          <motion.div layout className="work-grid page" initial="hidden" animate="show" variants={stagger(0.08)}>
            <AnimatePresence mode="popLayout">{list.map((p) => <WorkCard key={p.id} p={p} />)}</AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </div>
    </section>
  )
}
