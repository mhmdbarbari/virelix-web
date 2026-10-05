import { useI18n } from '../i18n'
import { useAnchor } from '../hooks/useLenis'
import { useMeta } from '../hooks/useMeta'
import { routeHref } from '../router'
import OwlEyes from '../components/OwlEyes'

export default function NotFound() {
  const { t } = useI18n()
  const anchor = useAnchor()
  useMeta('404')
  return (
    <section className="sec nf">
      <div className="wrap nf-in">
        <div className="nf-owl"><OwlEyes /></div>
        <div>
          <span className="nf-code grad">404</span>
          <h1 className="h2">{t.notFound.t}</h1>
          <p className="lead">{t.notFound.d}</p>
          <a href={routeHref('/')} className="btn btn-grad" onClick={anchor}>{t.notFound.home}</a>
        </div>
      </div>
    </section>
  )
}
