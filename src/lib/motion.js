import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const RM = matchMedia('(prefers-reduced-motion: reduce)').matches
export const isTouch = matchMedia('(hover: none)').matches
export { gsap, ScrollTrigger }
