import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { gsap, RM } from '../lib/motion'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Process from '../components/Process'
import Tech from '../components/Tech'
import Portfolio from '../components/Portfolio'
import Stats from '../components/Stats'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home({ ready, onFinal }) {
  const location = useLocation()

  // hero entrance — plays after the intro, and again when returning to home
  useEffect(() => {
    if (!ready) return
    if (RM) {
      gsap.set('#heroEyebrow, .hero-sub, .hero-cta, .hero-meta, .scrollcue', { opacity: 1, y: 0 })
      gsap.set('#hero h1 .row span', { y: 0 })
      return
    }
    const tl = gsap.timeline()
      .to('#heroEyebrow', { opacity: 1, duration: 0.8 }, 0)
      .to('#hero h1 .row span', { y: 0, stagger: 0.14, duration: 1.1, ease: 'power4.out' }, 0.1)
      .to('.hero-sub', { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }, 0.7)
      .to('.hero-cta', { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }, 0.9)
      .to('.hero-meta', { opacity: 1, duration: 1.2 }, 1.2)
      .to('.scrollcue', { opacity: 1, duration: 1 }, 1.4)
    return () => tl.kill()
  }, [ready])

  // a navlink on another page asked for a specific section — web fonts
  // (Cairo for Arabic) can still be swapping in and reflowing the page at
  // this point, so land once, then correct once more after fonts settle
  useEffect(() => {
    const target = location.state?.scrollTo
    if (!target) return
    const go = () => document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' })
    const t1 = setTimeout(go, 450)
    const t2 = setTimeout(go, 1300)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [location.state])

  return (
    <>
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Tech />
        <Portfolio />
        <Stats />
        <Testimonials />
        <Contact />
      </main>
      <Footer onFinal={onFinal} />
    </>
  )
}
