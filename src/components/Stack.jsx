import { useI18n } from '../i18n'
import { STACK } from '../content'
import Heading from './Heading'

export default function Stack() {
  const { t } = useI18n()
  const half = Math.ceil(STACK.length / 2)
  const rows = [STACK.slice(0, half), STACK.slice(half)]
  return (
    <section className="sec stack" id="stack">
      <div className="wrap"><Heading label={t.stack.label} title={t.stack.title} /></div>
      <div className="stack-rows" dir="ltr">
        {rows.map((r, k) => (
          <div className={'marquee chips' + (k ? ' rev' : '')} key={k}>
            <div className="marquee-track">
              {[0, 1, 2].map((c) => (
                <div className="marquee-set" key={c} aria-hidden={c > 0}>{r.map((s) => <span className="chip" key={s}>{s}</span>)}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
