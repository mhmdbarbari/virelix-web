import { useEffect, useRef } from 'react'
import { useSmoothScroll } from '../hooks/useLenis'

/** Thin gradient bar showing how far down the page you are. */
export default function ScrollProgress() {
  const bar = useRef(null)
  const { subscribe } = useSmoothScroll()
  useEffect(() => subscribe((y) => {
    const max = document.documentElement.scrollHeight - innerHeight
    bar.current.style.transform = `scaleX(${max > 0 ? y / max : 0})`
  }), [subscribe])
  return <div className="progress" ref={bar} aria-hidden="true" />
}
