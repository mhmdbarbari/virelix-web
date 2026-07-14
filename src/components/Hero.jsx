import { useEffect, useRef } from 'react'
import { RM } from '../lib/motion'
import { useLanguage } from '../lib/i18n'

export default function Hero() {
  const { t } = useLanguage()
  const [line1, line2, line3, line4] = t('hero.lines')
  const [metaA, metaB, metaC] = t('hero.meta')
  const cityRef = useRef(null)

  // futuristic digital city with glowing windows + mouse parallax
  useEffect(() => {
    const c = cityRef.current, x = c.getContext('2d')
    let W, H, bldgs = [], mx = 0, raf
    const build = () => {
      W = c.width = c.offsetWidth; H = c.height = c.offsetHeight; bldgs = []
      for (let layer = 0; layer < 3; layer++) {
        let px = 0
        while (px < W) {
          const w = 34 + Math.random() * 70, h = H * (0.22 + 0.22 * layer) + Math.random() * H * 0.28
          const wins = []
          for (let wy = 14; wy < h - 10; wy += 16)
            for (let wx = 6; wx < w - 8; wx += 13)
              if (Math.random() < 0.22) wins.push([wx, wy, Math.random()])
          bldgs.push({ x: px, w, h, layer, wins }); px += w + 6 + Math.random() * 24
        }
      }
    }
    build(); addEventListener('resize', build)
    const onMove = e => { mx = e.clientX / innerWidth - 0.5 }
    addEventListener('mousemove', onMove)
    let t = 0
    const draw = () => {
      x.clearRect(0, 0, W, H); t += 0.016
      for (let layer = 0; layer < 3; layer++) {
        const alpha = [0.28, 0.5, 0.85][layer], para = mx * (layer + 1) * 14
        for (const b of bldgs) {
          if (b.layer !== layer) continue
          const bx = b.x + para
          x.fillStyle = `rgba(10,10,22,${alpha})`
          x.fillRect(bx, H - b.h, b.w, b.h)
          x.strokeStyle = `rgba(120,80,255,${0.14 * alpha})`
          x.strokeRect(bx + 0.5, H - b.h + 0.5, b.w - 1, b.h)
          for (const [wx, wy, ph] of b.wins) {
            const glow = 0.35 + 0.35 * Math.sin(t * 1.4 + ph * 20)
            x.fillStyle = ph < 0.5 ? `rgba(0,229,255,${glow * alpha})` : `rgba(108,56,255,${glow * alpha * 0.9})`
            x.fillRect(bx + wx, H - b.h + wy, 5, 7)
          }
        }
      }
      for (let i = 0; i < 4; i++) {
        const bx = W * 0.18 * i + W * 0.12 + Math.sin(t * 0.3 + i) * 30
        const grd = x.createLinearGradient(0, H, 0, H * 0.1)
        grd.addColorStop(0, 'rgba(108,56,255,.16)'); grd.addColorStop(1, 'rgba(108,56,255,0)')
        x.fillStyle = grd; x.fillRect(bx, 0, 2, H)
      }
      raf = requestAnimationFrame(draw)
    }
    if (!RM) draw()
    return () => { cancelAnimationFrame(raf); removeEventListener('resize', build); removeEventListener('mousemove', onMove) }
  }, [])

  return (
    <section id="hero">
      <canvas id="city" ref={cityRef} />
      <div className="hero-inner">
        <div className="eyebrow" style={{ opacity: 0 }} id="heroEyebrow">{t('hero.eyebrow')}</div>
        <h1>
          <span className="row"><span>{line1}</span></span>
          <span className="row"><span>{line2}</span></span>
          <span className="row"><span className="g">{line3}</span></span>
          <span className="row"><span className="g">{line4}</span></span>
        </h1>
        <p className="hero-sub">{t('hero.sub')}</p>
        <div className="hero-cta">
          <a href="#services" className="btn btn-primary hoverable magnetic">{t('hero.ctaPrimary')} <span className="arr">→</span></a>
          <a href="#contact" className="btn btn-ghost hoverable magnetic">{t('hero.ctaGhost')}</a>
        </div>
        <div className="hero-meta">
          <div>{metaA}</div><div>{metaB}</div><div>{metaC}</div>
        </div>
      </div>
      <div className="scrollcue">{t('hero.scrollCue')} <i /></div>
    </section>
  )
}
