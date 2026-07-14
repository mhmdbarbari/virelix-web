import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '../lib/motion'
import { useLanguage } from '../lib/i18n'

const CODE = [
  '<span class="c-k">import</span> { vision } <span class="c-k">from</span> <span class="c-s">"@virelix/core"</span>;',
  '&nbsp;',
  '<span class="c-k">const</span> project = <span class="c-k">await</span> <span class="c-f">virelix.build</span>({',
  '&nbsp;&nbsp;design: <span class="c-s">"see.analyze.dominate"</span>,',
  '&nbsp;&nbsp;performance: <span class="c-n">99</span>,',
  '&nbsp;&nbsp;ai: <span class="c-n">true</span>,',
  '&nbsp;&nbsp;growth: <span class="c-s">"compounding"</span>',
  '});',
  '&nbsp;',
  '<span class="c-f">deploy</span>(project); <span style="color:#3d4658">// → the future</span> <span class="caret"></span>',
]

export default function About() {
  const { t } = useLanguage()
  const values = t('about.values')
  const termRef = useRef(null)

  useEffect(() => {
    const st = ScrollTrigger.create({
      trigger: termRef.current, start: 'top 80%', once: true,
      onEnter: () => gsap.to(termRef.current.querySelectorAll('.line'),
        { opacity: 1, x: 0, stagger: 0.28, duration: 0.4, ease: 'power1.out' }),
    })
    return () => st.kill()
  }, [])

  return (
    <section id="about">
      <div className="about-grid">
        <div>
          <div className="eyebrow reveal">{t('about.eyebrow')}</div>
          <h2 className="title reveal">{t('about.title')}<em>{t('about.titleEm')}</em></h2>
          <p className="lead reveal">{t('about.lead1')}</p>
          <p className="lead reveal">{t('about.lead2')}</p>
        </div>
        <div className="term reveal">
          <div className="term-bar">
            <i /><i /><i />
            <span style={{ marginLeft: 10, fontFamily: 'var(--font-m)', fontSize: 11, color: 'var(--text-faint)' }}>
              {t('about.terminalName')}
            </span>
          </div>
          <div className="term-body" ref={termRef} dir="ltr">
            {CODE.map((l, i) => <span key={i} className="line" dangerouslySetInnerHTML={{ __html: l }} />)}
          </div>
        </div>
      </div>
      <div className="values">
        {values.map(v => (
          <div key={v.title} className="val hoverable reveal">
            <div className="vi">{v.icon}</div><b>{v.title}</b><p>{v.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
