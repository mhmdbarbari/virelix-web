import { Link, useParams, Navigate } from 'react-router-dom'
import { useLanguage } from '../lib/i18n'

export default function BlogPost() {
  const { slug } = useParams()
  const { t } = useLanguage()
  const posts = t('posts')
  const post = posts.find(p => p.slug === slug)
  if (!post) return <Navigate to="/blog" replace />

  const more = posts.filter(p => p.slug !== slug).slice(0, 2)

  return (
    <>
      <main>
        <section className="page-head article">
          <Link to="/blog" className="post-back hoverable">{t('blog.allArticles')}</Link>
          <div className="post-meta reveal">
            <span className="pcat">{post.cat}</span>
            <span>{post.date}</span><span>·</span><span>{post.read} {t('blog.readSuffix')}</span>
          </div>
          <h2 className="title reveal">{post.title}</h2>
          <p className="lead reveal">{post.intro}</p>
          <div className="post-body">
            {post.body.map((para, i) => <p key={i} className="reveal">{para}</p>)}
          </div>

          <div className="post-cta reveal">
            <b>{t('blog.wantThis')}</b>
            <Link to="/" state={{ scrollTo: '#contact' }} className="btn btn-primary hoverable">
              {t('blog.talkToUs')} <span className="arr">→</span>
            </Link>
          </div>

          <div className="post-more-grid">
            {more.map(p => (
              <Link key={p.slug} to={`/blog/${p.slug}`} className="post-card hoverable">
                <div className="post-meta">
                  <span className="pcat">{p.cat}</span><span>{p.date}</span>
                </div>
                <h3>{p.title}</h3>
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
