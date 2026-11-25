import { img } from '../lib/asset.js'
import CaseFooter from '../components/CaseFooter.jsx'
import CaseNav from '../components/CaseNav.jsx'
import CaseResumo from '../components/CaseResumo.jsx'
import { useLang } from '../lib/i18n.jsx'
import '../styles/kibo.css'

const resumo = [
  { t: { pt: 'O problema', en: 'The problem' }, d: { pt: 'Pranchas de comunicação em papel se desgastam, e os apps de CAA completos costumam ser caros ou difíceis de configurar.', en: 'Paper communication boards wear out, and full-featured AAC apps tend to be expensive or hard to set up.' } },
  { t: { pt: 'O que eu fiz', en: 'What I did' }, d: { pt: 'Fui a principal desenvolvedora do front-end em React Native e depois redesenhei o app no Figma, com um Design System próprio.', en: 'I was the lead front-end developer in React Native, and later redesigned the app in Figma with its own Design System.' } },
  { t: { pt: 'A entrega', en: 'The outcome' }, d: { pt: 'App gratuito para Android e iOS, ajustável a cada pessoa, e a versão 2.0 prototipada com foco em acessibilidade e representatividade.', en: 'A free app for Android and iOS, adjustable to each person, plus a 2.0 prototype focused on accessibility and representation.' } },
]

