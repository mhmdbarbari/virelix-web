export const EASE = [0.16, 1, 0.3, 1]
export const inView = { initial: 'hidden', whileInView: 'show', viewport: { once: true, margin: '-10% 0px' } }
export const stagger = (gap = 0.08, delay = 0) => ({ hidden: {}, show: { transition: { staggerChildren: gap, delayChildren: delay } } })
export const up = { hidden: { opacity: 0, y: 36 }, show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } } }
export const line = { hidden: { y: '115%' }, show: { y: '0%', transition: { duration: 1.1, ease: EASE } } }
