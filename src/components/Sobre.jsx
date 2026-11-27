import '../styles/sobre.css'
import Adesivo from './Adesivo.jsx'
import { img } from '../lib/asset.js'
import { useLang } from '../lib/i18n.jsx'

const s = (n) => img(`sobre/${n}`)

// Linhas de "binário" do canto: "Hello world" e um pouco de ruído
const BINARIO = [
  '01001000 01100101 01101100',
  '01101100 01101111 00100000',
  '01110111 01101111 01110010',
  '01101100 01100100 00100001',
  '01101101 01100001 01101001',
  '01110011 01100101 00100000',
  '01101101 01100001 01111001',
]

// Rabiscos feitos à mão, em SVG (decorativos)
const Rabisco = {
  coroa: (
    <svg viewBox="0 0 120 80"><path d="M10 66 L14 18 L38 44 L58 10 L78 44 L104 16 L108 66 Z M14 72 C40 70 80 70 108 72" /></svg>
  ),
  estrela: (
    <svg viewBox="0 0 100 100"><path d="M50 6 L61 38 L95 39 L67 59 L78 92 L50 72 L22 93 L33 60 L5 40 L39 38 Z M47 10 L58 40 L90 42" /></svg>
  ),
  coracao: (
    <svg viewBox="0 0 100 90"><path d="M50 84 C20 60 4 44 8 26 C12 8 38 4 50 26 C62 4 90 8 92 28 C95 46 78 62 50 84 Z M46 80 C24 60 10 46 13 29" /></svg>
  ),
  raios: (
    <svg viewBox="0 0 100 100"><path d="M20 70 L40 10 L46 62 Z M52 74 L88 30 L70 78 Z M58 92 L96 82 L60 100 Z" className="cheio" /></svg>
  ),
  brilho: (
    <svg viewBox="0 0 100 100"><path d="M50 4 C54 38 62 46 96 50 C62 54 54 62 50 96 C46 62 38 54 4 50 C38 46 46 38 50 4 Z" className="cheio" /></svg>
  ),
  seta: (
    <svg viewBox="0 0 120 140"><path d="M90 8 C120 50 104 104 30 126 M30 126 L52 104 M30 126 L56 134" /></svg>
  ),
  estrelinha: (
    <svg viewBox="0 0 100 100"><path d="M50 8 L60 40 L94 40 L66 60 L76 92 L50 72 L24 92 L34 60 L6 40 L40 40 Z" className="cheio" /></svg>
  ),
}

// Cursor em pixel art (grade 11 x 16)
const PIXELS = [
  'X..........', 'XX.........', 'XoX........', 'XooX.......', 'XoooX......', 'XooooX.....',
  'XoooooX....', 'XooooooX...', 'XoooooooX..', 'XooooooooX.', 'XoooooXXXXX', 'XooXooX....',
  'XoX.XooX...', 'XX..XooX...', 'X....XooX..', '.....XXX...',
]
function CursorPixel({ className }) {
  return (
    <svg className={className} viewBox="0 0 11 16" shapeRendering="crispEdges" aria-hidden="true">
      {PIXELS.flatMap((linha, y) =>
        [...linha].map((c, x) => c === '.' ? null : (
          <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill={c === 'X' ? '#2A1E22' : '#FFFFFF'} />
        )),
      )}
    </svg>
  )
}

const Pino = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="ico"><path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" /></svg>
)
const Pata = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="ico"><circle cx="5" cy="10" r="2.4" /><circle cx="9.5" cy="5.5" r="2.4" /><circle cx="14.5" cy="5.5" r="2.4" /><circle cx="19" cy="10" r="2.4" /><path d="M12 11c-3.5 0-6.5 4.2-6.5 6.6C5.5 19.5 7 20.5 9 20.5c1.3 0 2-.6 3-.6s1.7.6 3 .6c2 0 3.5-1 3.5-2.9 0-2.4-3-6.6-6.5-6.6z" /></svg>
)

