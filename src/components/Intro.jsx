import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useI18n } from '../i18n'
import { prefersReducedMotion } from '../motion'
import OwlEyes from './OwlEyes'
import { Wordmark } from './Logo'

const EASE = [0.16, 1, 0.3, 1]
const seen = () => { try { return sessionStorage.getItem('vx-intro') === '1' } catch { return false } }

/**
 * Opening sequence (once per visit, ~3.4 s, skippable):
 * the owl emerges from the dark → its eyes ignite → the wordmark draws itself → the tagline lands → curtain lifts.
 */
export default function Intro({ onDone }) {
  const { t } = useI18n()
  const [phase, setPhase] = useState(seen() || prefersReducedMotion() ? 'done' : 'owl')

  useEffect(() => {
    if (phase === 'done') { onDone(); return }
    document.documentElement.style.overflow = 'hidden'
    const T = [setTimeout(() => setPhase('eyes'), 900), setTimeout(() => setPhase('word'), 1900), setTimeout(() => setPhase('out'), 3500)]
    return () => T.forEach(clearTimeout)
  }, [phase === 'done']) // eslint-disable-line react-hooks/exhaustive-deps

  const finish = () => {
    try { sessionStorage.setItem('vx-intro', '1') } catch { /* ignore */ }
    document.documentElement.style.overflow = ''
    setPhase('done'); onDone()
  }
  useEffect(() => { if (phase === 'out') { const id = setTimeout(finish, 900); return () => clearTimeout(id) } }, [phase]) // eslint-disable-line

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div className="intro" initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} aria-hidden="true">
          <motion.div className="intro-curtain" animate={phase === 'out' ? { clipPath: 'inset(0 0 100% 0)' } : { clipPath: 'inset(0 0 0% 0)' }} transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}>
            <AnimatePresence mode="wait">
              {(phase === 'owl' || phase === 'eyes') && (
                <motion.div
                  key="owl" className="intro-owl"
                  initial={{ opacity: 0, scale: 1.12, filter: 'blur(18px) brightness(.2)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px) brightness(1)' }}
                  exit={{ opacity: 0, scale: 0.86, y: -30, filter: 'blur(10px)', transition: { duration: 0.35 } }}
                  transition={{ duration: 0.9, ease: EASE }}
                >
                  <OwlEyes lit={phase === 'eyes'} track={false} />
                  {phase === 'eyes' && <motion.span className="intro-flash" initial={{ opacity: 0.9, scale: 0.2 }} animate={{ opacity: 0, scale: 2.4 }} transition={{ duration: 0.9, ease: 'easeOut' }} />}
                </motion.div>
              )}
              {(phase === 'word' || phase === 'out') && (
                <motion.div key="word" className="intro-word" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <Wordmark />
                  <div className="intro-tag">
                    {t.intro.tagline.map((w, i) => (
                      <motion.span key={w} initial={{ opacity: 0, y: 14, filter: 'blur(6px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ delay: 0.55 + i * 0.16, duration: 0.6, ease: EASE }}>{w}</motion.span>
                    ))}
                  </div>
                  <motion.span className="intro-line" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.9, duration: 0.8, ease: EASE }} />
                  <motion.div className="intro-sub" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.15, duration: 0.6 }}>{t.intro.sub}</motion.div>
                </motion.div>
              )}
            </AnimatePresence>
            <button className="intro-skip" onClick={finish}>{t.intro.skip} →</button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
