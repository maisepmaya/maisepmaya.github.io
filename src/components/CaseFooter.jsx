import { vizinhos } from '../data/cases.js'
import { useLang } from '../lib/i18n.jsx'

// Rodapé dos cases: blocos grandes para o case anterior e o próximo
export default function CaseFooter({ id, className = 'rodape' }) {
  const { t } = useLang()
  const { anterior, proximo } = vizinhos(id)
  return (
    <footer className={`${className} case-nav-rodape`}>
      <div className="container">
        {anterior && (
          <a href={`#${anterior.id}`}><small>← {t('case anterior', 'previous case')}</small>{t(anterior.curto)}</a>
        )}
        {proximo ? (
          <a className="prox" href={`#${proximo.id}`}><small>{t('próximo case', 'next case')} →</small>{t(proximo.curto)}</a>
        ) : (
          <a className="prox" href="#contato"><small>{t('gostou?', 'liked it?')} →</small>{t('Vamos conversar', "Let's talk")}</a>
        )}
      </div>
    </footer>
  )
}
