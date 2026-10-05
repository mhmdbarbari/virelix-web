import { motion } from 'framer-motion'
import { useI18n } from '../i18n'
import { CONTACT, SERVICES } from '../content'
import { PAGE_COPY } from '../pages-content'
import { routeHref } from '../router'
import { useAnchor } from '../hooks/useLenis'
import { inView, stagger, line, up } from '../anim'
import owlEyes from '../assets/img/owl-head-eyes.webp'
import { Logo } from './Logo'
import Icon from './Icon'
import BgVideo from './BgVideo'

export default function Footer() {
  const { t, lang } = useI18n()
  const f = PAGE_COPY[lang].footer
  const anchor = useAnchor()
  const cols = [
    [f.services, SERVICES.map((sv) => [t.services.items[sv.id].t, routeHref('/services/' + sv.id)])],
    [f.company, [[f.about, '#about'], [f.process, '#process'], [t.nav.work, routeHref('/work')], [t.nav.blog, routeHref('/blog')], [f.careers, routeHref('/careers')]]],
    [f.tools, [[f.planner, routeHref('/start')], [f.check, routeHref('/check')], [f.contact, '#contact'], [t.contact.whatsapp, `https://wa.me/${CONTACT.whatsapp}`]]],
  ]
  return (
    <footer className="foot">
      <div className="cta-bg" aria-hidden="true"><BgVideo name="cta" /></div>
      <motion.div className="wrap cta" {...inView} variants={stagger(0.12)}>
        <motion.span className="cta-owl" variants={up}><img src={owlEyes} alt="" /></motion.span>
        <h2 className="cta-h">
          {t.cta.title.map((l, i) => <span className="ln" key={i}><motion.span className={i ? 'grad' : ''} variants={line}>{l}</motion.span></span>)}
        </h2>
        <motion.a variants={up} href="#contact" className="btn btn-grad btn-lg" onClick={anchor}>{t.cta.btn}<Icon name="arrow" className="flip" /></motion.a>
      </motion.div>
      <div className="wrap foot-cols">
        {cols.map(([h, items]) => (
          <div key={h} className={h === f.services ? 'fc-svc' : ''}>
            <h4 className="mono">{h}</h4>
            <ul>{items.map(([l, href]) => <li key={l}><a href={href} onClick={href.startsWith('http') ? undefined : anchor} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">{l}</a></li>)}</ul>
          </div>
        ))}
        <div>
          <h4 className="mono">{t.contact.label}</h4>
          <ul>
            <li><a href={`mailto:${CONTACT.email}`} dir="ltr">{CONTACT.email}</a></li>
            <li><a href={CONTACT.phoneHref} dir="ltr">{CONTACT.phone}</a></li>
            <li className="fc-addr">{t.contact.address}</li>
          </ul>
        </div>
      </div>
      <div className="wrap foot-bar">
        <a href="#top" onClick={anchor}><Logo /></a>
        <span className="mono">{t.intro.tagline.join(' ')}</span>
        <div className="foot-soc">
          <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><Icon name="whatsapp" /></a>
          {CONTACT.instagram && <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Icon name="instagram" /></a>}
          {CONTACT.tiktok && <a href={CONTACT.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok"><Icon name="tiktok" /></a>}
        </div>
        <span className="mono">{t.footer.city} · <span dir="ltr">{CONTACT.phone}</span></span>
        <span className="mono">© {new Date().getFullYear()} VIRELIX</span>
      </div>
    </footer>
  )
}