export default function Sobre() {
  const { t } = useLang()
  return (
    <section className="colagem" id="sobre" aria-labelledby="titulo-sobre">
      {/* camada de decoração: não carrega informação */}
      <div className="col-deco" aria-hidden="true">
        <img className="d-banda claro" src={s('rasgo-claro.webp')} alt="" />
        <img className="d-banda magenta" src={s('rasgo-magenta.webp')} alt="" />
        <div className="d-grade" />
        <div className="d-xadrez a" />
        <div className="d-xadrez b" />
        <img className="d-pontos" src={img('pontos.png')} alt="" />
        <pre className="d-binario">{BINARIO.join('\n')}</pre>
        <ul className="d-pastas">
          {(t('pt', 'en') === 'pt' ? ['arte.md', 'gatos.md', 'projetos.md', 'vida.md'] : ['art.md', 'cats.md', 'projects.md', 'life.md']).map((p) => (
            <li key={p}><svg viewBox="0 0 32 26"><path d="M2 5h10l3 3h15v16H2z" /></svg>{p}</li>
          ))}
        </ul>
        <span className="rab coroa">{Rabisco.coroa}</span>
        <span className="rab estrela">{Rabisco.estrela}</span>
        <span className="rab coracao">{Rabisco.coracao}</span>
        <span className="rab raios">{Rabisco.raios}</span>
        <span className="rab brilho">{Rabisco.brilho}</span>
        <span className="rab seta">{Rabisco.seta}</span>
        <span className="rab estrelinha">{Rabisco.estrelinha}</span>
        <CursorPixel className="d-cursor a" />
        <CursorPixel className="d-cursor b" />
      </div>

      <div className="container col-grade">
        <figure className="col-retrato">
          <img src={s('maise-adesivo.webp')} alt={t('Foto de Maíse sorrindo, de roupa preta, recortada como adesivo.', 'Photo of Maíse smiling, dressed in black, cut out like a sticker.')} width="760" height="1097" />
        </figure>

        <div className="col-direita">
          <article className="janela" data-revela>
            <div className="janela-barra" aria-hidden="true">
              <span className="bolinhas"><i /><i /><i /></span>
              <span className="janela-nome">/ {t('sobre_mim.md', 'about_me.md')}</span>
              <span className="janela-botoes">— ▢ ✕</span>
            </div>
            <div className="janela-corpo">
              <h2 id="titulo-sobre">{t('Um pouco sobre mim', 'A little about me')} <span className="asterisco" aria-hidden="true">✱</span></h2>
              <p>
                {t('pt', 'en') === 'pt' ? (
                  <>Sempre fui da arte: <b>desenho</b>, toco <b>piano e violão</b>, faço <b>crochê</b> e me apaixono por qualquer coisa de artesanato (e por gatos). Na <b>Ciência da Computação</b>, descobri que tecnologia também é arte: criar algo humano, que as pessoas entendem e que resolve o que elas realmente precisam. É isso que eu busco em cada <b>interface</b>.</>
                ) : (
                  <>I’ve always been into art: I <b>draw</b>, play <b>piano and guitar</b>, <b>crochet</b> and fall for anything handmade (and for cats). In <b>Computer Science</b>, I found out technology is art too: making something human, that people understand and that solves what they actually need. That’s what I look for in every <b>interface</b>.</>
                )}
              </p>
            </div>
            <img className="janela-rasgo" src={s('janela-borda.webp')} alt="" aria-hidden="true" />
          </article>

          <div className="sobre-tags">
            <Adesivo giro={-3}>{t('piano · violão · crochê', 'piano · guitar · crochet')}</Adesivo>
            <Adesivo className="rosa" giro={3}><Pino /> RECIFE · PE</Adesivo>
            <Adesivo className="escura" giro={-4}><Pata /> {t('equipe de QA felina', 'feline QA team')}</Adesivo>
          </div>

          <div className="col-gatas">
            <figure className="gata mystra">
              <svg className="raios-gata" viewBox="0 0 60 60" aria-hidden="true"><path d="M2 34 L34 30 L34 37 Z M8 8 L36 25 L32 30 Z M30 0 L41 22 L35 24 Z" /></svg>
              <img src={s('mystra-adesivo.webp')} alt={t('Mystra, gata tricolor de olhos azuis, recortada como adesivo.', 'Mystra, a blue-eyed calico cat, cut out like a sticker.')} width="620" height="978" loading="lazy" />
              <figcaption className="nome">Mystra</figcaption>
            </figure>
            <figure className="gata maggie">
              <img src={s('maggie-adesivo.webp')} alt={t('Maggie, gata frajola de olhos amarelos, recortada como adesivo.', 'Maggie, a yellow-eyed tuxedo cat, cut out like a sticker.')} width="620" height="703" loading="lazy" />
              <figcaption className="nome">Maggie</figcaption>
            </figure>
          </div>
        </div>
      </div>

      <p className="psiu" aria-hidden="true"><span>{t('psiu:', 'psst:')}</span> {t('as etiquetas se mexem', 'the tags move')} <b>&gt;_</b></p>
    </section>
  )
}
