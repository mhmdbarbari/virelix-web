import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useI18n } from '../i18n'
import { SERVICES } from '../content'
import { PAGE_COPY, PLAN_MAP, PLAN_TO_NEED } from '../pages-content'
import { useAnchor, useSmoothScroll } from '../hooks/useLenis'
import { useMeta } from '../hooks/useMeta'
import { routeHref } from '../router'
import { EASE, inView, stagger, up } from '../anim'
import { prefillContact } from '../lib/send'
import Heading from '../components/Heading'
import Icon from '../components/Icon'
import Contact from '../components/Contact'

const EMPTY = { what: [], stage: '', needs: [], when: '' }
const slide = {
  enter: (d) => ({ opacity: 0, x: d * 50 }),
  center: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE } },
  exit: (d) => ({ opacity: 0, x: d * -50, transition: { duration: 0.25 } }),
}

/** Project planner: four questions → a brief with services, team, phases and next steps → pre-filled contact form. */
export default function PlannerPage() {
  const { t, lang } = useI18n()
  const P = PAGE_COPY[lang].planner
  useMeta(P.label, P.lead)
  const anchor = useAnchor()
  const { scrollTo } = useSmoothScroll()
  const [a, setA] = useState(EMPTY)
  const [step, setStep] = useState(0)
  const [dir, setDir] = useState(1)
  const [copied, setCopied] = useState(false)
  const rtl = lang === 'ar' ? -1 : 1
  const done = step >= P.steps.length
  const q = P.steps[step]

  const go = (n) => { setDir(n > step ? 1 : -1); setStep(n); setTimeout(() => scrollTo('#planner', { offset: -110 }), 30) }
  const pick = (k) => {
    if (q.multi) setA((s) => ({ ...s, [q.id]: s[q.id].includes(k) ? s[q.id].filter((x) => x !== k) : [...s[q.id], k] }))
    else { setA((s) => ({ ...s, [q.id]: k })); setTimeout(() => go(step + 1), 260) }
  }
  const chosen = (k) => (q.multi ? a[q.id].includes(k) : a[q.id] === k)

  const result = useMemo(() => {
    if (!done) return null
    const ids = new Set()
    a.what.forEach((k) => PLAN_MAP.what[k]?.forEach((x) => ids.add(x)))
    a.needs.forEach((k) => PLAN_MAP.needs[k]?.forEach((x) => ids.add(x)))
    PLAN_MAP.stage[a.stage]?.forEach((x) => ids.add(x))
    const services = SERVICES.filter((s) => ids.has(s.id))
    const lbl = (sid, k) => P.steps.find((s) => s.id === sid).opts[k]
    const brief = [
      `${P.result} (VIRELIX)`,
      `${P.steps[0].q} ${a.what.map((k) => lbl('what', k)).join(', ') || '—'}`,
      `${P.steps[1].q} ${a.stage ? lbl('stage', a.stage) : '—'}`,
      `${P.steps[2].q} ${a.needs.map((k) => lbl('needs', k)).join(', ') || '—'}`,
      `${P.steps[3].q} ${a.when ? lbl('when', a.when) : '—'}`,
      `${P.services}: ${services.map((s) => t.services.items[s.id].t).join(', ') || '—'}`,
    ].join('\n')
    return { services, build: services.some((s) => s.side === 'build'), grow: services.some((s) => s.side === 'grow'), brief }
  }, [done, a, P, t])

  const send = () => {
    prefillContact({ needs: [...new Set(a.what.map((k) => PLAN_TO_NEED[k]))], message: result.brief + '\n\n' })
    setTimeout(() => scrollTo('#contact form', { offset: -140 }), 40)
  }
  const copy = async () => { try { await navigator.clipboard.writeText(result.brief); setCopied(true); setTimeout(() => setCopied(false), 1800) } catch { /* ignore */ } }

  return (
    <div>
      <section className="sec page-top planner" id="planner">
        <div className="wrap pl-wrap">
          <Heading as="h1" label={P.label} title={P.title} lead={P.lead} />
          <div className="pl-progress" aria-hidden="true"><motion.span animate={{ scaleX: Math.min(step, P.steps.length) / P.steps.length }} transition={{ duration: 0.6, ease: EASE }} /></div>
          <AnimatePresence mode="wait" custom={dir * rtl} initial={false}>
            {!done ? (
              <motion.div key={step} className="pl-q" custom={dir * rtl} variants={slide} initial="enter" animate="center" exit="exit">
                <div className="pl-top mono"><span>{P.step} {step + 1} {P.of} {P.steps.length}</span>{q.multi && <span>{P.multi}</span>}</div>
                <h2 id="pl-q">{q.q}</h2>
                <div className={'pl-opts' + (q.multi ? ' multi' : '')} role={q.multi ? 'group' : 'radiogroup'} aria-labelledby="pl-q">
                  {Object.entries(q.opts).map(([k, l], i) => (
                    <button key={k} role={q.multi ? 'checkbox' : 'radio'} aria-checked={chosen(k)} className={'pl-opt' + (chosen(k) ? ' on' : '')} onClick={() => pick(k)}>
                      <i className="mono">{q.multi ? (chosen(k) ? '✓' : '+') : i + 1}</i><span>{l}</span>
                    </button>
                  ))}
                </div>
                <div className="pl-foot">
                  {step > 0 ? <button className="pl-back" onClick={() => go(step - 1)}>{lang === 'ar' ? '→' : '←'} {P.back}</button> : <span />}
                  {q.multi && <button className="btn btn-grad" disabled={!a[q.id].length} onClick={() => go(step + 1)}>{P.next}<Icon name="arrow" className="flip" /></button>}
                </div>
              </motion.div>
            ) : (
              <motion.div key="res" className="pl-res" custom={dir * rtl} variants={slide} initial="enter" animate="center" exit="exit">
                <span className="pill"><i />{P.result}</span>
                <div className="pl-res-grid">
                  <div className="card pl-block">
                    <h3>{P.services}</h3>
                    <div className="pl-svcs">
                      {result.services.map((s) => (
                        <a key={s.id} href={routeHref('/services/' + s.id)} onClick={anchor} className={'more-it ' + s.side}>
                          <span className="mm-ic"><Icon name={s.icon} /></span><b>{t.services.items[s.id].t}</b><Icon name="arrow" className="flip" />
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="card pl-block">
                    <h3>{P.team}</h3>
                    <ul className="pl-team">
                      {result.build && <li className="build"><Icon name="code" />{P.teamBuild}</li>}
                      {result.grow && <li className="grow"><Icon name="rise" />{P.teamGrow}</li>}
                    </ul>
                    <h3 className="pl-h2">{P.bring}</h3>
                    <ul className="pl-bring">
                      {Object.entries(P.bringItems).filter(([k]) => k !== 'access' || a.stage !== 'idea').map(([k, v]) => <li key={k}><Icon name="spark" />{v}</li>)}
                    </ul>
                  </div>
                  <div className="card pl-block pl-phases">
                    <h3>{P.phases}</h3>
                    <ol>{t.process.steps.map((s, i) => <li key={s.t}><b className="mono">0{i + 1}</b><span><strong>{s.t}</strong>{s.d}</span></li>)}</ol>
                  </div>
                </div>
                <pre className="pl-brief" dir="auto">{result.brief}</pre>
                <div className="pl-actions">
                  <button className="btn btn-grad" onClick={send} data-mag>{P.send}<Icon name="arrow" className="flip" /></button>
                  <button className="btn btn-ghost" onClick={copy}>{copied ? P.copied : P.copy}</button>
                  <button className="pl-back" onClick={() => { setA(EMPTY); go(0) }}>{P.again}</button>
                </div>
                <p className="pl-note">{P.note}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
      <Contact />
    </div>
  )
}
