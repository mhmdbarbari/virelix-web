import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { COPY } from './content'

const Ctx = createContext({ lang: 'en', t: COPY.en, toggle: () => {} })

const initial = () => {
  try {
    const saved = localStorage.getItem('vx-lang')
    if (saved === 'ar' || saved === 'en') return saved
  } catch { /* storage unavailable */ }
  return navigator.language?.startsWith('ar') ? 'ar' : 'en'
}

/** Language provider: English / Arabic, switches text direction and fonts. */
export function I18nProvider({ children }) {
  const [lang, setLang] = useState(initial)
  useEffect(() => {
    const el = document.documentElement
    el.lang = lang
    el.dir = COPY[lang].dir
    try { localStorage.setItem('vx-lang', lang) } catch { /* ignore */ }
  }, [lang])
  const toggle = useCallback(() => setLang((l) => (l === 'en' ? 'ar' : 'en')), [])
  return <Ctx.Provider value={{ lang, t: COPY[lang], toggle }}>{children}</Ctx.Provider>
}

export const useI18n = () => useContext(Ctx)
