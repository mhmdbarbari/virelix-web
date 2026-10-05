import { useEffect, useRef } from 'react'
import { prefersReducedMotion } from '../motion'

/** Fixed night-sky backdrop: drifting particles with faint links, plus a cursor-following glow. */
export default function Background() {
  const canvas = useRef(null)
  const glow = useRef(null)
  useEffect(() => {
    const c = canvas.current, ctx = c.getContext('2d')
    const reduce = prefersReducedMotion()
    let w, h, dpr, pts = [], raf, mx = -999, my = -999
    const resize = () => {
      dpr = Math.min(devicePixelRatio || 1, 1.5)
      w = c.width = innerWidth * dpr; h = c.height = innerHeight * dpr
      c.style.width = innerWidth + 'px'; c.style.height = innerHeight + 'px'
      const n = Math.round(Math.min(110, (innerWidth * innerHeight) / 14000))
      pts = Array.from({ length: n }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.12 * dpr, vy: (Math.random() - 0.5) * 0.12 * dpr,
        r: (Math.random() * 1.3 + 0.3) * dpr, c: Math.random() < 0.35 ? '34,211,238' : Math.random() < 0.5 ? '168,85,247' : '200,205,255',
      }))
    }
    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      const link = 120 * dpr
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i]
        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = w; if (p.x > w) p.x = 0; if (p.y < 0) p.y = h; if (p.y > h) p.y = 0
        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j], dx = p.x - q.x, dy = p.y - q.y, d = dx * dx + dy * dy
          if (d < link * link) {
            ctx.strokeStyle = `rgba(139,92,246,${0.12 * (1 - Math.sqrt(d) / link)})`
            ctx.lineWidth = dpr * 0.6
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke()
          }
        }
        const near = Math.hypot(p.x - mx * dpr, p.y - my * dpr) < 140 * dpr
        ctx.fillStyle = `rgba(${p.c},${near ? 0.95 : 0.55})`
        ctx.beginPath(); ctx.arc(p.x, p.y, near ? p.r * 1.8 : p.r, 0, 7); ctx.fill()
      }
      if (!reduce) raf = requestAnimationFrame(draw)
    }
    const onMove = (e) => {
      mx = e.clientX; my = e.clientY
      if (glow.current) glow.current.style.transform = `translate(${mx}px, ${my}px)`
    }
    const onVis = () => { cancelAnimationFrame(raf); if (!document.hidden) draw() }
    resize(); draw()
    addEventListener('resize', resize); addEventListener('pointermove', onMove, { passive: true })
    document.addEventListener('visibilitychange', onVis)
    return () => { cancelAnimationFrame(raf); removeEventListener('resize', resize); removeEventListener('pointermove', onMove); document.removeEventListener('visibilitychange', onVis) }
  }, [])
  return (
    <div className="bg" aria-hidden="true">
      <div className="bg-nebula" />
      <canvas ref={canvas} />
      <div className="bg-glow" ref={glow} />
    </div>
  )
}
