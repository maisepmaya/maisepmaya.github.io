import { useEffect, useState } from 'react'
import { useLang } from '../lib/i18n.jsx'

// Barra de progresso de leitura + botão "sumário" que lista as seções do case.
export default function CaseNav() {
  const { lang, t } = useLang()
  const [progresso, setProgresso] = useState(0)
  const [aberto, setAberto] = useState(false)
  const [secoes, setSecoes] = useState([])
  const [atual, setAtual] = useState('')

  useEffect(() => {
    const hs = [...document.querySelectorAll('main h2[id]')]
    setSecoes(hs.map((h) => ({ id: h.id, t: h.textContent })))
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - innerHeight
      setProgresso(max > 0 ? scrollY / max : 0)
      let ativo = ''
      for (const h of hs) if (h.getBoundingClientRect().top < innerHeight * 0.35) ativo = h.id
      setAtual(ativo)
    }
    onScroll()
    addEventListener('scroll', onScroll, { passive: true })
    return () => removeEventListener('scroll', onScroll)
  }, [lang])

  useEffect(() => {
    if (!aberto) return
    const esc = (e) => e.key === 'Escape' && setAberto(false)
    addEventListener('keydown', esc)
    return () => removeEventListener('keydown', esc)
  }, [aberto])

  const ir = (id) => (e) => {
    e.preventDefault()
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' })
    setAberto(false)
  }

  return (
    <>
      <div className="progresso" style={{ transform: `scaleX(${progresso})` }} aria-hidden="true" />
      <nav className={`sumario ${aberto ? 'aberto' : ''} ${progresso < 0.04 && !aberto ? 'oculto' : ''}`} aria-label={t('Sumário do case', 'Case study contents')}>
        {aberto && (
          <ol id="sumario-lista">
            {secoes.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} onClick={ir(s.id)} aria-current={atual === s.id ? 'true' : undefined}>{s.t}</a>
              </li>
            ))}
          </ol>
        )}
        <button type="button" aria-expanded={aberto} aria-controls="sumario-lista" onClick={() => setAberto((a) => !a)}>
          {aberto ? t('fechar ×', 'close ×') : `${t('sumário', 'contents')} · ${Math.round(progresso * 100)}%`}
        </button>
      </nav>
    </>
  )
}
