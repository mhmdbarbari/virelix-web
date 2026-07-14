import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useLanguage } from '../lib/i18n'

export default function Navbar() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { t, lang, toggle } = useLanguage()
  const [open, setOpen] = useState(false)

  const SECTIONS = [
    { label: t('nav.about'), hash: '#about' },
    { label: t('nav.services'), hash: '#services' },
    { label: t('nav.process'), hash: '#process' },
  ]

  const goSection = hash => e => {
    e.preventDefault()
    setOpen(false)
    if (pathname !== '/') navigate('/', { state: { scrollTo: hash } })
    else document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
  }

  const close = () => setOpen(false)
  const flipLang = () => { toggle(); setOpen(false) }

  return (
    <>
      <nav>
        <Link to="/" className="logo hoverable" onClick={close}>VIRE<b>LIX</b></Link>
        <div className="navlinks">
          {SECTIONS.map(s => (
            <a key={s.hash} className="hoverable" href={`/${s.hash}`} onClick={goSection(s.hash)}>{s.label}</a>
          ))}
          <Link className={`hoverable${pathname === '/work' ? ' on' : ''}`} to="/work">{t('nav.work')}</Link>
          <Link className={`hoverable${pathname.startsWith('/blog') ? ' on' : ''}`} to="/blog">{t('nav.blog')}</Link>
          <a className="hoverable" href="/#contact" onClick={goSection('#contact')}>{t('nav.contact')}</a>
          <button className="lang-switch hoverable" onClick={flipLang} lang={lang === 'en' ? 'ar' : 'en'}>
            {t('nav.langToggle')}
          </button>
        </div>
        <div className="nav-right">
          <a className="btn btn-ghost hoverable nav-quote" href="/#contact" onClick={goSection('#contact')}
            style={{ padding: '12px 26px', fontSize: 13 }}>
            {t('nav.quote')}
          </a>
          <button className={`burger hoverable${open ? ' open' : ''}`} aria-label="Menu"
            aria-expanded={open} onClick={() => setOpen(o => !o)}>
            <i /><i /><i />
          </button>
        </div>
      </nav>
      <div className={`mobile-menu${open ? ' open' : ''}`}>
        {SECTIONS.map(s => (
          <a key={s.hash} href={`/${s.hash}`} onClick={goSection(s.hash)}>{s.label}</a>
        ))}
        <Link to="/work" onClick={close} className={pathname === '/work' ? 'on' : ''}>{t('nav.work')}</Link>
        <Link to="/blog" onClick={close} className={pathname.startsWith('/blog') ? 'on' : ''}>{t('nav.blog')}</Link>
        <a href="/#contact" onClick={goSection('#contact')}>{t('nav.contact')}</a>
        <button className="mm-lang hoverable" onClick={flipLang} lang={lang === 'en' ? 'ar' : 'en'}>
          {t('nav.langToggle')}
        </button>
        <a href="/#contact" onClick={goSection('#contact')} className="mm-quote">{t('nav.quote')} <span className="arr">→</span></a>
      </div>
    </>
  )
}
