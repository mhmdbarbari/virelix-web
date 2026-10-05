import { createContext, useContext, useEffect, useRef, useCallback } from 'react'
import Lenis from 'lenis'
import { useLocation, useNavigate } from 'react-router-dom'
import { gsap, ScrollTrigger, prefersReducedMotion } from '../motion'

const ScrollCtx = createContext({ scrollTo: () => {}, subscribe: () => () => {}, velocity: { current: 0 }, lock: () => {}, registerTarget: () => () => {} })

export function SmoothScrollProvider({ children }) {
  const lenisRef = useRef(null)
  const listeners = useRef(new Set())
  const velocity = useRef(0)
  const targets = useRef(new Map())

  useEffect(() => {
    const emit = (y, v) => listeners.current.forEach((fn) => fn(y, v))
    if (prefersReducedMotion()) {
      const onScroll = () => emit(window.scrollY, 0)
      window.addEventListener('scroll', onScroll, { passive: true })
      return () => window.removeEventListener('scroll', onScroll)
    }
    const lenis = new Lenis({ lerp: 0.085, wheelMultiplier: 1 })
    lenisRef.current = lenis
    lenis.on('scroll', (e) => {
      velocity.current = e.velocity
      ScrollTrigger.update()
      emit(e.scroll, e.velocity)
    })
    const raf = (t) => lenis.raf(t * 1000)
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)
    return () => { gsap.ticker.remove(raf); lenis.destroy(); lenisRef.current = null }
  }, [])

  const scrollTo = useCallback((target, opts = {}) => {
    // named targets (positions inside pinned sections) win over DOM ids
    const named = targets.current.get(target)
    const el = typeof target === 'number' ? target : named ? named() : target === '#top' ? 0 : document.querySelector(target)
    if (el === null) return
    if (lenisRef.current) lenisRef.current.scrollTo(el, opts.immediate ? { immediate: true, force: true, offset: opts.offset ?? 0 } : { duration: 1.8, offset: opts.offset ?? 0, easing: (t) => 1 - Math.pow(1 - t, 4) })
    else if (typeof el === 'number') window.scrollTo({ top: el })
    else el.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
  }, [])

  // Freeze page scrolling (e.g. while the mobile menu is open).
  const lock = useCallback((on) => {
    if (lenisRef.current) on ? lenisRef.current.stop() : lenisRef.current.start()
    document.documentElement.style.overflow = on ? 'hidden' : ''
  }, [])

  /** Register a function returning a scroll position for a hash (e.g. '#solutions'). */
  const registerTarget = useCallback((hash, fn) => {
    targets.current.set(hash, fn)
    return () => targets.current.delete(hash)
  }, [])

  const subscribe = useCallback((fn) => {
    listeners.current.add(fn)
    return () => listeners.current.delete(fn)
  }, [])

  return <ScrollCtx.Provider value={{ scrollTo, subscribe, velocity, lock, registerTarget }}>{children}</ScrollCtx.Provider>
}

export const useSmoothScroll = () => useContext(ScrollCtx)

/**
 * onClick handler for links.
 *  - '#section'  → smooth-scroll if the section is on this page, otherwise go home and scroll there
 *  - '/path' or '#/path' (hash-router mode) → client-side navigation to another page
 */
export function useAnchor(after) {
  const { scrollTo } = useSmoothScroll()
  const navigate = useNavigate()
  const { pathname } = useLocation()
  return (e) => {
    let href = e.currentTarget.getAttribute('href')
    if (!href || href === '#') return
    if (href.startsWith('#/')) href = href.slice(1)
    if (href.startsWith('/')) {
      if (e.metaKey || e.ctrlKey || e.shiftKey) return            // let the browser open a new tab
      e.preventDefault(); after?.(); navigate(href); return
    }
    if (!href.startsWith('#')) return
    e.preventDefault(); after?.()
    const onPage = pathname === '/' || href === '#top' || document.querySelector(href)
    if (onPage) scrollTo(href)
    else navigate('/', { state: { scrollTo: href } })
  }
}
