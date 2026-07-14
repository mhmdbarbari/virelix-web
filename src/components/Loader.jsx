import { useEffect, useRef, useState } from 'react'
import { RM } from '../lib/motion'
import { useLanguage } from '../lib/i18n'

export default function Loader({ phase, onDone }) {
  const { t } = useLanguage()
  const messages = t('loader.messages')
  const [pct, setPct] = useState(0)
  const [mi, setMi] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    if (started.current) return
    started.current = true
    if (RM) { onDone(); return }
    let p = 0
    const step = () => {
      p = Math.min(100, p + Math.random() * 9 + 3)
      setPct(Math.floor(p))
      setMi(Math.min(messages.length - 1, Math.floor(p / 20)))
      if (p < 100) setTimeout(step, 120 + Math.random() * 160)
      else setTimeout(onDone, 350)
    }
    setTimeout(step, 300)
  }, [onDone, messages.length])

  return (
    <div id="loader" className={phase !== 'loading' ? 'done' : ''}>
      <div id="loadStatus">{messages[mi]}</div>
      <div id="loadBar"><div id="loadFill" style={{ transform: `scaleX(${pct / 100})` }} /></div>
      <div id="loadPct">{pct}%</div>
    </div>
  )
}
