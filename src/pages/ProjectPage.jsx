import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useI18n } from '../i18n'
import { SERVICES, WORK } from '../content'
import { PROJECT_PAGES, PAGE_COPY } from '../pages-content'
import { useAnchor } from '../hooks/useLenis'
import { useMeta } from '../hooks/useMeta'
import { routeHref } from '../router'
import { EASE, inView, stagger, up } from '../anim'
import owlEyes from '../assets/img/owl-head-eyes.webp'
import { Wordmark } from '../components/Logo'
import Icon from '../components/Icon'
import WorkCard from '../components/WorkCard'
import NotFound from './NotFound'

export default function ProjectPage() {
  const { id } = useParams()
  const { t, lang } = useI18n()
  const anchor = useAnchor()
  const i = WORK.findIndex((w) => w.id === id)
  const p = WORK[i], w = p && t.work.items[id], page = PROJECT_PAGES[id]
  useMeta(w?.t, w?.d)
  if (!p || !page) return <NotFound />
  const pc = PAGE_COPY[lang].proj
  const next = WORK[(i + 1) % WORK.length]
  return (
    <div key={id + lang}>
      <section className="sec page-top pj-hero" style={{ '--acc': p.accent }}>
        <div className="wrap">
          <motion.div initial="hidden" animate="show" variants={stagger(0.08, 0.1)}>
            <motion.nav className="crumb mono" variants={up} aria-label="Breadcrumb">
              <a href={routeHref('/')} onClick={anchor}>VIRELIX</a><span>/</span><a href={routeHref('/work')} onClick={anchor}>{pc.crumb}</a><span>/</span><b>{w.t}</b>
            </motion.nav>
            <motion.span className="work-kind mono" variants={up}>{w.kind}</motion.span>
            <h1 className="h1"><span className="ln"><motion.span className="grad" variants={{ hidden: { y: '115%' }, show: { y: '0%', transition: { duration: 1.1, ease: EASE } } }}>{w.t}</motion.span></span></h1>
            <motion.p className="lead" variants={up}>{w.d}</motion.p>
            <motion.div className="tags" variants={up}>{w.tags.map((g) => <span key={g}>{g}</span>)}</motion.div>
          </motion.div>
          <motion.div className="pj-media" initial={{ opacity: 0, y: 60, rotateX: 12 }} animate={{ opacity: 1, y: 0, rotateX: 0 }} transition={{ duration: 1.3, ease: EASE, delay: 0.35 }}>
            {p.image ? (
              <span className="work-shot pj-shot"><span className="work-bar"><i /><i /><i /></span><img src={p.image} alt={w.t} /></span>
            ) : p.id === 'night-owl' ? <span className="work-cover owl-cover"><img src={owlEyes} alt="" /></span>
              : <span className="work-cover wm-cover"><Wordmark /></span>}
          </motion.div>
        </div>
      </section>

      <section className="sec pj-body">
        <div className="wrap pj-grid">
          <motion.div {...inView} variants={stagger(0.08)}>
            <motion.span className="pill" variants={up}><i />{pc.built}</motion.span>
            <ul className="pj-list">{page[lang].built.map((b) => <motion.li key={b} variants={up}><Icon name="spark" />{b}</motion.li>)}</ul>
            <motion.p className="pj-note mono" variants={up}>{pc.note}</motion.p>
          </motion.div>
          <motion.aside className="card pj-side" {...inView} variants={stagger(0.08)}>
            <motion.span className="mono" variants={up}>{pc.services}</motion.span>
            {page.services.map((sid) => {
              const s = SERVICES.find((x) => x.id === sid)
              return (
                <motion.a key={sid} variants={up} href={routeHref('/services/' + sid)} onClick={anchor} className={'more-it ' + s.side}>
                  <span className="mm-ic"><Icon name={s.icon} /></span><b>{t.services.items[sid].t}</b><Icon name="arrow" className="flip" />
                </motion.a>
              )
            })}
            <motion.div variants={up} className="pj-ask">
              <b>{pc.ask}</b>
              <a href={routeHref('/start')} onClick={anchor} className="btn btn-grad" data-mag>{pc.askBtn}<Icon name="arrow" className="flip" /></a>
            </motion.div>
          </motion.aside>
        </div>
      </section>

      <section className="sec pj-next">
        <div className="wrap">
          <motion.span className="pill" {...inView} variants={up}><i />{pc.next}</motion.span>
          <motion.div className="work-grid one" {...inView} variants={stagger(0.1)}><WorkCard p={next} big /></motion.div>
        </div>
      </section>
    </div>
  )
}
