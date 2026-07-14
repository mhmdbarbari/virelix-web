import { useLanguage } from '../lib/i18n'

export default function Process() {
  const { t } = useLanguage()
  const steps = t('process.steps')

  return (
    <section id="process">
      <div className="eyebrow reveal">{t('process.eyebrow')}</div>
      <h2 className="title reveal">{t('process.title')}<em>{t('process.titleEm')}</em></h2>
      <div className="process">
        {steps.map((s, i) => (
          <div key={s.title} className="step reveal">
            <div className="dot" />
            <div className="no">{t('process.phaseLabel')} 0{i + 1}</div>
            <h3>{s.title}</h3><p>{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
