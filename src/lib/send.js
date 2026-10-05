import { CONTACT } from '../content'

// Set VITE_CONTACT_ENDPOINT to receive form posts as JSON; otherwise forms open the visitor's email app.
const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT
export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

/** Returns 'sent' or 'mailto'; throws when the POST fails. `fields` = [label, value] pairs for the email body. */
export async function sendForm({ subject, fields, data }) {
  if (!ENDPOINT) {
    const body = fields.filter(([, v]) => v).map(([k, v]) => (k ? `${k}: ${v}` : `\n${v}`)).join('\n')
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    return 'mailto'
  }
  const r = await fetch(ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify({ _subject: subject, ...data, page: location.href }) })
  if (!r.ok) throw new Error(String(r.status))
  return 'sent'
}

/** Ask the contact form on this page to pre-fill: { needs: number[], message: string }. */
export const prefillContact = (detail) => dispatchEvent(new CustomEvent('vx:prefill', { detail }))
