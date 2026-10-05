import { useEffect } from 'react'
import { isFinePointer, prefersReducedMotion } from '../motion'

/**
 * Magnetic buttons: elements with data-mag are gently pulled toward the cursor.
 * The page keeps the normal system cursor.
 */
export default function Cursor() {
  useEffect(() => {
    if (!isFinePointer() || prefersReducedMotion()) return
    const mag = (e) => {
      const el = e.target.closest('[data-mag]')
      document.querySelectorAll('[data-mag].magging').forEach((m) => {
        if (m !== el) { m.classList.remove('magging'); m.style.transition = 'transform .7s cubic-bezier(.16,1,.3,1)'; m.style.transform = '' }
      })
      if (!el) return
      const b = el.getBoundingClientRect()
      el.classList.add('magging'); el.style.transition = 'transform .25s ease-out'
      el.style.transform = `translate(${(e.clientX - b.left - b.width / 2) * 0.28}px,${(e.clientY - b.top - b.height / 2) * 0.38}px)`
    }
    window.addEventListener('mousemove', mag)
    return () => window.removeEventListener('mousemove', mag)
  }, [])
  return null
}
