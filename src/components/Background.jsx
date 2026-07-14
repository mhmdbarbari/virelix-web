import { useEffect, useRef } from 'react'
import { RM } from '../lib/motion'

export default function Background() {
  const ref = useRef(null)

  useEffect(() => {
    const c = ref.current, x = c.getContext('2d')
    let W, H, pts = [], rain = [], raf
    const resize = () => {
      W = c.width = innerWidth; H = c.height = innerHeight
      const n = RM ? 0 : Math.min(90, Math.floor(W * H / 22000))
      pts = Array.from({ length: n }, () => ({
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.22, vy: (Math.random() - 0.5) * 0.22,
        r: Math.random() * 1.6 + 0.4, h: Math.random() < 0.6 ? 262 : 187,
      }))
      rain = Array.from({ length: Math.floor(W / 110) }, () => ({
        x: Math.random() * W, y: Math.random() * H, v: 0.4 + Math.random() * 0.8, s: 9 + Math.random() * 3,
      }))
    }
    resize(); addEventListener('resize', resize)
    let go = 0
    const tick = () => {
      x.clearRect(0, 0, W, H)
      go += 0.0015
      // falling binary (brand artwork motif)
      x.font = '10px "JetBrains Mono", monospace'; x.textAlign = 'center'
      for (const r of rain) {
        r.y += r.v; if (r.y > H + 80) { r.y = -80; r.x = Math.random() * W }
        for (let k = 0; k < 6; k++) {
          x.fillStyle = k === 5 ? 'rgba(0,229,255,.35)' : `rgba(120,80,255,${0.16 - k * 0.022})`
          x.fillText((Math.floor(go * 1000) + k + Math.floor(r.x)) % 2, r.x, r.y - k * r.s)
        }
      }
      // particles + neural connections
      for (const p of pts) {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0; if (p.y < 0) p.y = H; if (p.y > H) p.y = 0
        x.beginPath(); x.arc(p.x, p.y, p.r, 0, 7)
        x.fillStyle = `hsla(${p.h},95%,70%,.65)`; x.fill()
      }
      for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) {
        const a = pts[i], b = pts[j], dx = a.x - b.x, dy = a.y - b.y, d = dx * dx + dy * dy
        if (d < 14400) {
          x.strokeStyle = `rgba(130,90,255,${0.12 * (1 - d / 14400)})`
          x.beginPath(); x.moveTo(a.x, a.y); x.lineTo(b.x, b.y); x.stroke()
        }
      }
      raf = requestAnimationFrame(tick)
    }
    if (!RM) tick()
    return () => { cancelAnimationFrame(raf); removeEventListener('resize', resize) }
  }, [])

  return (
    <>
      <canvas id="bg" ref={ref} />
      <div className="tint" />
      <div className="fog f1" /><div className="fog f2" /><div className="fog f3" />
    </>
  )
}
