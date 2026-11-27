import WhiteLabelDemo from '../components/WhiteLabelDemo.jsx'
import CaseFooter from '../components/CaseFooter.jsx'
import CaseNav from '../components/CaseNav.jsx'
import CaseResumo from '../components/CaseResumo.jsx'
import TelasReais from '../components/TelasReais.jsx'
import Componentes from '../components/Componentes.jsx'
import { useLang } from '../lib/i18n.jsx'
import '../styles/ds.css'

// Arquitetura descrita em alto nível: sem código da empresa
const resumo = [
  { t: { pt: 'O problema', en: 'The problem' }, d: { pt: 'Sites da mesma empresa com visual, componentes e nomes diferentes. Retrabalho para o time e confusão para quem usava.', en: 'Sites from the same company with different looks, components and names. Rework for the team and confusion for users.' } },
  { t: { pt: 'O que eu fiz', en: 'What I did' }, d: { pt: 'Um Design System white label de ponta a ponta: escuta com o Suporte, protótipos no Figma, tokens e 22 componentes em Vue.', en: 'An end-to-end white label Design System: listening through Support, Figma prototypes, tokens and 22 Vue components.' } },
  { t: { pt: 'O resultado', en: 'The result' }, d: { pt: 'Todos os sites no mesmo padrão, com menos reclamações sobre a interface, menos retrabalho e menos bugs visuais.', en: 'Every site on the same standard, with fewer interface complaints, less rework and fewer visual bugs.' } },
]

const camadas = [
  { n: { pt: 'Tokens', en: 'Tokens' }, t: { pt: 'Fonte única', en: 'Single source' }, d: { pt: 'Cores, tipografia, raios e tempos definidos num só lugar. Para mudar a marca, troca-se um arquivo.', en: 'Colors, type, radii and timing defined in one place. Changing the brand means changing one file.' } },
  { n: { pt: 'Variáveis CSS', en: 'CSS variables' }, t: { pt: 'Aplicadas na página', en: 'Applied to the page' }, d: { pt: 'Os tokens viram variáveis na raiz da página e trocam sozinhas entre o tema claro e o escuro.', en: 'Tokens become variables at the page root and switch on their own between light and dark themes.' } },
  { n: { pt: 'Framework', en: 'Framework' }, t: { pt: 'Ponte com o Quasar', en: 'Bridge to Quasar' }, d: { pt: 'As cores e raios do Quasar apontam para as mesmas variáveis. Espaçamento, sombras e tipografia usam as classes nativas, sem reinventar.', en: 'Quasar’s colors and radii point to the same variables. Spacing, shadows and type use the native classes, no reinventing.' } },
  { n: { pt: 'Componentes', en: 'Components' }, t: { pt: 'Biblioteca App*', en: 'App* library' }, d: { pt: 'Cada componente recebe só uma intenção, como “primary” ou “negative”, e resolve a cor pelo token.', en: 'Each component only receives an intent, like “primary” or “negative”, and resolves the color through the token.' } },
]

const numeros = [
  { v: '22', r: { pt: 'componentes', en: 'components' } },
  { v: '6', r: { pt: 'grupos de fundamentos', en: 'foundation groups' } },
  { v: '2', r: { pt: 'temas, claro e escuro', en: 'themes, light and dark' } },
  { v: '5', r: { pt: 'telas de exemplo', en: 'example screens' } },
]

