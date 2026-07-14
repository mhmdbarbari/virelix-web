import { useEffect, useRef } from 'react'
import { RM } from '../lib/motion'
import { InstagramIcon, TikTokIcon, WhatsAppIcon } from './SocialIcons'
import { useLanguage } from '../lib/i18n'

export default function Footer({ onFinal }) {
  const { t } = useLanguage()
  const starsRef = useRef(null)

  // night sky twinkle behind the final frame
  useEffect(() => {
    const c = starsRef.current, x = c.getContext('2d')
    let W, H, stars = [], raf
    const rs = () => {
      W = c.width = c.offsetWidth; H = c.height = c.offsetHeight
      stars = Array.from({ length: 110 }, () => ({
        x: Math.random() * W, y: Math.random() * H, r: Math.random() * 1.3 + 0.2, p: Math.random() * 7,
      }))
    }
    rs(); addEventListener('resize', rs)
    let t = 0
    const draw = () => {
      t += 0.02; x.clearRect(0, 0, W, H)
      for (const s of stars) {
        x.globalAlpha = 0.25 + 0.5 * Math.abs(Math.sin(t + s.p))
        x.fillStyle = '#cfd6ff'; x.beginPath(); x.arc(s.x, s.y, s.r, 0, 7); x.fill()
      }
      x.globalAlpha = 1; raf = requestAnimationFrame(draw)
    }
    if (!RM) draw()
    return () => { cancelAnimationFrame(raf); removeEventListener('resize', rs) }
  }, [])

  return (
    <footer className="site" id="siteFooter">
      <canvas id="stars" ref={starsRef} />
      <div className="eyebrow reveal" style={{ justifyContent: 'center' }}>{t('footer.eyebrow')}</div>
      <h2 id="finalTitle" className="reveal">{t('footer.title')}<em>{t('footer.titleEm')}</em></h2>
      <button id="finalBtn" className="btn btn-primary hoverable magnetic reveal" onClick={onFinal}>
        {t('footer.cta')} <span className="arr">→</span>
      </button>
      <div className="foot-meta">
        <span>© 2026 VIRELIX</span>
        <span className="foot-socials">
          <a className="hoverable" href="https://www.instagram.com/virelix.solutions" target="_blank" rel="noreferrer" aria-label="Instagram" title="Instagram"><InstagramIcon size={17} /></a>
          <a className="hoverable" href="https://www.tiktok.com/@virelix.solutions" target="_blank" rel="noreferrer" aria-label="TikTok" title="TikTok"><TikTokIcon size={17} /></a>
          <a className="hoverable" href="https://wa.me/962787844005" target="_blank" rel="noreferrer" aria-label="WhatsApp" title="WhatsApp"><WhatsAppIcon size={17} /></a>
        </span>
        <span dir="ltr">{t('footer.location')}</span>
      </div>
    </footer>
  )
}
