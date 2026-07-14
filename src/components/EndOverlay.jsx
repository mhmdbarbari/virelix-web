import { useLanguage } from '../lib/i18n'

export default function EndOverlay({ on }) {
  const { t } = useLanguage()
  return (
    <div id="endMsg" className={on ? 'on' : ''}>
      <div>
        <h3>{t('endOverlay.title')}</h3>
        <p>{t('endOverlay.subtitle')}</p>
      </div>
    </div>
  )
}
