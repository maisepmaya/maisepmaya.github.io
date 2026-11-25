import Bento from '../components/Bento.jsx'
import HalftoneStar from '../components/HalftoneStar.jsx'
import Faixa from '../components/Faixa.jsx'
import Sobre from '../components/Sobre.jsx'
import CopiarEmail from '../components/CopiarEmail.jsx'
import { img, CURRICULO } from '../lib/asset.js'
import { useLang } from '../lib/i18n.jsx'

const contatos = [
  { href: 'https://www.linkedin.com/in/maisemaya/', texto: 'linkedin.com/in/maisemaya' },
  { href: 'https://github.com/maisepmaya', texto: 'github.com/maisepmaya' },
]


export default function Home() {
  const { t } = useLang()
  return (
    <>
      <main id="conteudo" tabIndex={-1}>
        <section className="hero" aria-labelledby="titulo">
          <img className="hero-pontos" src={img('pontos.png')} alt="" aria-hidden="true" />
          <div className="container">
            <div className="hero-texto">
              <div className="rotulo">// product designer · ux/ui · recife</div>
              <h1 id="titulo">
                {t('Desenho produtos que ', 'I design products ')}<b className="marca-texto">{t('ninguém precisa pensar', 'nobody has to think')}</b>{t(' para usar', ' about using')}<span className="ponto">.</span>
              </h1>
              <p>
                {t('Mais de 4 anos entre o Figma e o código. Criei o Design System white label da DBX Tecnologia e levo acessibilidade a sério do primeiro rascunho à entrega.',
                  'Over 4 years between Figma and code. I created the white label Design System at DBX Tecnologia and take accessibility seriously from the first sketch to delivery.')}
              </p>
              <div className="acoes">
                <a className="botao cheio" href="#cases">{t('VER CASES', 'SEE MY WORK')}</a>
                <a className="botao vazado" href="#contato">{t('FALAR COMIGO', 'GET IN TOUCH')}</a>
              </div>
            </div>
            <div className="hero-arte">
              <HalftoneStar />
              <span className="etiqueta adesivo-rosa" aria-hidden="true">&lt;/design&gt;</span>
              <span className="h-mais" aria-hidden="true" />
              <pre className="h-bin" aria-hidden="true">{'01001000\n01101001\n01101100\n01101100\n01101111'}</pre>
              <svg className="h-raios" viewBox="0 0 80 70" aria-hidden="true"><path d="M8 52 L22 6 M30 58 L62 22 M40 66 L78 54" /></svg>
              <svg className="h-estrela" viewBox="0 0 100 100" aria-hidden="true"><path d="M50 6 L61 38 L95 39 L67 59 L78 92 L50 72 L22 93 L33 60 L5 40 L39 38 Z M47 10 L58 40 L90 42" /></svg>
              <span className="dica" aria-hidden="true">↑ <u>{t('mexa na estrela', 'play with the star')}</u> <i /></span>
            </div>
          </div>
        </section>

        <Faixa />

        <section className="secao" id="cases" aria-labelledby="titulo-cases">
          <div className="container">
            <div className="rotulo" data-revela>// cases</div>
            <h2 id="titulo-cases"><span className="leve">{t('Trabalhos ', 'Selected ')}</span>{t('selecionados', 'work')}</h2>
            <p className="intro">{t('Cada case tem a cara do próprio projeto. A moldura é minha; o miolo é de quem vai usar.', 'Each case study looks like its own project. The frame is mine; the inside belongs to the people who use it.')}</p>
            <Bento />
          </div>
        </section>

        <Sobre />

        <section className="secao contato" id="contato" aria-labelledby="titulo-contato">
          <div className="container">
            <div>
              <div className="rotulo">// {t('contato', 'contact')}</div>
              <h2 id="titulo-contato"><span className="leve">{t('Vamos ', "Let's ")}</span>{t('conversar?', 'talk?')}</h2>
              <CopiarEmail />
              <div className="contato-links">
                {contatos.map((c) => <a key={c.href} href={c.href} target="_blank" rel="noreferrer">{c.texto} <span aria-hidden="true">↗</span><span className="sr-only">{t(' (abre em nova aba)', ' (opens in a new tab)')}</span></a>)}
              </div>
            </div>
            <img className="contato-arte" src={img('nota-pontos.png')} alt="" aria-hidden="true" />
            <div className="contato-cv">
              <a className="botao-cv" href={CURRICULO}>{t('BAIXAR CURRÍCULO', 'DOWNLOAD RÉSUMÉ')} <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v12M6 11l6 6 6-6M5 21h14" /></svg></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="rodape escuro">
        <div className="container">
          <span>Maíse Perini Maya · Product Designer UX/UI</span>
          <span>{t('feito à mão, em React', 'handmade, in React')}</span>
        </div>
      </footer>
    </>
  )
}
