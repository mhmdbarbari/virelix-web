import { Link } from 'react-router-dom'
import { useLanguage } from '../lib/i18n'

export default function BlogPage() {
  const { t } = useLanguage()
  const [featured, ...rest] = t('posts')

  return (
    <>
      <main>
        <section className="page-head">
          <div className="eyebrow reveal">{t('blog.eyebrow')}</div>
          <h2 className="title reveal">{t('blog.title')}<em>{t('blog.titleEm')}</em></h2>
          <p className="lead reveal">{t('blog.lead')}</p>

          <Link to={`/blog/${featured.slug}`} className="post-feature hoverable reveal">
            <div className="pf-body">
              <div className="post-meta">
                <span className="pcat">{featured.cat}</span>
                <span>{featured.date}</span><span>·</span><span>{featured.read} {t('blog.readSuffix')}</span>
              </div>
              <h3>{featured.title}</h3>
              <p>{featured.intro}</p>
              <span className="post-more">{t('blog.readArticle')} <span className="arr">→</span></span>
            </div>
          </Link>

          <div className="post-grid">
            {rest.map(p => (
              <Link key={p.slug} to={`/blog/${p.slug}`} className="post-card hoverable reveal">
                <div className="post-meta">
                  <span className="pcat">{p.cat}</span>
                  <span>{p.date}</span><span>·</span><span>{p.read} {t('blog.readSuffix')}</span>
                </div>
                <h3>{p.title}</h3>
                <p>{p.intro}</p>
                <span className="post-more">{t('blog.readArticle')} <span className="arr">→</span></span>
              </Link>
            ))}
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
