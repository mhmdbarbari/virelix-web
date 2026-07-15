import { useCallback, useEffect, useRef } from 'react'
import { gsap, RM } from '../lib/motion'
import { useLanguage } from '../lib/i18n'
import owlImage from '../assets/owl-alpha.png'

// flight waypoints: [xFrac, yFrac] along scroll progress.
// Fractions outside 0..1 sit fully off-screen, so the owl flies out past one
// edge and glides back in from the other as the page scrolls — the same
// route plays in reverse when scrolling back up. Size stays constant.
const PATH = [
  [0.75, 0.35],
  [1.50, 0.15],
  [-0.50, 0.25],
  [0.25, 0.38],
  [-0.50, 0.60],
  [1.50, 0.55],
  [0.70, 0.45],
  [1.50, 0.85],
  [-0.50, 0.75],
  [0.50, 0.55],
]

// desktop: 560px; phones: ~72vw so the owl never swallows the screen
const stageSize = () => Math.min(560, Math.round(innerWidth * 0.72))

export default function Bird({ active, gone }) {
  const { isRTL } = useLanguage()
  const ref = useRef(null)
  // superman punch state: multiplied/added on top of the flight transform
  const punch = useRef({ s: 1, x: 0, y: 0, r: 0, active: false })

  const doPunch = useCallback(() => {
    const p = punch.current
    if (p.active || RM) return
    p.active = true
    const shake = () => gsap.fromTo('main, nav',
      { x: -12 }, { x: 12, duration: 0.05, repeat: 6, yoyo: true, clearProps: 'x', ease: 'none' })
    gsap.timeline({ onComplete: () => { p.active = false } })
      .to(p, { s: 0.78, y: 26, r: -10, duration: 0.30, ease: 'power2.out' })   // coil back
      .to(p, { s: 4.2, y: -30, r: 12, duration: 0.20, ease: 'power4.in' })     // launch at the screen
      .add(shake)                                                              // impact
      .to(p, { s: 3.9, duration: 0.12, ease: 'power1.out' })
      .to(p, { s: 1, x: 0, y: 0, r: 0, duration: 1.0, ease: 'power3.inOut' }) // settle back
  }, [])

  useEffect(() => {
    if (!active || gone || RM) return
    // Arabic mirrors the layout (hero text sits on the right), so fly the
    // owl's whole route as a mirror image too, keeping it clear of the text
    const path = isRTL ? PATH.map(([x, y]) => [1 - x, y]) : PATH
    const bird = ref.current
    let bx = innerWidth * path[0][0], by = innerHeight * path[0][1], mx = bx, my = by
    let px = bx, lastTrail = 0, raf, alive = true
    let size = stageSize()
    const applySize = () => {
      size = stageSize()
      bird.style.width = size + 'px'
      bird.style.height = size + 'px'
    }
    applySize()
    addEventListener('resize', applySize)
    const onMove = e => { mx = e.clientX; my = e.clientY }
    addEventListener('mousemove', onMove)
    // the owl sits behind the content now, so it can't receive clicks itself —
    // catch page clicks that land on its box (unless an interactive element was hit)
    const onClick = e => {
      if (e.target.closest('a,button,input,textarea,select,[role="button"]')) return
      const r = bird.getBoundingClientRect()
      if (e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom) doPunch()
    }
    addEventListener('click', onClick)
    const loop = now => {
      if (!alive) return
      const doc = document.documentElement
      const prog = Math.min(1, scrollY / Math.max(1, doc.scrollHeight - innerHeight))
      const seg = Math.min(path.length - 2, Math.floor(prog * (path.length - 1)))
      const f = prog * (path.length - 1) - seg, ease = f * f * (3 - 2 * f)
      const tx = (path[seg][0] + (path[seg + 1][0] - path[seg][0]) * ease) * innerWidth
      const ty = (path[seg][1] + (path[seg + 1][1] - path[seg][1]) * ease) * innerHeight
      // gentle hover bob + slight cursor curiosity
      const bob = Math.sin(now * 0.0009) * 16
      const cx = (mx - tx) * 0.02, cy = (my - ty) * 0.015
      // low lerp factor = slow, gliding pursuit of the waypoint
      bx += ((tx + cx) - bx) * 0.018; by += ((ty + bob + cy) - by) * 0.018
      const vx = bx - px; px = bx
      const dir = vx < -0.15 ? -1 : 1, tilt = Math.max(-10, Math.min(10, vx * 1.5))
      const pk = punch.current
      bird.style.transform = `translate(${bx - size / 2 + pk.x}px,${by - size / 2 + pk.y}px) scale(${pk.s}) scaleX(${dir}) rotate(${(tilt * dir) + pk.r}deg)`
      bird.classList.toggle('glide', Math.abs(vx) < 0.4)
      // glowing trail
      if (now - lastTrail > 70 && Math.abs(vx) > 0.5) {
        lastTrail = now
        const t = document.createElement('div'); t.className = 'trail'
        t.style.left = (bx + (dir < 0 ? 26 : -26)) + 'px'; t.style.top = (by + 6) + 'px'
        document.body.appendChild(t); setTimeout(() => t.remove(), 1100)
      }
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => { alive = false; cancelAnimationFrame(raf); removeEventListener('mousemove', onMove); removeEventListener('click', onClick); removeEventListener('resize', applySize) }
  }, [active, gone, doPunch, isRTL])

  return (
    <div id="bird" ref={ref}>
      <img className="owl-img" src={owlImage} alt="" />
    </div>
  )
}
