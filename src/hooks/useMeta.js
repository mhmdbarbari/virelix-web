import { useEffect } from 'react'
import { useI18n } from '../i18n'

const set = (attr, key, value) => {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) { el = document.createElement('meta'); el.setAttribute(attr, key); document.head.appendChild(el) }
  el.setAttribute('content', value)
}

/** Per-page title and description (+ Open Graph), in the current language. */
export function useMeta(title, description) {
  const { t } = useI18n()
  useEffect(() => {
    const full = title ? `${title} · VIRELIX` : t.meta.title
    const desc = description || t.meta.desc
    document.title = full
    set('name', 'description', desc)
    set('property', 'og:title', full)
    set('property', 'og:description', desc)
  }, [title, description, t])
}
