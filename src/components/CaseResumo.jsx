import { useLang } from '../lib/i18n.jsx'

// "Em 30 segundos": o case inteiro para quem está com pressa
export default function CaseResumo({ itens, className = '' }) {
  const { t } = useLang()
  return (
    <section className={`resumo ${className}`} aria-labelledby="t-resumo" data-revela>
      <h2 id="t-resumo" className="resumo-titulo">{t('Em 30 segundos', 'In 30 seconds')}</h2>
      <dl>
        {itens.map((i) => (
          <div key={t(i.t)}>
            <dt>{t(i.t)}</dt>
            <dd>{t(i.d)}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
