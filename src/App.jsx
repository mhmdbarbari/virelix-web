import { useCallback, useEffect, useRef, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { gsap, ScrollTrigger } from './lib/motion'
import { useLanguage } from './lib/i18n'
import Loader from './components/Loader'
import Intro from './components/Intro'
import Background from './components/Background'
import Cursor from './components/Cursor'
import Bird from './components/Bird'
import Navbar from './components/Navbar'
import EndOverlay from './components/EndOverlay'
import Home from './pages/Home'
import WorkPage from './pages/WorkPage'
import BlogPage from './pages/BlogPage'
import BlogPost from './pages/BlogPost'

// survives client-side navigation: the cinematic intro only plays once per visit
let entered = false

export default function App() {
  const location = useLocation()
  const { t, lang } = useLanguage()
  // only show loader + intro on the very first landing, and only on the home route
  const needIntro = useRef(!entered && location.pathname === '/').current
  const [phase, setPhase] = useState(needIntro ? 'loading' : 'ready')
  const [birdGone, setBirdGone] = useState(false)
  const [ended, setEnded] = useState(false)
  const ready = phase === 'ready'

  // landing directly on a subpage skips the intro entirely
  useEffect(() => {
    if (!needIntro) {
      entered = true
      document.body.classList.add('ready')
    }
  }, [needIntro])

  // the owl fades in whenever the site becomes ready
  useEffect(() => {
    if (ready) gsap.to('#bird', { opacity: 1, duration: 1.2 })
  }, [ready])

  // scroll reveals + per-section motion language, rebuilt for every page
  useEffect(() => {
    const ctx = gsap.context(() => {
      document.querySelectorAll('.reveal').forEach((el, i) => {
        gsap.to(el, { opacity: 1, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 86%' }, delay: (i % 4) * 0.06 })
      })
      gsap.utils.toArray('.card').forEach((c, i) => gsap.from(c, { scale: 0.94, duration: 0.8,
        ease: 'power2.out', scrollTrigger: { trigger: c, start: 'top 90%' }, delay: (i % 3) * 0.08 }))
      gsap.utils.toArray('.step').forEach(s => gsap.from(s.querySelector('.dot'), { scale: 0,
        duration: 0.6, ease: 'back.out(2)', scrollTrigger: { trigger: s, start: 'top 85%' } }))
      gsap.utils.toArray('.work').forEach((w, i) => gsap.from(w, { rotateY: i % 2 ? 6 : -6,
        transformPerspective: 800, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: w, start: 'top 88%' } }))
      gsap.to('#finalTitle', { scale: 1.02, scrollTrigger: {
        trigger: '#siteFooter', start: 'top 80%', end: 'bottom bottom', scrub: 1 } })
    })
    // web fonts and images (owl art, hero canvas) can resize sections after
    // triggers are first measured — recheck once everything has settled
    const onLoad = () => ScrollTrigger.refresh()
    window.addEventListener('load', onLoad)
    document.fonts?.ready?.then(onLoad)
    const settle = setTimeout(onLoad, 1000)
    return () => { ctx.revert(); window.removeEventListener('load', onLoad); clearTimeout(settle) }
    // Arabic/English swap section heights (Cairo font, RTL, different string
    // lengths) so triggers must be torn down and re-measured on every switch
  }, [location.pathname, lang])

  // fresh pages open at the top (unless a section scroll was requested)
  useEffect(() => {
    if (!location.state?.scrollTo) window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname])

  // per-page browser titles
  useEffect(() => {
    const titles = { '/': t('meta.titleHome'), '/work': t('meta.titleWork'), '/blog': t('meta.titleBlog') }
    document.title = titles[location.pathname]
      || (location.pathname.startsWith('/blog/') ? t('meta.titleBlog') : t('meta.titleHome'))
  }, [location.pathname, t])

  const enterSite = useCallback(() => {
    entered = true
    setPhase('ready')
    document.body.classList.add('ready')
  }, [])

  // final flight: the owl spreads its wings and leaves
  const flyAway = useCallback(() => {
    if (birdGone) {
      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
      return
    }
    setBirdGone(true)
    const bird = document.getElementById('bird')
    const r = bird.getBoundingClientRect()
    gsap.timeline()
      .set(bird, { transform: 'none', left: r.left, top: r.top })
      .to(bird, { scale: 1.25, duration: 0.5, ease: 'power2.out' })
      .to(bird, { y: -innerHeight * 1.2, x: innerWidth * 0.15, scale: 0.4, opacity: 0,
        duration: 2, ease: 'power2.in' }, '-=.1')
      .to('main, nav, footer.site', { opacity: 0, duration: 1.4, ease: 'power2.inOut' }, '-=1.2')
      .add(() => setEnded(true))
      .add(() => {
        setTimeout(() => {
          setEnded(false)
          gsap.to('main, nav, footer.site', { opacity: 1, duration: 1 })
          gsap.set(bird, { clearProps: 'left,top,x,y,scale,opacity,transform' })
          bird.style.opacity = 1
          setBirdGone(false)
          document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
        }, 3200)
      })
  }, [birdGone])

  return (
    <>
      {needIntro && <Loader phase={phase} onDone={() => setPhase('intro')} />}
      {needIntro && <Intro phase={phase} onDone={enterSite} />}
      <Background />
      <Cursor />
      <Bird active={ready} gone={birdGone} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home ready={ready} onFinal={flyAway} />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
      <EndOverlay on={ended} />
    </>
  )
}