const codigo = [
  { t: { pt: 'Desenho que já nasce viável', en: 'Design that ships as drawn' }, d: { pt: 'Como eu também implemento, cada componente desenhado no Figma já levava em conta o que o Vue e o Quasar fazem bem. O espaçamento seguiu a escala do Quasar que o time já usava.', en: 'Because I also build, every component I drew in Figma already accounted for what Vue and Quasar do well. Spacing followed the Quasar scale the team already used.' } },
  { t: { pt: 'Sem perda no handoff', en: 'Nothing lost in handoff' }, d: { pt: 'Os 22 componentes validados no Figma com o Diretor de Tecnologia e o Suporte fui eu que construí em código. O que foi aprovado é o que foi para produção.', en: 'I built in code the same 22 components validated in Figma with the CTO and Support. What was approved is what shipped.' } },
  { t: { pt: 'Uma língua para design e dev', en: 'One language for design and dev' }, d: { pt: 'O style guide mostra a equivalência entre token, classe do Quasar e variável CSS, então quem desenha e quem desenvolve falam dos mesmos nomes.', en: 'The style guide maps each token to its Quasar class and CSS variable, so designers and developers use the same names.' } },
  { t: { pt: 'IA para escalar a aplicação', en: 'AI to scale the rollout' }, d: { pt: 'Com o padrão definido por mim, usei o Claude para refatorar as telas antigas para os novos componentes. Foi isso que levou o sistema a todos os sites em cerca de dois meses.', en: 'With the standard I defined, I used Claude to refactor the old screens into the new components. That is how the system reached every site in about two months.' } },
]

const decisoes = [
  { t: { pt: 'Nomes pelo papel, não pela cor', en: 'Names by role, not by color' }, d: { pt: 'Os tokens dizem para que servem: fundo de superfície, texto de apoio, borda sutil. Assim o tema escuro e a marca do cliente mudam o valor sem mudar o nome.', en: 'Tokens say what they’re for: surface background, supporting text, subtle border. That way the dark theme and the client’s brand change the value without changing the name.' } },
  { t: { pt: 'Aproveitar o framework', en: 'Build on the framework' }, d: { pt: 'O espaçamento segue a escala do Quasar, que o time já conhecia. Menos coisa nova para aprender, menos chance de cada um usar um valor diferente.', en: 'Spacing follows Quasar’s scale, which the team already knew. Less to learn, less chance of everyone using a different value.' } },
  { t: { pt: 'Intenção em vez de cor solta', en: 'Intent instead of loose colors' }, d: { pt: 'Os componentes aceitam “positive”, “warning” ou “negative”. Um alerta de erro é sempre vermelho em qualquer tela, sem ninguém escolher o tom.', en: 'Components accept “positive”, “warning” or “negative”. An error alert is always red on every screen, with no one picking the shade.' } },
  { t: { pt: 'Documentação que se usa', en: 'Documentation people use' }, d: { pt: 'O style guide é uma página viva, separada em Fundamentos, Componentes e Exemplos, com busca e a equivalência entre token, classe do Quasar e variável CSS.', en: 'The style guide is a living page, split into Foundations, Components and Examples, with search and the mapping between token, Quasar class and CSS variable.' } },
  { t: { pt: 'Acessibilidade no componente', en: 'Accessibility built in' }, d: { pt: 'Botões já saem com rótulo acessível, foco visível e estados de carregando e desabilitado, para o cuidado não depender de quem usa.', en: 'Buttons ship with an accessible label, visible focus and loading and disabled states, so care doesn’t depend on whoever uses them.' } },
]

