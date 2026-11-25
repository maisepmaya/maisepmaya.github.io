import { useState } from 'react'
import { img } from '../lib/asset.js'
import { useLang } from '../lib/i18n.jsx'

// Clique num componente para ver como ele é no style guide de verdade.
const LISTA = [
  ['botao', { pt: 'Botão', en: 'Button' }], ['input', 'Input'], ['textarea', 'Textarea'], ['select', 'Select'],
  ['checkbox', 'Checkbox'], ['radio', 'Radio'], ['switch', 'Switch'], ['badge', 'Badge'],
  ['tag', 'Tag'], ['avatar', 'Avatar'], ['alerta', { pt: 'Alerta', en: 'Alert' }], ['icone', { pt: 'Ícone', en: 'Icon' }],
  ['progress', 'Progress bar'], ['statcard', 'Stat card'], ['modal', 'Modal'], ['abas', { pt: 'Abas', en: 'Tabs' }],
  ['stepper', 'Stepper'], ['breadcrumb', 'Breadcrumb'], ['paginacao', { pt: 'Paginação', en: 'Pagination' }],
  ['carrossel', { pt: 'Carrossel', en: 'Carousel' }], ['card', 'Card'], ['tabela', { pt: 'Tabela', en: 'Table' }],
]

export default function Componentes() {
  const { t } = useLang()
  const [atual, setAtual] = useState('botao')
  const [tema, setTema] = useState('claro')
  const nome = t(LISTA.find(([id]) => id === atual)[1])

  return (
    <div className="comp">
      <div className="comp-topo">
        <ul className="inventario" aria-label={t('Componentes da biblioteca: escolha um para ver', 'Library components: pick one to see it')}>
          {LISTA.map(([id, n]) => (
            <li key={id}>
              <button type="button" aria-pressed={atual === id} aria-controls="comp-palco" onClick={() => setAtual(id)}>
                {t(n)}
              </button>
            </li>
          ))}
        </ul>
        <div className="tema" role="group" aria-label={t('Tema da prévia', 'Preview theme')}>
          {['claro', 'escuro'].map((tm) => (
            <button key={tm} type="button" aria-pressed={tema === tm} onClick={() => setTema(tm)}>
              {tm === 'claro' ? t('Claro', 'Light') : t('Escuro', 'Dark')}
            </button>
          ))}
        </div>
      </div>
      <div id="comp-palco" className={`comp-palco ${tema}`} aria-live="polite">
        <img
          key={`${atual}-${tema}`}
          onLoad={(e) => { e.currentTarget.style.width = `${Math.round(e.currentTarget.naturalWidth / 1.5)}px` }} src={img(`ds/comp/${atual}-${tema}.webp`)} alt={t(`${nome} no style guide, tema ${tema}.`, `${nome} in the style guide, ${tema === 'claro' ? 'light' : 'dark'} theme.`)} />
      </div>
      <p className="comp-legenda"><b>{nome}</b> · {t('print do style guide, com dados de exemplo', 'screenshot from the style guide, with sample data')}</p>
    </div>
  )
}
