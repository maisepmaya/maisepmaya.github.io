import { useLang } from '../lib/i18n.jsx'

// Leva o foco direto ao conteúdo, sem mexer no hash (que é usado pelas rotas)
export default function SkipLink() {
  const { t } = useLang()
  const pular = (e) => {
    e.preventDefault()
    const main = document.getElementById('conteudo')
    main?.focus()
    main?.scrollIntoView()
  }
  return <a className="pular" href="#conteudo" onClick={pular}>{t('Pular para o conteúdo', 'Skip to content')}</a>
}
