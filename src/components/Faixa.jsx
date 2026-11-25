import { useLang } from '../lib/i18n.jsx'

// Faixa que corre na horizontal com o que eu faço. Para ao passar o mouse.
const ITENS = {
  pt: ['design systems', 'acessibilidade', 'figma ↔ código', 'pesquisa com o suporte', 'react', 'vue', 'white label', 'prototipação'],
  en: ['design systems', 'accessibility', 'figma ↔ code', 'research with support teams', 'react', 'vue', 'white label', 'prototyping'],
}

export default function Faixa() {
  const { lang } = useLang()
  const itens = ITENS[lang]
  const linha = itens.map((i) => <span key={i}>{i}<b aria-hidden="true">✦</b></span>)
  return (
    <div className="faixa">
      <p className="sr-only">{itens.join(', ')}</p>
      <div className="faixa-trilho" aria-hidden="true">
        <div>{linha}</div>
        <div>{linha}</div>
      </div>
    </div>
  )
}
