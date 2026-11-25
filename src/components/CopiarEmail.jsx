import { useState } from 'react'
import { useLang } from '../lib/i18n.jsx'

const EMAIL = 'maisepmaya@gmail.com'

export default function CopiarEmail() {
  const { t } = useLang()
  const [aviso, setAviso] = useState('')

  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setAviso(t('e-mail copiado ✓', 'email copied ✓'))
    } catch {
      setAviso(t('não consegui copiar, mas ele está aqui: ', "couldn't copy, but here it is: ") + EMAIL)
    }
    setTimeout(() => setAviso(''), 2600)
  }

  return (
    <div className="email-bloco">
      <button type="button" className="email-grande" onClick={copiar} aria-label={t(`Copiar o e-mail ${EMAIL}`, `Copy the email ${EMAIL}`)}>
        <span>{EMAIL}</span>
        <span className="email-acao" aria-hidden="true">{t('copiar', 'copy')} <svg viewBox="0 0 24 24"><rect x="3" y="3" width="12" height="12" rx="1" /><rect x="9" y="9" width="12" height="12" rx="1" /></svg></span>
      </button>
      <p className="email-aviso" aria-live="polite">{aviso}</p>
    </div>
  )
}
