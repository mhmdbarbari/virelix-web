import { useRef } from 'react'

/** Card with a soft light that follows the cursor and a glowing border on hover. */
export default function Spotlight({ as: Tag = 'div', className = '', children, ...rest }) {
  const ref = useRef(null)
  const move = (e) => {
    const r = ref.current.getBoundingClientRect()
    ref.current.style.setProperty('--mx', `${e.clientX - r.left}px`)
    ref.current.style.setProperty('--my', `${e.clientY - r.top}px`)
  }
  return <Tag ref={ref} className={'spot ' + className} onPointerMove={move} {...rest}>{children}</Tag>
}
