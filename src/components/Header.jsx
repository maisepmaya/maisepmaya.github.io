import { useEffect, useState } from 'react'
import Logo from './Logo.jsx'
import { CURRICULO } from '../lib/asset.js'
import { useLang } from '../lib/i18n.jsx'

function Idioma() {
  const { lang, setLang, t } = useLang()
  return (
    <div className="idioma" role="group" aria-label={t('Idioma', 'Language')}>
      <button type="button" aria-pressed={lang === 'pt'} onClick={() => setLang('pt')} lang="pt-BR" aria-label="Português">PT</button>
      <button type="button" aria-pressed={lang === 'en'} onClick={() => setLang('en')} lang="en" aria-label="English">EN</button>
    </div>
  )
}

export default function Header({ caso }) {
  const { t } = useLang()
  const [rolou, setRolou] = useState(false)
  useEffect(() => {
    const f = () => setRolou(scrollY > 12)
    f()
    addEventListener('scroll', f, { passive: true })
    return () => removeEventListener('scroll', f)
  }, [])
  return (
    <header className={`topo ${rolou ? 'rolou' : ''}`}>
      <div className="container">
        <Logo />
        <div className="topo-dir">
          {caso ? (
            <a className="voltar" href="#cases">← {t('todos os cases', 'all case studies')}</a>
          ) : (
            <nav className="menu" aria-label={t('Principal', 'Main')}>
              <a href="#cases">{t('cases', 'work')}</a>
              <a href="#sobre">{t('sobre', 'about')}</a>
              <a href="#contato">{t('contato', 'contact')}</a>
              <a href={CURRICULO}>{t('currículo', 'résumé')}</a>
            </nav>
          )}
          <Idioma />
        </div>
      </div>
    </header>
  )
}
