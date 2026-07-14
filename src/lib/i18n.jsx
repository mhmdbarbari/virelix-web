import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { translations } from './translations'

const LanguageContext = createContext(null)

function getInitialLang() {
  try {
    const saved = localStorage.getItem('virelix-lang')
    if (saved === 'en' || saved === 'ar') return saved
  } catch { /* localStorage unavailable */ }
  return 'en'
}

function lookup(dict, path) {
  let node = dict
  for (const key of path.split('.')) {
    if (node == null) return undefined
    node = node[key]
  }
  return node
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang)

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    try { localStorage.setItem('virelix-lang', lang) } catch { /* ignore */ }
  }, [lang])

  const toggle = useCallback(() => setLang(l => (l === 'en' ? 'ar' : 'en')), [])

  // t('services.title') walks the active dictionary; falls back to English, then the key itself
  const t = useCallback((path) => {
    const val = lookup(translations[lang], path)
    if (val !== undefined) return val
    const fallback = lookup(translations.en, path)
    return fallback !== undefined ? fallback : path
  }, [lang])

  const value = useMemo(() => ({ lang, isRTL: lang === 'ar', toggle, setLang, t }), [lang, toggle, t])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}
