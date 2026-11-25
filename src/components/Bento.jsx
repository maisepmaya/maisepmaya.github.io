import { cases } from '../data/cases.js'
import { img } from '../lib/asset.js'
import { useLang } from '../lib/i18n.jsx'

const porId = Object.fromEntries(cases.map((c) => [c.id, c]))

// Capa do Design System: uma mini-interface que troca de marca ao passar o mouse
function CapaDS() {
  return (
    <div className="mini-ui" aria-hidden="true">
      <div className="mini-barra"><i /><i /><i /></div>
      <div className="mini-corpo">
        <span className="mini-titulo" />
        <span className="mini-linha" />
        <span className="mini-linha curta" />
        <div className="mini-acoes"><span className="mini-btn" /><span className="mini-btn vazado" /></div>
        <div className="mini-chips"><span /><span /><span /></div>
      </div>
      <div className="mini-paleta"><span /><span /><span /><span /><span /></div>
    </div>
  )
}

function Tile({ c, className, children }) {
  const { t } = useLang()
  return (
    <a className={`tile tile-case ${className}`} href={`#${c.id}`} data-revela>
      <div className="tile-capa" aria-hidden="true">{children}</div>
      <div className="tile-corpo">
        <span className="rotulo">{t(c.rotulo)}</span>
        <h3>{t(c.titulo)}</h3>
        <p>{t(c.resumo)}</p>
        <span className="tile-seta" aria-hidden="true">{t('ver case', 'view case')} →</span>
      </div>
    </a>
  )
}

export default function Bento() {
  const { t } = useLang()
  return (
    <div className="bento">
      <Tile c={porId['design-system']} className="t-ds"><CapaDS /></Tile>
      <Tile c={porId.kibo} className="t-kibo">
        <img src={img('kibo-prancha.png')} alt="" loading="lazy" />
      </Tile>
      <Tile c={porId.hordamaster} className="t-horda">
        <img src={img('horda/home.webp')} alt="" loading="lazy" />
      </Tile>
      <div className="tile t-anos" data-revela>
        <span className="anos-num">4+</span>
        <p>{t('anos entre o Figma e o código, desenhando e construindo as mesmas interfaces.', 'years between Figma and code, designing and building the same interfaces.')}</p>
      </div>
      <div className="tile t-a11y" data-revela>
        <span className="rotulo">{t('acessibilidade', 'accessibility')}</span>
        <p>{t('Contraste, foco visível e leitores de tela pensados desde o primeiro rascunho, não no fim.', 'Contrast, visible focus and screen readers considered from the first sketch, not at the end.')}</p>
        <span className="a11y-selo" aria-hidden="true">AA</span>
      </div>
    </div>
  )
}
