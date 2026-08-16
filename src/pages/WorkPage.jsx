import { useState } from 'react'
import { useLanguage } from '../lib/i18n'

const FILTER_KEYS = ['All', 'Web', 'Mobile', 'Branding', 'Campaigns', 'Social']

export default function WorkPage() {
  const { t } = useLanguage()
  const projects = t('work.projects')
  const filterLabels = t('work.filters')
  const [filter, setFilter] = useState('All')
  const shown = filter === 'All' ? projects : projects.filter(p => p.cat === filter)

  return (
    <>
      <main>
        <section className="page-head">
          <div className="eyebrow reveal">{t('work.eyebrow')}</div>
          <h2 className="title reveal">{t('work.title')}<em>{t('work.titleEm')}</em></h2>
          <p className="lead reveal">{t('work.lead')}</p>
          <div className="filters reveal">
            {FILTER_KEYS.map(f => (
              <button key={f} className={`filter hoverable${filter === f ? ' on' : ''}`}
                onClick={() => setFilter(f)}>{filterLabels[f]}</button>
            ))}
          </div>
          <div className="works" key={filter}>
            {shown.map(w => {
              const Tag = w.url ? 'a' : 'div'
              // plain <a target="_blank"> is enough almost everywhere, but on some
              // browsers/extensions a rapid open-close-open cycle on the previous tab
              // gets misread as a popup flood and silently swallowed with no error —
              // opening explicitly through window.open on click sidesteps that
              const linkProps = w.url
                ? { href: w.url, onClick: e => { e.preventDefault(); window.open(w.url, '_blank', 'noopener,noreferrer') } }
                : {}
              return (
                <Tag key={w.title} className="work hoverable" {...linkProps}>
                  <div className={`art ${w.img ? 'art-photo' : w.art}`} style={w.img ? { backgroundImage: `url(${w.img})` } : undefined} />
                  <div className="info">
                    <div className="tag">{w.tag}</div>
                    <h3>{w.title}</h3><p>{w.text}</p>
                    <div className="stack" dir="ltr">{w.stack.map(s => <span key={s}>{s}</span>)}</div>
                  </div>
                </Tag>
              )
            })}
          </div>
        </section>
      </main>
      <footer className="page-foot">
        <div className="foot-meta">
          <span>© 2026 VIRELIX</span>
          <span>{t('footer.tagline')}</span>
          <span>{t('footer.locationShort')}</span>
        </div>
      </footer>
    </>
  )
}
