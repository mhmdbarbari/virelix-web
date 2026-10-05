import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { EASE } from '../anim'

export default function Faq({ items }) {
  const [open, setOpen] = useState(0)
  return (
    <div className="faq">
      {items.map((f, i) => {
        const on = open === i
        return (
          <div className={'faq-it' + (on ? ' on' : '')} key={f.q}>
            <button className="faq-q" aria-expanded={on} onClick={() => setOpen(on ? -1 : i)}><span>{f.q}</span><i aria-hidden="true" /></button>
            <AnimatePresence initial={false}>
              {on && (
                <motion.div className="faq-a" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.45, ease: EASE }}>
                  <p>{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
