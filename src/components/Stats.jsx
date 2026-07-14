import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '../lib/motion'
import { useLanguage } from '../lib/i18n'

function Counter({ count, suffix }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    const st = ScrollTrigger.create({
      trigger: el, start: 'top 88%', once: true,
      onEnter: () => {
        const o = { v: 0 }
        gsap.to(o, { v: count, duration: 2, ease: 'power3.out',
          onUpdate: () => { el.textContent = Math.floor(o.v) + suffix } })
      },
    })
    return () => st.kill()
  }, [count, suffix])
  return <b ref={ref} dir="ltr">0</b>
}

export default function Stats() {
  const { t } = useLanguage()
  const items = t('stats.items')

  return (
    <section id="stats">
      <div className="eyebrow reveal">{t('stats.eyebrow')}</div>
      <h2 className="title reveal">{t('stats.title')}<em>{t('stats.titleEm')}</em></h2>
      <div className="grid">
        {items.map(s => (
          <div key={s.label} className="stat reveal">
            <Counter count={s.count} suffix={s.suffix} />
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
