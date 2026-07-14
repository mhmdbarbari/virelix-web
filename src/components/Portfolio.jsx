import { Link } from 'react-router-dom'
import { useLanguage } from '../lib/i18n'

export default function Portfolio() {
  const { t } = useLanguage()
  const items = t('portfolio.items')

  return (
    <section id="work">
      <div className="eyebrow reveal">{t('portfolio.eyebrow')}</div>
      <h2 className="title reveal">{t('portfolio.title')}<em>{t('portfolio.titleEm')}</em></h2>
      <div className="works">
        {items.map(w => (
          <Link key={w.title} className="work hoverable reveal" to="/work">
            <div className={`art ${w.art}`} />
            <div className="info">
              <div className="tag">{w.tag}</div>
              <h3>{w.title}</h3><p>{w.text}</p>
              <div className="stack" dir="ltr">{w.stack.map(s => <span key={s}>{s}</span>)}</div>
            </div>
          </Link>
        ))}
      </div>
      <div className="reveal" style={{ marginTop: 44 }}>
        <Link to="/work" className="btn btn-ghost hoverable">{t('portfolio.viewAll')} <span className="arr">→</span></Link>
      </div>
    </section>
  )
}
