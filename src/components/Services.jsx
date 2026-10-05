import { motion } from 'framer-motion'
import { useI18n } from '../i18n'
import { SERVICES } from '../content'
import { inView, stagger, up, EASE } from '../anim'
import Heading from './Heading'
import Icon from './Icon'
import Spotlight from './Spotlight'
import { useAnchor } from '../hooks/useLenis'
import { routeHref } from '../router'

/** "Code on one side. Marketing on the other." Two columns joined by a glowing seam. */
export default function Services() {
  const { t } = useI18n()
  const anchor = useAnchor()
  const col = (side) => (
    <motion.div className={'svc-col ' + side} {...inView} variants={stagger(0.08)}>
      <motion.div className="svc-col-head" variants={up}>
        <span className="svc-big">{t.services[side]}</span>
        <p>{t.services[side + 'Sub']}</p>
      </motion.div>
      {SERVICES.filter((s) => s.side === side).map((s, i) => (
        <motion.div key={s.id} variants={up}>
          <Spotlight as="a" href={routeHref('/services/' + s.id)} onClick={anchor} data-cursor={t.work.view} className="card svc">
            <span className="svc-ic"><Icon name={s.icon} /></span>
            <div>
              <h3>{t.services.items[s.id].t}</h3>
              <p>{t.services.items[s.id].d}</p>
            </div>
            <span className="svc-n mono">{side === 'build' ? '0' + (i + 1) : '0' + (i + 5)}</span>
          </Spotlight>
        </motion.div>
      ))}
    </motion.div>
  )
  return (
    <section className="sec services" id="services">
      <div className="wrap">
        <Heading label={t.services.label} title={t.services.title} />
        <div className="svc-grid">
          {col('build')}
          <motion.span className="svc-seam" initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true, margin: '-20% 0px' }} transition={{ duration: 1.6, ease: EASE }} aria-hidden="true"><i /></motion.span>
          {col('grow')}
        </div>
      </div>
    </section>
  )
}
