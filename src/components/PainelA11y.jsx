import { useEffect, useRef, useState } from 'react'
import { useA11y, PADRAO } from '../lib/a11y.jsx'
import { useLang } from '../lib/i18n.jsx'

// Ícones simples, traço de 2px
const I = {
  pessoa: <svg viewBox="0 0 24 24"><circle cx="12" cy="4.5" r="2" /><path d="M4 8.5l8 1.5 8-1.5M12 10v5m0 0l-3.5 6.5M12 15l3.5 6.5" /></svg>,
  contraste: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5" /><path d="M12 3.5v17a8.5 8.5 0 0 0 0-17z" className="cheio" /></svg>,
  pausa: <svg viewBox="0 0 24 24"><rect x="6" y="5" width="4" height="14" rx="1" /><rect x="14" y="5" width="4" height="14" rx="1" /></svg>,
  fonte: <svg viewBox="0 0 24 24"><path d="M4 19L9.5 5h1L16 19M6.3 14h7.4M17 19v-6.5a2.5 2.5 0 0 1 5 0V19" /></svg>,
  link: <svg viewBox="0 0 24 24"><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" /></svg>,
  espaco: <svg viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h10M20 15v6m-2-2l2 2 2-2" /></svg>,
  regua: <svg viewBox="0 0 24 24"><rect x="2.5" y="9" width="19" height="6" rx="1" /><path d="M6 9v2.5M9.5 9v3.5M13 9v2.5M16.5 9v3.5" /></svg>,
  fechar: <svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18" /></svg>,
}

function Opcao({ id, icone, titulo, desc, ativo, onClick }) {
  return (
    <button type="button" className={`a11y-op ${ativo ? 'on' : ''}`} role="switch" aria-checked={ativo} onClick={onClick} id={id}>
      <span className="a11y-ico" aria-hidden="true">{icone}</span>
      <span className="a11y-txt"><b>{titulo}</b><small>{desc}</small></span>
      <span className="a11y-chave" aria-hidden="true"><i /></span>
    </button>
  )
}

