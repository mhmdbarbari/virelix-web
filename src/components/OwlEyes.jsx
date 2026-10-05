import { useEffect, useRef } from 'react'
import owl from '../assets/img/owl-head.webp'
import { prefersReducedMotion } from '../motion'

// Eye socket centres and size in the owl image (795×790), as fractions.
const EYES = [{ x: 0.322, y: 0.49 }, { x: 0.674, y: 0.49 }]

/**
 * The Virelix owl. Its glowing eyes follow the cursor (or wander on touch screens) and blink now and then.
 * `lit` = eyes on (false → dark sockets, used by the intro before the eyes ignite).
 */
export default function OwlEyes({ lit = true, className = '', track = true }) {
  const root = useRef(null)
  const irises = useRef([])
  const lids = useRef([])

  useEffect(() => {
    if (!track) return
    const el = root.current
    let raf, tx = 0, ty = 0, x = 0, y = 0, lastMove = 0
    const reduce = prefersReducedMotion()
    const onMove = (e) => {
      const r = el.getBoundingClientRect()
      const cx = r.left + r.width / 2, cy = r.top + r.height * 0.49
      const dx = e.clientX - cx, dy = e.clientY - cy
      const d = Math.hypot(dx, dy) || 1
      const k = Math.min(1, d / (r.width * 0.9))
      tx = (dx / d) * k; ty = (dy / d) * k
      lastMove = performance.now()
    }
    const tick = (now) => {
      // Idle (or touch): slow wander so the owl still feels alive.
      if (now - lastMove > 2500) {
        tx = Math.sin(now / 1900) * 0.55
        ty = Math.sin(now / 2700) * 0.3
      }
      x += (tx - x) * (reduce ? 1 : 0.12); y += (ty - y) * (reduce ? 1 : 0.12)
      irises.current.forEach((n) => n && (n.style.transform = `translate(${x * 34}%, ${y * 26}%)`))
      raf = requestAnimationFrame(tick)
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    raf = requestAnimationFrame(tick)

    // Blink every 3.5–7 s.
    let bt
    const blink = () => {
      lids.current.forEach((n) => n && n.animate([{ transform: 'scaleY(0)' }, { transform: 'scaleY(1)' }, { transform: 'scaleY(0)' }], { duration: 220, easing: 'ease-in-out' }))
      bt = setTimeout(blink, 3500 + Math.random() * 3500)
    }
    if (!reduce) bt = setTimeout(blink, 2600)
    return () => { cancelAnimationFrame(raf); clearTimeout(bt); window.removeEventListener('pointermove', onMove) }
  }, [track])

  return (
    <div ref={root} className={'owl ' + (lit ? 'is-lit ' : '') + className}>
      <img src={owl} alt="" draggable="false" />
      {EYES.map((e, i) => (
        <span key={i} className="owl-socket" style={{ left: e.x * 100 + '%', top: e.y * 100 + '%' }}>
          <span className="owl-iris" ref={(n) => (irises.current[i] = n)}><i /></span>
          <span className="owl-lid" ref={(n) => (lids.current[i] = n)} />
        </span>
      ))}
    </div>
  )
}
