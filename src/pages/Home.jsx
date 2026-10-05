import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useI18n } from '../i18n'
import { POSTS } from '../content'
import { useSmoothScroll, useAnchor } from '../hooks/useLenis'
import { useMeta } from '../hooks/useMeta'
import { routeHref } from '../router'
import { ScrollTrigger } from '../motion'
import { inView, stagger, up } from '../anim'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import WorkSection from '../components/WorkSection'
import Process from '../components/Process'
import Stack from '../components/Stack'
import Numbers from '../components/Numbers'
import Heading from '../components/Heading'
import BlogCard from '../components/BlogCard'
import Contact from '../components/Contact'
import Showcase3D from '../components/Showcase3D'
import CheckTeaser from '../components/CheckTeaser'

export default function Home({ ready }) {
  const { t } = useI18n()
  const { state } = useLocation()
  const navigate = useNavigate()
  const { scrollTo } = useSmoothScroll()
  const anchor = useAnchor()
  useMeta()
  useEffect(() => {
    if (!state?.scrollTo) return
    const id = setTimeout(() => { ScrollTrigger.refresh(); scrollTo(state.scrollTo); navigate('.', { replace: true, state: null }) }, 400)
    return () => clearTimeout(id)
  }, [state]) // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <>
      <Hero ready={ready} />
      <About />
      <Services />
      <Showcase3D />
      <WorkSection />
      <Process />
      <Stack />
      <Numbers />
      <CheckTeaser />
      <section className="sec blog-sec" id="blog">
        <div className="wrap">
          <div className="head-row">
            <Heading label={t.blog.label} title={t.blog.title} />
            <motion.a {...inView} variants={up} href={routeHref('/blog')} onClick={anchor} className="btn btn-ghost">{t.blog.all} →</motion.a>
          </div>
          <motion.div className="post-grid" {...inView} variants={stagger(0.1)}>{POSTS.map((p) => <BlogCard key={p.id} post={p} />)}</motion.div>
        </div>
      </section>
      <Contact />
    </>
  )
}
