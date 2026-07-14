import { useEffect } from 'react'
import { gsap, isTouch } from '../lib/motion'

export default function Cursor() {
  useEffect(() => {
    if (isTouch) return
    const click = e => {
      const r = document.createElement('div'); r.className = 'ripple'
      r.style.left = e.clientX + 'px'; r.style.top = e.clientY + 'px'
      document.body.appendChild(r); setTimeout(() => r.remove(), 700)
    }
    addEventListener('click', click)
    // magnetic buttons
    const mags = [...document.querySelectorAll('.magnetic')]
    const magHandlers = mags.map(b => {
      const move = e => {
        const r = b.getBoundingClientRect()
        gsap.to(b, { x: (e.clientX - r.left - r.width / 2) * 0.25,
          y: (e.clientY - r.top - r.height / 2) * 0.35, duration: 0.4, ease: 'power2.out' })
      }
      const leave = () => gsap.to(b, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1,.4)' })
      b.addEventListener('mousemove', move); b.addEventListener('mouseleave', leave)
      return { b, move, leave }
    })
    // card spotlight follows the mouse
    const cards = [...document.querySelectorAll('.card')]
    const cardHandlers = cards.map(cd => {
      const move = e => {
        const r = cd.getBoundingClientRect()
        cd.style.setProperty('--mx', (e.clientX - r.left) + 'px')
        cd.style.setProperty('--my', (e.clientY - r.top) + 'px')
      }
      cd.addEventListener('mousemove', move)
      return { cd, move }
    })
    return () => {
      removeEventListener('click', click)
      magHandlers.forEach(({ b, move, leave }) => { b.removeEventListener('mousemove', move); b.removeEventListener('mouseleave', leave) })
      cardHandlers.forEach(({ cd, move }) => cd.removeEventListener('mousemove', move))
    }
  }, [])

  return null
}
