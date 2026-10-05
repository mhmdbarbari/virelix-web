import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useI18n } from '../i18n'
import { up } from '../anim'
import owlEyes from '../assets/img/owl-head-eyes.webp'
import { Wordmark } from './Logo'
import { useAnchor } from '../hooks/useLenis'
import { routeHref } from '../router'

/** Project card with a 3D tilt that follows the cursor. */
export default function WorkCard({ p, big = false }) {
  const { t } = useI18n()
  const anchor = useAnchor()
  const ref = useRef(null)
  const w = t.work.items[p.id]
  const move = (e) => {
    const r = ref.current.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5
    ref.current.style.transform = `perspective(900px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-4px)`
    ref.current.style.setProperty('--mx', `${(x + 0.5) * 100}%`); ref.current.style.setProperty('--my', `${(y + 0.5) * 100}%`)
  }
  const leave = () => { ref.current.style.transform = '' }
  return (
    <motion.article layout className={'work' + (big ? ' big' : '')} variants={up} initial="hidden" animate="show" exit={{ opacity: 0, scale: 0.95 }}>
      <a href={routeHref('/work/' + p.id)} onClick={anchor} data-cursor={t.work.view} className="work-in" ref={ref} onPointerMove={move} onPointerLeave={leave} style={{ '--acc': p.accent }}>
        <div className="work-media">
          {p.image ? <span className="work-shot"><span className="work-bar"><i /><i /><i /></span><img src={p.image} alt="" loading="lazy" /></span>
            : p.id === 'night-owl' ? <span className="work-cover owl-cover"><img src={owlEyes} alt="" /></span>
            : <span className="work-cover wm-cover"><Wordmark draw={false} /></span>}
          <span className="work-shine" />
        </div>
        <div className="work-body">
          <span className="work-kind mono">{w.kind}</span>
          <h3>{w.t}</h3>
          <p>{w.d}</p>
          <div className="tags">{w.tags.map((g) => <span key={g}>{g}</span>)}</div>
        </div>
      </a>
    </motion.article>
  )
}
