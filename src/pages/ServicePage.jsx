import { Fragment } from 'react'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useI18n } from '../i18n'
import { SERVICES, WORK } from '../content'
import { SERVICE_PAGES, PAGE_COPY } from '../pages-content'
import { useAnchor } from '../hooks/useLenis'
import { useMeta } from '../hooks/useMeta'
import { routeHref } from '../router'
import { EASE, inView, stagger, up } from '../anim'
import Heading from '../components/Heading'
import Icon from '../components/Icon'
import Spotlight from '../components/Spotlight'
import Process from '../components/Process'
import WorkCard from '../components/WorkCard'
import Faq from '../components/Faq'
import Contact from '../components/Contact'
import BgVideo from '../components/BgVideo'
import NotFound from './NotFound'

export default function ServicePage() {
  const { id } = useParams()
  const { t, lang } = useI18n()
  const anchor = useAnchor()
  const svc = SERVICES.find((s) => s.id === id)
  const page = SERVICE_PAGES[id]
  const sc = svc && t.services.items[id]
  useMeta(sc?.t, page?.[lang].intro)
  if (!svc || !page) return <NotFound />
  const P = page[lang], pc = PAGE_COPY[lang].svc
  const words = P.headline.split(' ')
  const idx = SERVICES.indexOf(svc)
  const others = SERVICES.filter((s) => s.id !== id)
  const related = WORK.filter((w) => page.work.includes(w.id))

  return (
    <div key={id + lang}>
      <section className={'sec page-top sp-hero ' + svc.side}>
        <motion.div className="sp-bg" initial={{ opacity: 0, scale: 1.08 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.6, ease: EASE }} aria-hidden="true"><BgVideo name={id} /></motion.div>
        <div className="wrap sp-hero-in">
          <motion.div initial="hidden" animate="show" variants={stagger(0.08, 0.1)}>
            <motion.nav className="crumb mono" variants={up} aria-label="Breadcrumb">
              <a href={routeHref('/')} onClick={anchor}>VIRELIX</a><span>/</span><a href="#services" onClick={anchor}>{pc.crumb}</a><span>/</span><b>{sc.t}</b>
            </motion.nav>
            <motion.span className="pill" variants={up}><i />{t.services[svc.side]} · 0{idx + 1}</motion.span>
            <h1 className="h1 sp-title">
              {words.map((w, i) => (
                <Fragment key={i}><span className="ln w"><motion.span className={i >= words.length - 2 ? 'grad' : ''} variants={{ hidden: { y: '115%' }, show: { y: '0%', transition: { duration: 1.1, ease: EASE } } }}>{w}</motion.span></span>{' '}</Fragment>
              ))}
            </h1>
            <motion.p className="lead" variants={up}>{P.intro}</motion.p>
            <motion.div className="hero-cta" variants={up}>
              <a href={routeHref('/start')} onClick={anchor} className="btn btn-grad" data-mag>{pc.plan}<Icon name="arrow" className="flip" /></a>
              <a href="#contact" onClick={anchor} className="btn btn-ghost">{t.nav.contact}</a>
            </motion.div>
          </motion.div>
          <motion.div className="sp-badge" initial={{ opacity: 0, scale: 0.7, rotate: -8 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1.2, ease: EASE, delay: 0.3 }} aria-hidden="true">
            <span className="sp-badge-ring" /><span className="sp-badge-ring r2" />
            <Icon name={svc.icon} />
          </motion.div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <Heading label={pc.deliver} title={[sc.t]} />
          <motion.div className="deliver" {...inView} variants={stagger(0.07)}>
            {P.deliver.map((d, i) => (
              <motion.div key={d.t} variants={up}>
                <Spotlight className="card dl"><span className="dl-n mono">0{i + 1}</span><h3>{d.t}</h3><p>{d.d}</p></Spotlight>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Process />

      <section className="sec sp-tech">
        <div className="wrap">
          <motion.div {...inView} variants={stagger(0.04)}>
            <motion.span className="pill" variants={up}><i />{pc.tech}</motion.span>
            <div className="sp-chips" dir="ltr">{page.tech.map((x) => <motion.span key={x} className="chip" variants={up}>{x}</motion.span>)}</div>
          </motion.div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="sec">
          <div className="wrap">
            <Heading label={pc.related} title={t.work.title} />
            <motion.div className="work-grid" {...inView} variants={stagger(0.1)}>{related.map((p) => <WorkCard key={p.id} p={p} />)}</motion.div>
          </div>
        </section>
      )}

      <section className="sec">
        <div className="wrap faq-wrap">
          <Heading label="FAQ" title={[pc.faq]} />
          <motion.div {...inView} variants={up}><Faq items={P.faqs} /></motion.div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <Heading label={pc.more} title={t.services.title} />
          <motion.div className="more-svc" {...inView} variants={stagger(0.05)}>
            {others.map((o) => (
              <motion.a key={o.id} variants={up} href={routeHref('/services/' + o.id)} onClick={anchor} className={'more-it ' + o.side} data-cursor={t.work.view}>
                <span className="mm-ic"><Icon name={o.icon} /></span><b>{t.services.items[o.id].t}</b><Icon name="arrow" className="flip" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      <Contact />
    </div>
  )
}