export default function Kibo() {
  const { t } = useLang()
  return (
    <>
      <main id="conteudo" tabIndex={-1} className="kibo">
        <div className="container">

          <section className="k-hero" aria-labelledby="t-kibo">
            <div className="k-hero-texto">
              <span className="chip">case 02 · {t('acessibilidade', 'accessibility')} · mobile</span>
              <h1 id="t-kibo">{t('Kibo: comunicar sem precisar falar', 'Kibo: communicating without speaking')}</h1>
              <p className="lead">{t('Um app de Comunicação Aumentativa e Alternativa (CAA) para pessoas no espectro autista que se comunicam por imagens. Simples de usar, ajustável a cada pessoa e gratuito.', 'An Augmentative and Alternative Communication (AAC) app for autistic people who communicate through images. Simple to use, adjustable to each person, and free.')}</p>
            </div>
            <img src={img("kibo-abertura.png")} alt={t('Tela de abertura do Kibo, com o nome do app e uma ilustração amigável.', 'Kibo’s opening screen, with the app name and a friendly illustration.')} width="578" height="360" />
          </section>

          <CaseResumo itens={resumo} />

          <dl className="meta">
            <div><dt>{t('Meu papel', 'My role')}</dt><dd>{t('Principal desenvolvedora do front-end em React Native', 'Lead front-end developer in React Native')}</dd></div>
            <div><dt>{t('Contexto', 'Context')}</dt><dd>{t('Projeto de conclusão de curso, em equipe', 'Team graduation project')}</dd></div>
            <div><dt>{t('Plataforma', 'Platform')}</dt><dd>{t('Android e iOS', 'Android and iOS')}</dd></div>
            <div><dt>{t('Ferramentas', 'Tools')}</dt><dd>Figma, React Native, ARASAAC</dd></div>
          </dl>

          <section aria-labelledby="t-problema" data-revela>
            <h2 id="t-problema">{t('O problema', 'The problem')}</h2>
            <p className="lead">{t('As pranchas de comunicação em papel são limitadas e se desgastam, e os apps de CAA mais completos costumam ser caros ou difíceis de configurar. Para muitas famílias, isso significa ficar sem ferramenta.', 'Paper communication boards are limited and wear out, and the most complete AAC apps tend to be expensive or hard to set up. For many families, that means going without a tool.')}</p>
          </section>

          <section aria-labelledby="t-decisoes" data-revela>
            <h2 id="t-decisoes">{t('Decisões de design', 'Design decisions')}</h2>
            <div className="cartoes">
              <div className="cartao"><div className="ico azul" aria-hidden="true">1</div><h3>{t('Pouca carga cognitiva', 'Low cognitive load')}</h3><p>{t('Uma ação por tela, símbolos grandes e nada competindo pela atenção.', 'One action per screen, large symbols and nothing competing for attention.')}</p></div>
              <div className="cartao"><div className="ico verde" aria-hidden="true">2</div><h3>{t('Pictogramas conhecidos', 'Familiar pictograms')}</h3><p>{t('Símbolos da ARASAAC, já usados em escolas e terapias, para a pessoa não precisar aprender um vocabulário novo.', 'ARASAAC symbols, already used in schools and therapy, so people don’t have to learn a new vocabulary.')}</p></div>
              <div className="cartao"><div className="ico laranja" aria-hidden="true">3</div><h3>{t('Voz e toque', 'Voice and touch')}</h3><p>{t('Ao tocar, o símbolo é falado em voz alta e entra na frase, para quem está do outro lado entender.', 'Tapping a symbol speaks it aloud and adds it to the sentence, so the other person understands.')}</p></div>
            </div>
          </section>

          <section className="nova" aria-labelledby="t-nova">
            <div>
              <h2 id="t-nova">{t('A versão nova', 'The new version')}</h2>
              <p className="lead">{t('Redesenhei o Kibo no Figma, com um Design System próprio e foco em consistência, acessibilidade e representatividade.', 'I redesigned Kibo in Figma, with its own Design System and a focus on consistency, accessibility and representation.')}</p>
            </div>

            <figure className="tela">
              <img src={img("kibo-prancha.png")} alt={t('Prancha de comunicação do Kibo 2.0, com pictogramas organizados por categoria e a frase montada no topo.', 'Kibo 2.0 communication board, with pictograms organized by category and the sentence built at the top.')} width="1143" height="710" loading="lazy" />
              <figcaption><h3>{t('Prancha mais clara', 'A clearer board')}</h3><p>{t('Cada tipo de palavra tem sua cor e lugar fixo, a frase se monta no topo e o botão Falar é o maior da tela. As configurações ficam no modo adulto, protegidas.', 'Each word type has its own color and fixed place, the sentence builds at the top and the Speak button is the largest on screen. Settings live in a protected adult mode.')}</p></figcaption>
            </figure>

            <figure className="tela">
              <img src={img("kibo-perfil.png")} alt={t('Tela de perfil do Kibo 2.0, com opções para personalizar a pessoa usuária.', 'Kibo 2.0 profile screen, with options to personalize the user.')} width="1154" height="716" loading="lazy" />
              <figcaption><h3>{t('Feito para cada pessoa', 'Made for each person')}</h3><p>{t('Perfis com avatares diversos, para cada pessoa se ver no app e ter suas próprias pranchas.', 'Profiles with diverse avatars, so each person sees themselves in the app and has their own boards.')}</p></figcaption>
            </figure>

            <figure className="tela">
              <img src={img("kibo-acessibilidade.png")} alt={t('Tela de acessibilidade do Kibo 2.0, com ajustes de tamanho, contraste e voz.', 'Kibo 2.0 accessibility screen, with size, contrast and voice settings.')} width="1154" height="716" loading="lazy" />
              <figcaption><h3>{t('Ajustes de acessibilidade', 'Accessibility settings')}</h3><p>{t('Tamanho dos símbolos, contraste e voz ajustáveis, porque o que ajuda uma pessoa pode atrapalhar outra.', 'Adjustable symbol size, contrast and voice, because what helps one person can get in another’s way.')}</p></figcaption>
            </figure>

            <a className="botao-kibo" href="https://www.figma.com/design/KGJ4pSFEMnvJMK8Tnj2d7A/Kibo-%E2%80%94-Redesign--CAA--%C2%B7-Design-System---Prot%C3%B3tipo?node-id=0-1" target="_blank" rel="noreferrer">{t('Ver o projeto no Figma', 'View the project in Figma')} ↗<span className="sr-only">{t(' (abre em nova aba)', ' (opens in a new tab)')}</span></a>
          </section>

          <p className="credito">{t('Pictogramas: Sergio Palao, ARASAAC (arasaac.org), licença CC BY-NC-SA, Governo de Aragão.', 'Pictograms: Sergio Palao, ARASAAC (arasaac.org), CC BY-NC-SA license, Government of Aragon.')}</p>
        </div>
      </main>
      <CaseNav />
      <CaseFooter id="kibo" className="rodape" />
    </>
  )
}
