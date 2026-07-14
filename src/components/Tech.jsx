import { useLanguage } from '../lib/i18n'

const TECHS = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Laravel', 'Flutter', 'Python',
  'Docker', 'AWS', 'MongoDB', 'PostgreSQL', 'GraphQL', 'Three.js', 'GSAP', 'Tailwind CSS']

export default function Tech() {
  const { t } = useLanguage()
  return (
    <section id="tech">
      <div className="eyebrow reveal">{t('tech.eyebrow')}</div>
      <h2 className="title reveal">{t('tech.title')}<em>{t('tech.titleEm')}</em></h2>
      <div className="tech-cloud reveal" dir="ltr">
        {TECHS.map(tech => <span key={tech} className="chip hoverable">{tech}</span>)}
      </div>
    </section>
  )
}
