import { useEffect, useRef } from 'react'
import { publicUrl } from '../router'
import { prefersReducedMotion } from '../motion'

/**
 * Looping background video from public/videos/<name>.(webm|mp4) with <name>.jpg as poster.
 * Downloads metadata only, plays only while on screen, and shows just the poster for reduced motion.
 */
export default function BgVideo({ name, className = '' }) {
  const ref = useRef(null)
  const reduce = prefersReducedMotion()
  useEffect(() => {
    const v = ref.current
    if (!v || reduce || !('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(([e]) => (e.isIntersecting ? v.play().catch(() => {}) : v.pause()), { rootMargin: '150px 0px' })
    io.observe(v)
    return () => io.disconnect()
  }, [name, reduce])
  const src = (ext) => publicUrl(`videos/${name}.${ext}`)
  if (reduce) return <img className={'bgv ' + className} src={src('jpg')} alt="" aria-hidden="true" />
  return (
    <video key={name} ref={ref} className={'bgv ' + className} poster={src('jpg')} muted loop playsInline autoPlay preload="metadata" aria-hidden="true">
      <source src={src('webm')} type="video/webm" />
      <source src={src('mp4')} type="video/mp4" />
    </video>
  )
}
