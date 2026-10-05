import { useCallback, useLayoutEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import { I18nProvider } from './i18n'
import { SmoothScrollProvider, useSmoothScroll } from './hooks/useLenis'
import { ScrollTrigger } from './motion'
import Background from './components/Background'
import Intro from './components/Intro'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import WorkPage from './pages/WorkPage'
import BlogPage from './pages/BlogPage'
import ServicePage from './pages/ServicePage'
import ProjectPage from './pages/ProjectPage'
import PlannerPage from './pages/PlannerPage'
import CareersPage from './pages/CareersPage'
import CheckPage from './pages/CheckPage'
import NotFound from './pages/NotFound'
import Cursor from './components/Cursor'
import ScrollProgress from './components/ScrollProgress'
import ChatWidget from './components/ChatWidget'

function RouteEffects() {
  const { pathname, state } = useLocation()
  const { scrollTo } = useSmoothScroll()
  useLayoutEffect(() => {
    if (!state?.scrollTo) scrollTo(0, { immediate: true })
    const id = requestAnimationFrame(() => ScrollTrigger.refresh())
    return () => cancelAnimationFrame(id)
  }, [pathname]) // eslint-disable-line react-hooks/exhaustive-deps
  return null
}

function Shell() {
  const [ready, setReady] = useState(false)
  const onDone = useCallback(() => setReady(true), [])
  const skip = (e) => { e.preventDefault(); document.getElementById('main')?.focus({ preventScroll: true }) }
  return (
    <>
      <a href="#main" className="skip" onClick={skip}>Skip to content</a>
      <Background />
      <Intro onDone={onDone} />
      <Nav ready={ready} />
      <RouteEffects />
      <main>
        <span id="main" tabIndex={-1} />
        <Routes>
          <Route path="/" element={<Home ready={ready} />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/work/:id" element={<ProjectPage />} />
          <Route path="/services/:id" element={<ServicePage />} />
          <Route path="/start" element={<PlannerPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/check" element={<CheckPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <ScrollProgress />
      <ChatWidget />
      <Cursor />
    </>
  )
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <I18nProvider>
        <SmoothScrollProvider><Shell /></SmoothScrollProvider>
      </I18nProvider>
    </MotionConfig>
  )
}