export default function PainelA11y() {
  const { prefs, set, reset } = useA11y()
  const { lang, setLang, t } = useLang()
  const [aberto, setAberto] = useState(false)
  const [aviso, setAviso] = useState('')
  const botao = useRef(null)
  const painel = useRef(null)
  const ativos = Object.keys(PADRAO).filter((k) => k !== 'texto' && prefs[k]).length

  useEffect(() => {
    if (!aberto) return
    painel.current?.querySelector('button, [tabindex]')?.focus()
    const tecla = (e) => {
      if (e.key === 'Escape') { setAberto(false); botao.current?.focus() }
      if (e.key === 'Tab' && painel.current) {
        const f = [...painel.current.querySelectorAll('button')]
        if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f.at(-1).focus() }
        else if (!e.shiftKey && document.activeElement === f.at(-1)) { e.preventDefault(); f[0].focus() }
      }
    }
    const fora = (e) => { if (!painel.current?.contains(e.target) && !botao.current?.contains(e.target)) setAberto(false) }
    addEventListener('keydown', tecla)
    addEventListener('pointerdown', fora)
    return () => { removeEventListener('keydown', tecla); removeEventListener('pointerdown', fora) }
  }, [aberto])

  // régua de leitura: faixa que acompanha o ponteiro
  useEffect(() => {
    if (!prefs.regua) return
    const r = document.createElement('div')
    r.className = 'regua-leitura'
    r.setAttribute('aria-hidden', 'true')
    document.body.appendChild(r)
    const mover = (e) => { r.style.transform = `translateY(${e.clientY - 22}px)` }
    addEventListener('pointermove', mover)
    return () => { removeEventListener('pointermove', mover); r.remove() }
  }, [prefs.regua])

  const alternar = (k, nome) => () => {
    const v = !prefs[k]
    set(k, v)
    setAviso(`${nome}: ${v ? t('ligado', 'on') : t('desligado', 'off')}`)
  }

  const tamanhos = [t('Normal', 'Normal'), t('Maior', 'Larger'), t('Bem maior', 'Largest')]

  return (
    <div className="a11y">
      {aberto && (
        <div className="a11y-painel" ref={painel} role="dialog" aria-modal="false" aria-labelledby="a11y-titulo">
          <div className="a11y-topo">
            <h2 id="a11y-titulo">{t('Do seu jeito', 'Your way')}</h2>
            <button type="button" className="a11y-reset" onClick={() => { reset(); setAviso(t('Tudo voltou ao padrão', 'Back to default')) }} disabled={ativos === 0 && prefs.texto === 0}>
              {t('Restaurar', 'Reset')}
            </button>
            <button type="button" className="a11y-x" onClick={() => { setAberto(false); botao.current?.focus() }} aria-label={t('Fechar painel', 'Close panel')}>{I.fechar}</button>
          </div>
          <p className="a11y-sub">{t('Ajustes ficam salvos neste navegador.', 'Settings are saved in this browser.')}</p>

          <div className="a11y-grupo" role="group" aria-labelledby="a11y-idioma">
            <span id="a11y-idioma" className="a11y-rot">{t('Idioma', 'Language')}</span>
            <div className="a11y-seg">
              <button type="button" aria-pressed={lang === 'pt'} onClick={() => setLang('pt')} lang="pt-BR">Português</button>
              <button type="button" aria-pressed={lang === 'en'} onClick={() => setLang('en')} lang="en">English</button>
            </div>
          </div>

          <div className="a11y-grupo" role="group" aria-labelledby="a11y-tam">
            <span id="a11y-tam" className="a11y-rot">{t('Tamanho do texto', 'Text size')}</span>
            <div className="a11y-seg tam">
              {tamanhos.map((n, i) => (
                <button key={i} type="button" aria-pressed={prefs.texto === i} onClick={() => set('texto', i)} aria-label={n}>
                  <span style={{ fontSize: 14 + i * 4 }}>A</span>
                </button>
              ))}
            </div>
          </div>

          <div className="a11y-lista">
            <Opcao id="op-contraste" icone={I.contraste} ativo={prefs.contraste} onClick={alternar('contraste', t('Alto contraste', 'High contrast'))}
              titulo={t('Alto contraste', 'High contrast')} desc={t('Cores mais fortes e menos enfeites', 'Stronger colors, fewer decorations')} />
            <Opcao id="op-calmo" icone={I.pausa} ativo={prefs.calmo} onClick={alternar('calmo', t('Pausar animações', 'Pause animations'))}
              titulo={t('Pausar animações', 'Pause animations')} desc={t('Tudo parado, sem movimento', 'Everything still, no motion')} />
            <Opcao id="op-legivel" icone={I.fonte} ativo={prefs.legivel} onClick={alternar('legivel', t('Fonte legível', 'Readable font'))}
              titulo={t('Fonte legível', 'Readable font')} desc={t('Atkinson Hyperlegible em tudo', 'Atkinson Hyperlegible everywhere')} />
            <Opcao id="op-espaco" icone={I.espaco} ativo={prefs.espaco} onClick={alternar('espaco', t('Mais espaçamento', 'More spacing'))}
              titulo={t('Mais espaçamento', 'More spacing')} desc={t('Entre linhas, letras e palavras', 'Between lines, letters and words')} />
            <Opcao id="op-links" icone={I.link} ativo={prefs.links} onClick={alternar('links', t('Destacar links', 'Highlight links'))}
              titulo={t('Destacar links', 'Highlight links')} desc={t('Links e botões bem marcados', 'Links and buttons clearly marked')} />
            <Opcao id="op-regua" icone={I.regua} ativo={prefs.regua} onClick={alternar('regua', t('Régua de leitura', 'Reading guide'))}
              titulo={t('Régua de leitura', 'Reading guide')} desc={t('Uma faixa acompanha o cursor', 'A band follows your pointer')} />
          </div>

          <p className="sr-only" aria-live="polite">{aviso}</p>
        </div>
      )}

      <button
        ref={botao}
        type="button"
        className={`a11y-botao ${aberto ? 'aberto' : ''}`}
        aria-expanded={aberto}
        aria-haspopup="dialog"
        onClick={() => setAberto((a) => !a)}
        aria-label={t('Acessibilidade e idioma', 'Accessibility and language')}
      >
        <span className="a11y-botao-ico" aria-hidden="true">{I.pessoa}</span>
        <span className="a11y-botao-txt" aria-hidden="true">{lang === 'pt' ? 'PT' : 'EN'}</span>
        {ativos + (prefs.texto ? 1 : 0) > 0 && <span className="a11y-conta" aria-hidden="true">{ativos + (prefs.texto ? 1 : 0)}</span>}
      </button>
    </div>
  )
}
