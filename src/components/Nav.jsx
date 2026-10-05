import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { useI18n } from '../i18n'
import { SERVICES } from '../content'
import { PAGE_COPY } from '../pages-content'
import { useAnchor, useSmoothScroll } from '../hooks/useLenis'
import { routeHref } from '../router'
import { Logo } from './Logo'
import Icon from './Icon'

const EASE = [0.16, 1, 0.3, 1]

export default function Nav({ ready }) {
  const { t, lang, toggle } = useI18n()
  const pc = PAGE_COPY[lang]
  const { pathname } = useLocation()
  const { subscribe, lock } = useSmoothScroll()
  const [glass, setGlass] = useState(false)
  const [current, setCurrent] = useState('')
  const [open, setOpen] = useState(false)
  const [menu, setMenu] = useState(false)
  const anchor = useAnchor(() => { lock(false); setOpen(false); setMenu(false) })

  const links = [
    ['#about', t.nav.about], ['#services', t.nav.services], ['#process', t.nav.process],
    [routeHref('/work'), t.nav.work], [routeHref('/blog'), t.nav.blog], ['#contact', t.nav.contact],
  ]
  const isOn = (h) => {
    if (h === '#services' && pathname.startsWith('/services')) return true
    if (h.startsWith('#/') || h.startsWith('/')) return routeHref(pathname).startsWith(h)
    return pathname === '/' && current === h
  }

  useEffect(() => subscribe((y) => {
    setGlass(y > 30)
    const mid = innerHeight * 0.4
    const sec = [...document.querySelectorAll('main section[id]')].find((s) => { const r = s.getBoundingClientRect(); return r.top <= mid && r.bottom >= mid })
    setCurrent(sec ? '#' + sec.id : '')
  }), [subscribe])

  useEffect(() => {
    lock(open)
    if (!open) return
    const esc = (e) => e.key === 'Escape' && setOpen(false)
    addEventListener('keydown', esc)
    return () => removeEventListener('keydown', esc)
  }, [open, lock])

  const svcLink = (s, i) => (
    <a key={s.id} href={routeHref('/services/' + s.id)} onClick={anchor} className="mm-item">
      <span className={'mm-ic ' + s.side}><Icon name={s.icon} /></span>
      <span><b>{t.services.items[s.id].t}</b><small>{t.services.items[s.id].d}</small></span>
      <i className="mono">0{i + 1}</i>
    </a>
  )

  return (
    <>
      <motion.header className={'nav' + (glass || menu ? ' is-glass' : '')} initial={{ y: -100, opacity: 0 }} animate={ready ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}>
        <div className="wrap nav-in">
          <a href={routeHref('/')} className="nav-logo" onClick={anchor} aria-label="VIRELIX home"><Logo /></a>
          <nav className="nav-links" aria-label="Main">
            {links.map(([h, l]) => h === '#services' ? (
              <div key={h} className="nav-dd" onMouseEnter={() => setMenu(true)} onMouseLeave={() => setMenu(false)}
                onFocus={() => setMenu(true)} onBlur={(e) => !e.currentTarget.contains(e.relatedTarget) && setMenu(false)}>
                <a href={h} onClick={anchor} className={isOn(h) ? 'on' : ''} aria-haspopup="true" aria-expanded={menu}>
                  {l}<span className="caret" aria-hidden="true">▾</span>
                  {isOn(h) && <motion.span layoutId="nav-ul" className="nav-ul" transition={{ duration: 0.45, ease: EASE }} />}
                </a>
                <AnimatePresence>
                  {menu && (
                    <motion.div className="mega" initial={{ opacity: 0, y: 12, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 8, scale: 0.98 }} transition={{ duration: 0.3, ease: EASE }}>
                      <div className="mega-col"><span className="mega-h build">{t.services.build}</span>{SERVICES.filter((s) => s.side === 'build').map((s, i) => svcLink(s, i))}</div>
                      <div className="mega-col"><span className="mega-h grow">{t.services.grow}</span>{SERVICES.filter((s) => s.side === 'grow').map((s, i) => svcLink(s, i + 4))}</div>
                      <a href={routeHref('/start')} onClick={anchor} className="mega-cta"><span className="mono">{pc.planner.label}</span><b>{pc.planner.title.join(' ')}</b><Icon name="arrow" className="flip" /></a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <a key={h} href={h} onClick={anchor} className={isOn(h) ? 'on' : ''}>
                {l}{isOn(h) && <motion.span layoutId="nav-ul" className="nav-ul" transition={{ duration: 0.45, ease: EASE }} />}
              </a>
            ))}
          </nav>
          <div className="nav-r">
            <button className="lang" onClick={toggle} aria-label="Switch language">{t.switchTo}</button>
            <a href={routeHref('/start')} className="btn btn-cyan nav-cta" onClick={anchor} data-mag>{t.nav.quote}</a>
            <button className={'burger' + (open ? ' x' : '')} onClick={() => setOpen((o) => !o)} aria-label={open ? t.nav.close : t.nav.menu} aria-expanded={open}><i /><i /></button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div className="sheet" data-lenis-prevent initial={{ clipPath: 'circle(0% at 100% 0%)' }} animate={{ clipPath: 'circle(150% at 100% 0%)' }} exit={{ clipPath: 'circle(0% at 100% 0%)' }} transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}>
            <motion.ul className="sheet-list" initial="h" animate="s" variants={{ s: { transition: { staggerChildren: 0.05, delayChildren: 0.25 } } }}>
              {[...links, [routeHref('/careers'), pc.nav.careers]].map(([h, l], i) => (
                <motion.li key={h} variants={{ h: { opacity: 0, y: 40 }, s: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } } }}>
                  <a href={h} onClick={anchor}><i>0{i + 1}</i>{l}</a>
                  {h === '#services' && (
                    <div className="sheet-sub">{SERVICES.map((s) => <a key={s.id} href={routeHref('/services/' + s.id)} onClick={anchor}>{t.services.items[s.id].t}</a>)}</div>
                  )}
                </motion.li>
              ))}
            </motion.ul>
            <motion.div className="sheet-foot" initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.6 } }}>
              <a href={routeHref('/start')} className="btn btn-grad" onClick={anchor}>{pc.nav.start} →</a>
              <button className="lang" onClick={toggle}>{t.switchTo}</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