export default function DesignSystem() {
  const { t } = useLang()
  return (
    <>
      <main id="conteudo" tabIndex={-1} className="ds">
        <div className="container">

          <div className="ds-topo">
            <div className="kicker">case 01 · design system · white label</div>
            <h1>{t('Um padrão para todos os sites', 'One standard for every site')}</h1>
            <p className="lead">{t('Unifiquei sites que tinham visual, componentes e nomes diferentes em um único Design System. Ele é white label: cada cliente aplica a cor da própria marca e o sistema inteiro acompanha, sem perder a coerência.', 'I unified sites with different looks, components and names into a single Design System. It’s white label: each client applies their own brand color and the whole system follows, staying consistent.')}</p>
          </div>

          <dl className="meta">
            <div><dt>{t('Papel', 'Role')}</dt><dd>{t('Design e implementação, de ponta a ponta', 'Design and implementation, end to end')}</dd></div>
            <div><dt>{t('Empresa', 'Company')}</dt><dd>DBX Tecnologia</dd></div>
            <div><dt>{t('Prazo', 'Timeline')}</dt><dd>{t('~1 mês para construir, ~2 para aplicar', '~1 month to build, ~2 to roll out')}</dd></div>
            <div><dt>{t('Ferramentas', 'Tools')}</dt><dd>Figma, Vue, Quasar, TypeScript</dd></div>
          </dl>

          <CaseResumo itens={resumo} />

          <section aria-labelledby="t-telas" data-revela>
            <h2 id="t-telas">{t('Telas reais do sistema', 'Real screens from the system')}</h2>
            <p className="lead ds-intro">{t('Exemplos do próprio style guide, montados só com peças do Design System. Troque de tela, de tema e de cor da marca.', 'Examples from the style guide itself, built only from Design System pieces. Switch screens, themes and brand color.')}</p>
            <TelasReais />
          </section>

          <div className="duas">
            <section aria-labelledby="t-problema" data-revela>
              <h2 id="t-problema">{t('O problema', 'The problem')}</h2>
              <p>{t('Cada site tinha um visual próprio. Sem padrão, o time criava componentes parecidos uns por cima dos outros, gerando retrabalho e bugs visuais. Para quem usava, um botão mudava de página para página e a mesma ação aparecia com nomes diferentes.', 'Each site had its own look. Without a standard, the team built similar components on top of each other, causing rework and visual bugs. For users, a button changed from page to page and the same action showed up under different names.')}</p>
            </section>
            <section aria-labelledby="t-usuarios" data-revela>
              <h2 id="t-usuarios">{t('Ouvindo os usuários', 'Listening to users')}</h2>
              <p>{t('Sem contato direto com os usuários finais, trabalhei com quem ouvia a voz deles todo dia: o time de Suporte. Agrupei reclamações e dúvidas para achar os padrões — inconsistência visual, nomenclatura confusa e dificuldade de encontrar as coisas — e ouvi os desenvolvedores, usuários internos do sistema.', 'Without direct access to end users, I worked with the people who heard them every day: the Support team. I grouped complaints and questions to find patterns — visual inconsistency, confusing naming and trouble finding things — and listened to developers, the system’s internal users.')}</p>
            </section>
          </div>

          <section aria-labelledby="t-processo" data-revela>
            <h2 id="t-processo">{t('Processo', 'Process')}</h2>
            <ol className="passos">
              <li>{t(<><b>Diagnóstico:</b> inventário dos componentes e padrões existentes, mapeando duplicações e inconsistências.</>, <><b>Audit:</b> an inventory of existing components and patterns, mapping duplicates and inconsistencies.</>)}</li>
              <li>{t(<><b>Protótipos no Figma</b> dos componentes e das telas principais, com a nova identidade.</>, <><b>Figma prototypes</b> of the components and main screens, with the new identity.</>)}</li>
              <li>{t(<><b>Validação em ciclos</b> com o Diretor de Tecnologia e o Suporte, que usava a aplicação o tempo todo, até chegar a um consenso.</>, <><b>Validation cycles</b> with the CTO and Support, who used the application all the time, until we reached consensus.</>)}</li>
              <li>{t(<><b>Construção</b> dos tokens e dos componentes em Vue com Quasar e TypeScript, documentados num style guide.</>, <><b>Building</b> the tokens and components in Vue with Quasar and TypeScript, documented in a style guide.</>)}</li>
              <li>{t(<><b>Aplicação</b> em todo o site, com apoio de IA para acelerar a refatoração.</>, <><b>Rollout</b> across the whole site, with AI helping speed up the refactor.</>)}</li>
            </ol>
          </section>

          <section aria-labelledby="t-codigo" data-revela>
            <h2 id="t-codigo">{t('Onde o código entra no meu design', 'Where code meets my design')}</h2>
            <p className="lead ds-intro">{t('Desenhei e implementei o sistema. Ter os dois lados na mesma pessoa mudou o resultado em quatro pontos.', 'I designed and built the system. Having both sides in one person changed the outcome in four ways.')}</p>
            <div className="decisoes decisoes-2">
              {codigo.map((d) => <div key={d.t.pt}><h3>{t(d.t)}</h3><p>{t(d.d)}</p></div>)}
            </div>
          </section>

          <section aria-labelledby="t-como" data-revela>
            <h2 id="t-como">{t('Como o sistema funciona', 'How the system works')}</h2>
            <p className="lead ds-intro">{t('Quatro camadas, cada uma lendo da anterior. A marca do cliente entra só na primeira.', 'Four layers, each reading from the one before. The client’s brand only enters at the first.')}</p>
            <ol className="camadas">
              {camadas.map((c) => (
                <li key={c.n.pt}>
                  <span className="camada-n">{t(c.n)}</span>
                  <b>{t(c.t)}</b>
                  <p>{t(c.d)}</p>
                </li>
              ))}
            </ol>
          </section>

          <section aria-labelledby="t-dentro" data-revela>
            <h2 id="t-dentro">{t('O que tem dentro', 'What’s inside')}</h2>
            <dl className="numeros">
              {numeros.map((n) => <div key={n.r.pt}><dt>{t(n.r)}</dt><dd>{n.v}</dd></div>)}
            </dl>
            <Componentes />
            <p className="ds-nota">{t('Os fundamentos cobrem cores, tipografia, espaçamento, bordas, sombras e tempos de transição. As telas de exemplo, como login, tabela de usuários e configurações, são montadas só com peças do sistema.', 'Foundations cover color, type, spacing, borders, shadows and transition timing. Example screens like login, user table and settings are built only from system pieces.')}</p>
          </section>

          <section aria-labelledby="t-decisoes" data-revela>
            <h2 id="t-decisoes">{t('Decisões', 'Decisions')}</h2>
            <div className="decisoes">
              {decisoes.map((d) => <div key={d.t.pt}><h3>{t(d.t)}</h3><p>{t(d.d)}</p></div>)}
            </div>
          </section>

          <section aria-labelledby="t-demo">
            <h2 id="t-demo">{t('O próximo passo, em protótipo', 'The next step, as a prototype')}</h2>
            <p className="lead ds-intro">{t('Hoje o cliente escolhe as cores e recebe a recomendação de usar um tom mais claro e cuidar do contraste. A ideia para o futuro é ele escolher uma cor só: a escala de tons, as cores de apoio e a cor do texto seriam geradas pelo sistema, sempre com contraste AA, e ele ainda poderia ajustar tudo se quisesse. Este protótipo mostra como seria.', 'Today clients pick their colors and get a recommendation to use a lighter shade and mind the contrast. The idea for the future is picking just one color: the tonal scale, supporting colors and text color would be generated by the system, always with AA contrast, and clients could still adjust everything. This prototype shows how it would work.')}</p>
            <WhiteLabelDemo />
          </section>

          <section aria-labelledby="t-resultado">
            <h2 id="t-resultado">{t('Resultado', 'Result')}</h2>
            <div className="duas">
              <p>{t('Todos os sites da empresa passaram a usar o mesmo Design System. As reclamações sobre a interface diminuíram, assim como o retrabalho e os bugs visuais, porque o time passou a usar componentes prontos e documentados.', 'All of the company’s sites now use the same Design System. Interface complaints went down, along with rework and visual bugs, because the team started using ready, documented components.')}</p>
              <p>{t(<><b>Para onde quero levar:</b> o cliente escolhe uma cor e o sistema gera o resto: escala de tons, cores de apoio e texto com contraste mínimo de 4,5:1. A personalização continua possível, mas deixa de ser obrigatória, e o cuidado com o contraste passa a ser do sistema, não de quem configura.</>, <><b>Where I want to take it:</b> the client picks one color and the system generates the rest: tonal scale, supporting colors and text with at least 4.5:1 contrast. Customizing stays possible but no longer required, and contrast becomes the system’s job, not the configurer’s.</>)}</p>
            </div>
            <p className="ds-fonte">{t('As telas são do style guide, com dados fictícios. O código é da empresa e não está aqui: o diagrama e o protótipo são recriações minhas.', 'Screens come from the style guide, with dummy data. The code belongs to the company and isn’t here: the diagram and prototype are my own recreations.')}</p>
          </section>
        </div>
      </main>
      <CaseNav />
      <CaseFooter id="design-system" className="rodape" />
    </>
  )
}
