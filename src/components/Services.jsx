import { useLanguage } from '../lib/i18n'

export default function Services() {
  const { t } = useLanguage()
  const items = t('services.items')

  return (
    <section id="services">
      <div className="eyebrow reveal">{t('services.eyebrow')}</div>
      <h2 className="title reveal">{t('services.title')}<em>{t('services.titleEm')}</em></h2>
      <div className="cards">
        {items.map(s => (
          <div key={s.title} className="card hoverable reveal">
            <div className="ic">{s.icon}</div><h3>{s.title}</h3><p>{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
