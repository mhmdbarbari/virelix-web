import { motion } from 'framer-motion'

/** Nav wordmark: "VIRE" + gradient "LIX", as on the current site. */
export function Logo() {
  return <span className="logo-word" aria-label="VIRELIX"><span>VIRE</span><b>LIX</b></span>
}

// Geometric wordmark for the intro: V I R ≡ L I X drawn as strokes.
const SILVER = ['M4 6 L44 94 L84 6', 'M128 6 V94', 'M176 94 V6 H222 A23 23 0 0 1 222 52 H176 M210 52 L252 94', 'M298 6 H372 M298 50 H372 M298 94 H372', 'M418 6 V94 H486']
const ACCENT = ['M532 6 V94', 'M576 6 L652 94 M652 6 L576 94']

export function Wordmark({ draw = true, delay = 0 }) {
  const path = (d, i, stroke) => (
    <motion.path
      key={d} d={d} stroke={stroke} fill="none" strokeWidth="7" strokeLinecap="square"
      initial={draw ? { pathLength: 0, opacity: 0 } : false}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 0.9, delay: delay + i * 0.07, ease: [0.65, 0, 0.35, 1] }}
    />
  )
  return (
    <svg className="wordmark" viewBox="-6 -6 668 112" role="img" aria-label="VIRELIX">
      <defs>
        <linearGradient id="wmSilver" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="100"><stop offset="0" stopColor="#ffffff" /><stop offset=".55" stopColor="#c9cbe0" /><stop offset="1" stopColor="#8f93b5" /></linearGradient>
        <linearGradient id="wmAccent" gradientUnits="userSpaceOnUse" x1="520" y1="0" x2="660" y2="100"><stop offset="0" stopColor="#6d5dfc" /><stop offset=".5" stopColor="#a855f7" /><stop offset="1" stopColor="#7c3aed" /></linearGradient>
      </defs>
      {SILVER.map((d, i) => path(d, i, 'url(#wmSilver)'))}
      {ACCENT.map((d, i) => path(d, SILVER.length + i, 'url(#wmAccent)'))}
    </svg>
  )
}
