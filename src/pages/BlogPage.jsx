import { motion } from 'framer-motion'
import { useI18n } from '../i18n'
import { POSTS } from '../content'
import { useMeta } from '../hooks/useMeta'
import { stagger } from '../anim'
import Heading from '../components/Heading'
import BlogCard from '../components/BlogCard'

export default function BlogPage() {
  const { t } = useI18n()
  useMeta(t.nav.blog, t.blog.lead)
  return (
    <section className="sec page-top">
      <div className="wrap">
        <Heading as="h1" label={t.blog.label} title={t.blog.title} lead={t.blog.lead} />
        <motion.div className="post-grid" initial="hidden" animate="show" variants={stagger(0.1, 0.3)}>{POSTS.map((p) => <BlogCard key={p.id} post={p} />)}</motion.div>
      </div>
    </section>
  )
}
