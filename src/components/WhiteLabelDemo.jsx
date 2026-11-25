import { useMemo, useState } from 'react'
import { useLang } from '../lib/i18n.jsx'
import { scale, rgbToHex, contrast, bestText, mix, WHITE, BLACK } from '../lib/color.js'

const PRESETS = [
  { nome: { pt: 'Índigo', en: 'Indigo' }, cor: '#4A49A8' },
  { nome: { pt: 'Verde', en: 'Green' }, cor: '#1F8A70' },
  { nome: { pt: 'Amarelo', en: 'Yellow' }, cor: '#F2B705' },
  { nome: { pt: 'Laranja', en: 'Orange' }, cor: '#E4572E' },
]

// Primeiro tom da escala que tem contraste AA (4,5:1) sobre o fundo
function textoLegivel(fundo, tons, tema) {
  const ordem = tema === 'claro' ? ['500', '600', '700', '800'] : ['500', '400', '300', '200', '100']
  const tom = ordem.find((k) => contrast(tons[k], fundo) >= 4.5)
  return tom ? tons[tom] : tema === 'claro' ? BLACK : WHITE
}

export default function WhiteLabelDemo() {
  const [cor, setCor] = useState(PRESETS[0].cor)
  const { t, lang } = useLang()
  const [tema, setTema] = useState('claro')

  const { tons, vars, razao } = useMemo(() => {
    const tons = scale(cor)
    const claro = tema === 'claro'
    const sup = claro ? [250, 250, 252] : [34, 34, 44]
    const sobre = bestText(tons['500'])
    return {
      tons,
      razao: contrast(tons['500'], sobre),
      vars: {
        '--fundo': claro ? '#FFFFFF' : '#181820',
        '--superficie': rgbToHex(sup),
        '--borda': claro ? '#DADAE3' : '#3A3A4A',
        '--texto-palco': claro ? '#16161D' : '#F2F2F7',
        '--texto-suave': claro ? '#4E4E5C' : '#B8B8C8',
        '--c500': rgbToHex(tons['500']),
        '--sobre500': rgbToHex(sobre),
        '--c500-texto': rgbToHex(textoLegivel(sup, tons, tema)),
        '--c-suave': rgbToHex(claro ? tons['50'] : mix(tons['800'], BLACK, 0.3)),
        '--c-forte': rgbToHex(claro ? tons['800'] : tons['100']),
      },
    }
  }, [cor, tema])

  const passa = razao >= 4.5

  return (
    <div className="demo">
      <div className="demo-controles">
        <label htmlFor="cor">{t('Cor do cliente', 'Client color')}</label>
        <input id="cor" type="color" value={cor} onChange={(e) => setCor(e.target.value.toUpperCase())} />
        <div className="presets" role="group" aria-label={t('Cores de exemplo', 'Sample colors')}>
          {PRESETS.map((p) => (
            <button
              key={p.cor} type="button" aria-label={t(p.nome)}
              aria-pressed={cor === p.cor} style={{ background: p.cor }}
              onClick={() => setCor(p.cor)}
            />
          ))}
        </div>
        <div className="tema" role="group" aria-label={t('Tema', 'Theme')}>
          {['claro', 'escuro'].map((tm) => (
            <button key={tm} type="button" aria-pressed={tema === tm} onClick={() => setTema(tm)}>
              {tm === 'claro' ? t('Claro', 'Light') : t('Escuro', 'Dark')}
            </button>
          ))}
        </div>
      </div>

      <div className="escala" aria-label={t('Escala de tons gerada', 'Generated tonal scale')}>
        {Object.entries(tons).map(([k, c]) => (
          <div key={k} style={{ background: rgbToHex(c), color: rgbToHex(bestText(c)) }}>
            <b>{k}</b>{rgbToHex(c)}
          </div>
        ))}
      </div>

      <div className="palco" style={vars}>
        <div className="cartao">
          <h3>{t('Novo pedido', 'New order')}</h3>
          <p>{t('Os componentes leem os tokens, não a cor fixa.', 'Components read the tokens, not a fixed color.')}</p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <button className="btn prim" type="button">{t('Confirmar', 'Confirm')}</button>
            <button className="btn sec" type="button">{t('Cancelar', 'Cancel')}</button>
          </div>
          <span className={`selo ${passa ? 'ok' : 'ruim'}`} aria-live="polite">
            {t('texto do botão', 'button text')}: {lang === 'pt' ? razao.toFixed(1).replace('.', ',') : razao.toFixed(1)}:1 {passa ? '✓ AA' : t('— abaixo de AA', '— below AA')}
          </span>
        </div>
        <div className="cartao">
          <div className="alerta">{t('Seu perfil foi atualizado.', 'Your profile was updated.')}</div>
          <label className="campo">
            {t('Nome do cliente', 'Client name')}
            <input type="text" defaultValue={t('Loja Exemplo', 'Sample Store')} />
          </label>
        </div>
      </div>
    </div>
  )
}
