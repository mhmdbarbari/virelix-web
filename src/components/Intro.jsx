import { useEffect, useRef } from 'react'
import { RM } from '../lib/motion'
import { useLanguage } from '../lib/i18n'
import introVideo from '../assets/intro.mp4'

export default function Intro({ phase, onDone }) {
  const { t } = useLanguage()
  const vidRef = useRef(null)
  const done = useRef(false)

  const finish = () => {
    if (done.current) return
    done.current = true
    vidRef.current?.pause()
    onDone()
  }

  useEffect(() => {
    if (phase !== 'intro') return
    if (RM) { finish(); return }
    const v = vidRef.current
    v.currentTime = 0
    // if the browser blocks autoplay for any reason, go straight into the site
    v.play().catch(finish)
  }, [phase])

  return (
    <div id="intro" className={phase === 'ready' ? 'done' : ''}>
      <video ref={vidRef} id="introVideo" src={introVideo} muted playsInline preload="auto" onEnded={finish} />
      {phase === 'intro' && <button id="introSkip" onClick={finish}>{t('intro.skip')}</button>}
    </div>
  )
}
