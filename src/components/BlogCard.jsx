import { motion } from 'framer-motion'
import { useI18n } from '../i18n'
import { up } from '../anim'
import Spotlight from './Spotlight'

export default function BlogCard({ post }) {
  const { t, lang } = useI18n()
  const p = t.blog.items[post.id]
  const date = new Date(post.date + '-01').toLocaleDateString(lang === 'ar' ? 'ar-JO' : 'en-GB', { month: 'short', year: 'numeric' })
  return (
    <motion.div variants={up}>
      <Spotlight as="article" className="card post">
        <div className="post-meta mono"><span className="post-tag">{p.tag}</span><span>{date} · {post.mins} {t.blog.read}</span></div>
        <h3>{p.t}</h3>
        <p>{p.d}</p>
        <span className="post-soon mono">{t.blog.soon}</span>
      </Spotlight>
    </motion.div>
  )
}
