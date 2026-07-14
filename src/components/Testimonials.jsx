import { useEffect, useState } from 'react'
import { useLanguage } from '../lib/i18n'

export default function Testimonials() {
  const { t } = useLanguage()
  const QUOTES = t('testimonials.quotes')
  const [cur, setCur] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setCur(c => (c + 1) % QUOTES.length), 6000)
    return () => clearInterval(id)
  }, [cur, QUOTES.length]) // restarting on manual change resets the timer

  return (
    <section id="quotes">
      <div className="eyebrow reveal">{t('testimonials.eyebrow')}</div>
      <h2 className="title reveal">{t('testimonials.title')}<em>{t('testimonials.titleEm')}</em></h2>
      <div className="rail reveal">
        {QUOTES.map((q, i) => (
          <div key={q.name} className={`quote${i === cur ? ' on' : ''}`}>
            <p>{q.text}</p>
            <footer>
              <div className="av">{q.av}</div>
              <div><b>{q.name}</b><small>{q.role}</small></div>
            </footer>
          </div>
        ))}
      </div>
      <div className="qdots">
        {QUOTES.map((q, i) => (
          <button key={q.name} className={`hoverable${i === cur ? ' on' : ''}`}
            onClick={() => setCur(i)} aria-label={`Show testimonial ${i + 1}`} />
        ))}
      </div>
    </section>
  )
}
