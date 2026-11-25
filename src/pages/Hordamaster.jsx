import CaseFooter from '../components/CaseFooter.jsx'
import CaseNav from '../components/CaseNav.jsx'
import CaseResumo from '../components/CaseResumo.jsx'
import { img } from '../lib/asset.js'
import { useLang } from '../lib/i18n.jsx'
import '../styles/horda.css'

const h = (n) => img(`horda/${n}`)
const DEMO = 'https://maisepmaya.github.io/front-end-avancado-pucrio/'
const REPO = 'https://github.com/maisepmaya/front-end-avancado-pucrio'

const resumo = [
  { t: { pt: 'O problema', en: 'The problem' }, d: { pt: 'Num combate contra uma horda, o mestre de RPG precisa saber a cada turno quem é quem, quanta vida resta e quem caiu. Na prática, isso vira papel rabiscado e conta de cabeça.', en: 'In a fight against a horde, the game master has to know every turn who is who, how much health is left and who went down. In practice, that means scribbled paper and mental math.' } },
  { t: { pt: 'O que eu fiz', en: 'What I did' }, d: { pt: 'Projeto individual: product design, todas as ilustrações da interface, UI e front-end em React. Feito na pós-graduação da PUC-Rio.', en: 'Solo project: product design, every interface illustration, UI and React front-end. Built during my graduate program at PUC-Rio.' } },
  { t: { pt: 'O resultado', en: 'The result' }, d: { pt: 'Uma mesa de combate que mostra o estado da luta de relance, avaliada pelo professor como de boa usabilidade, com navegação intuitiva e layout limpo.', en: 'A combat table that shows the state of the fight at a glance, rated by the professor as highly usable, with intuitive navigation and a clean layout.' } },
]

const precisa = [
  { t: { pt: 'Preparar', en: 'Prepare' }, d: { pt: 'Criar o inimigo uma vez e reaproveitar: uma ficha vira várias cópias.', en: 'Create an enemy once and reuse it: one sheet becomes many copies.' } },
  { t: { pt: 'Distinguir', en: 'Distinguish' }, d: { pt: 'Saber na hora qual é qual entre cópias iguais: Goblin 1, Goblin 2, Goblin 3.', en: 'Tell identical copies apart instantly: Goblin 1, Goblin 2, Goblin 3.' } },
  { t: { pt: 'Atualizar', en: 'Update' }, d: { pt: 'Mudar a vida em um ou dois toques, sem perder o fio da narrativa.', en: 'Change health in one or two taps, without losing the thread of the story.' } },
  { t: { pt: 'Mostrar', en: 'Show' }, d: { pt: 'Ver de relance quem está de pé e quem já foi derrotado.', en: 'See at a glance who is standing and who is down.' } },
]

const paleta = [
  [{ pt: 'Madeira escura', en: 'Dark wood' }, '#29160D'], [{ pt: 'Madeira', en: 'Wood' }, '#82583F'], [{ pt: 'Pergaminho', en: 'Parchment' }, '#FDE6D6'],
  [{ pt: 'Estandarte', en: 'Banner' }, '#2D6856'], [{ pt: 'Botão', en: 'Button' }, '#B0402F'], [{ pt: 'd20', en: 'd20' }, '#B5A52A'],
]

export default function Hordamaster() {
  const { t } = useLang()
  const novaAba = <span className="sr-only">{t(' (abre em nova aba)', ' (opens in a new tab)')}</span>
  const acoes = (
    <div className="h-acoes">
      <a className="botao-horda" href={DEMO} target="_blank" rel="noreferrer">{t('Testar a demo ao vivo', 'Try the live demo')} ↗{novaAba}</a>
      <a className="botao-horda vazado" href={REPO} target="_blank" rel="noreferrer">{t('Ver o código', 'View the code')} ↗{novaAba}</a>
    </div>
  )

  return (
    <>
      <main id="conteudo" tabIndex={-1} className="horda">
        <div className="container">

          <div className="h-hero">
            <div className="h-hero-texto">
              <img className="h-logo" src={h('logo.png')} alt="HordaMaster" width="220" />
              <span className="kicker">case 03 · web app · {t('ilustração', 'illustration')} · mvp</span>
              <h1>{t('Combate sem papel', 'Paperless combat')}</h1>
              <p className="lead">{t('Uma web app para o mestre de RPG controlar vários inimigos ao mesmo tempo, com uma interface que eu desenhei inteira à mão.', 'A web app for tabletop RPG game masters to track many enemies at once, with an interface I drew entirely by hand.')}</p>
              {acoes}
            </div>
            <figure className="h-gif">
              <img src={h('combate.webp')} alt={t('Aplicando dano em um goblin até ele ser derrotado e depois curando.', 'Dealing damage to a goblin until it is defeated, then healing it.')} width="900" height="353" />
              <figcaption>{t('dano faz o coração tremer; a 0 PV, o cartão ganha o carimbo de derrotado', 'damage makes the heart shake; at 0 HP the card gets a “defeated” stamp')}</figcaption>
            </figure>
          </div>

          <CaseResumo itens={resumo} />

          <dl className="h-meta" data-revela>
            <div><dt>{t('Papel', 'Role')}</dt><dd>{t('Product design, ilustração, UI e front-end', 'Product design, illustration, UI and front-end')}</dd></div>
            <div><dt>{t('Contexto', 'Context')}</dt><dd>{t('Pós em Desenvolvimento Full-Stack, PUC-Rio', 'Graduate program in Full-Stack Development, PUC-Rio')}</dd></div>
            <div><dt>{t('Ferramentas', 'Tools')}</dt><dd>{t('Ilustração digital, React, TypeScript, Tailwind', 'Digital illustration, React, TypeScript, Tailwind')}</dd></div>
          </dl>

          <section aria-labelledby="t-problema" data-revela>
            <h2 id="t-problema">{t('O problema', 'The problem')}</h2>
            <p className="lead">{t('O mestre narra a história e controla tudo o que os jogadores enfrentam. Num combate contra seis goblins, um orc e um necromante, ele precisa acompanhar cada um sem quebrar o ritmo da mesa, muitas vezes num notebook ou celular ao lado do livro de regras.', 'The game master narrates the story and controls everything the players face. In a fight against six goblins, an orc and a necromancer, they need to keep track of each one without breaking the table’s pace, often on a laptop or phone next to the rulebook.')}</p>
            <h3 className="h-sub">{t('O que o produto precisa fazer bem', 'What the product has to do well')}</h3>
            <ol className="pergaminhos">
              {precisa.map((p) => (
                <li className="pergaminho" key={p.t.pt}><h3>{t(p.t)}</h3><p>{t(p.d)}</p></li>
              ))}
            </ol>
          </section>

          <section aria-labelledby="t-decisoes" data-revela>
            <h2 id="t-decisoes">{t('Decisões de design', 'Design decisions')}</h2>

            <div className="decisao">
              <div>
                <span className="num">01</span>
                <h3>{t('Criar uma ficha é abrir um pergaminho', 'Creating a sheet means unrolling a scroll')}</h3>
                <p>{t('A metáfora da mesa de RPG guia a tela de criação: o pergaminho abre enrolado, com as instruções e um botão claro de “Abrir pergaminho”, e se desenrola por cima delas. Ao lado, uma prévia ao vivo mostra o cartão exatamente como ele vai aparecer na mesa. Os números têm botões de − e +, fáceis no toque, e o ícone se escolhe numa grade visual.', 'The tabletop metaphor guides the creation screen: the scroll starts rolled up, with instructions and a clear “Open scroll” button, and unrolls over them. Next to it, a live preview shows the card exactly as it will appear on the table. Numbers have − and + buttons that are easy to tap, and the icon is picked from a visual grid.')}</p>
              </div>
              <img className="h-solta" src={h('pergaminho.webp')} alt={t('O pergaminho se desenrolando por cima das instruções e enrolando de novo.', 'The scroll unrolling over the instructions and rolling back up.')} loading="lazy" width="560" height="536" />
            </div>
            <figure className="tela"><img src={h('criar.webp')} alt={t('Tela de criar ficha: pergaminho aberto com nome, nível, vida, armadura, grade de ícones e a prévia do cartão ao lado.', 'Create sheet screen: open scroll with name, level, health, armor, icon grid and the card preview beside it.')} loading="lazy" width="1440" height="900" /></figure>

            <div className="decisao">
              <div>
                <span className="num">02</span>
                <h3>{t('O estado do combate de relance', 'The state of combat at a glance')}</h3>
                <p>{t('Cada inimigo é um cartão, e o topo da mesa resume a luta inteira: quantos estão na mesa, de pé e derrotados, e uma barra com a vida da horda. As ações em lote dizem o que fazem, como “Tirar derrotados” e “Encerrar combate”, e pedem confirmação com o foco começando em “Cancelar”.', 'Each enemy is a card, and the top of the table sums up the whole fight: how many are on the table, standing and defeated, plus a bar with the horde’s health. Bulk actions say what they do, like “Remove defeated” and “End combat”, and ask for confirmation with focus starting on “Cancel”.')}</p>
              </div>
            </div>
            <figure className="tela"><img src={h('home.webp')} alt={t('Mesa de combate com a barra de fichas à esquerda, o resumo da horda no topo e cinco cartões de inimigos, um deles derrotado.', 'Combat table with the sheet sidebar on the left, the horde summary on top and five enemy cards, one of them defeated.')} loading="lazy" width="1440" height="900" /></figure>

            <div className="decisoes-grade">
              <div className="pergaminho">
                <span className="num">03</span>
                <h3>{t('Cada cartão responde', 'Every card reacts')}</h3>
                <p>{t('O coração muda de desenho conforme a vida: cheio, machucado, partido. Dano faz tremer, cura faz pulsar. A 0 PV, o cartão perde a cor e ganha o carimbo de “Derrotado”.', 'The heart drawing changes with health: full, hurt, broken. Damage makes it shake, healing makes it pulse. At 0 HP the card loses its color and gets a “Defeated” stamp.')}</p>
              </div>
              <div className="pergaminho">
                <span className="num">04</span>
                <h3>{t('Estados vazios que ensinam', 'Empty states that teach')}</h3>
                <p>{t('A mesa vazia virou um mini-onboarding com os três passos de uso e um atalho para criar a primeira ficha.', 'The empty table became a mini onboarding with the three steps of use and a shortcut to create the first sheet.')}</p>
              </div>
              <div className="pergaminho">
                <span className="num">05</span>
                <h3>{t('Avisos no clima do jogo', 'Notices in the game’s mood')}</h3>
                <p>{t('Avisos temáticos de sucesso, informação e erro, como “Goblin Saqueador 4 entrou na mesa!”, sem quebrar a imersão.', 'Themed success, info and error notices, like “Raider Goblin 4 joined the table!”, without breaking immersion.')}</p>
              </div>
            </div>
            <figure className="tela"><img src={h('vazio.webp')} alt={t('Mesa de combate vazia com os três passos de uso e o d20 ao centro.', 'Empty combat table with the three steps of use and the d20 in the middle.')} loading="lazy" width="1440" height="900" /></figure>
          </section>

          <section aria-labelledby="t-identidade" data-revela>
            <h2 id="t-identidade">{t('Ilustração que define o layout', 'Illustration that shapes the layout')}</h2>
            <p className="lead">{t('Madeira, pergaminho, cartões, corações, escudo, estandarte, logo e o d20: todas as artes são minhas. Por isso o layout se adapta aos desenhos, e não o contrário. As medidas vieram dos próprios traços, como as listras do estandarte, que limitam onde ficam busca e lista.', 'Wood, parchment, cards, hearts, shield, banner, logo and the d20: all the art is mine. That’s why the layout adapts to the drawings, not the other way around. Measurements came from the strokes themselves, like the banner’s stripes, which bound where search and list sit.')}</p>
            <figure className="tela clara"><img src={h('ilustracoes.webp')} alt={t('Ilustrações originais da interface: logo, d20, corações, escudo, etiquetas, tábuas e pergaminho.', 'Original interface illustrations: logo, d20, hearts, shield, tags, boards and scroll.')} loading="lazy" width="1500" height="716" /></figure>
            <ul className="paleta" aria-label={t('Paleta tirada das ilustrações', 'Palette taken from the illustrations')}>
              {paleta.map(([n, c]) => (
                <li key={c}><span style={{ background: c }} aria-hidden="true" /><b>{t(n)}</b><code>{c}</code></li>
              ))}
            </ul>
            <p className="h-nota">{t('Tipografia: Marhey nos títulos, com cara de letreiro pintado, e Nunito nos textos e números, que precisam ser lidos rápido.', 'Type: Marhey for titles, with a hand-painted sign feel, and Nunito for text and numbers, which need to be read fast.')}</p>
          </section>

          <section aria-labelledby="t-responsivo" data-revela>
            <h2 id="t-responsivo">{t('Do celular ao desktop', 'From phone to desktop')}</h2>
            <div className="h-duas">
              <ul className="h-lista">
                <li>{t(<><b>Grid de 8 pt</b> com 4, 8 ou 12 colunas conforme a tela e área segura de 1200 px.</>, <><b>8 pt grid</b> with 4, 8 or 12 columns depending on the screen, and a 1200 px safe area.</>)}</li>
                <li>{t(<><b>Navegação na zona do polegar</b> no celular, com as fichas numa gaveta lateral.</>, <><b>Thumb-zone navigation</b> on phones, with the sheets in a side drawer.</>)}</li>
                <li>{t(<><b>Alvos de toque de 44 a 48 px</b>; nos cartões, uma área invisível maior que o desenho.</>, <><b>44 to 48 px touch targets</b>; on cards, an invisible hit area larger than the drawing.</>)}</li>
                <li>{t(<><b>Sem rolagem horizontal</b> de 320 a 1920 px, conferido por um teste automatizado.</>, <><b>No horizontal scrolling</b> from 320 to 1920 px, checked by an automated test.</>)}</li>
                <li>{t(<><b>Acessibilidade:</b> foco visível, teclado, Esc fecha diálogos, rótulos para leitores de tela e respeito a reduzir movimento.</>, <><b>Accessibility:</b> visible focus, keyboard support, Esc closes dialogs, screen reader labels and respect for reduced motion.</>)}</li>
              </ul>
              <figure className="h-celulares">
                <img src={h('celulares.webp')} alt={t('Dois celulares: um com a mesa de combate e outro com a criação de ficha.', 'Two phones: one with the combat table and one with sheet creation.')} loading="lazy" width="1042" height="1236" />
              </figure>
            </div>
          </section>

          <blockquote data-revela>
            {t('“A interface desenvolvida apresenta boa usabilidade, com navegação intuitiva e layout limpo.”', '“The interface shows good usability, with intuitive navigation and a clean layout.”')}
            <footer>{t('Avaliação do professor da disciplina, PUC-Rio', 'Course professor’s evaluation, PUC-Rio (translated from Portuguese)')}</footer>
          </blockquote>

          <section aria-labelledby="t-proximos" data-revela>
            <h2 id="t-proximos">{t('Próximos passos', 'Next steps')}</h2>
            <div className="decisoes-grade">
              <div className="pergaminho"><h3>{t('Ordem de iniciativa', 'Initiative order')}</h3><p>{t('O pedido mais natural depois do controle de vida.', 'The most natural request after health tracking.')}</p></div>
              <div className="pergaminho"><h3>{t('Condições com ícones', 'Conditions with icons')}</h3><p>{t('Envenenado, caído, atordoado, no lugar de texto livre.', 'Poisoned, prone, stunned, instead of free text.')}</p></div>
              <div className="pergaminho"><h3>{t('Teste com mestres', 'Testing with game masters')}</h3><p>{t('Numa sessão real, medindo o tempo para aplicar dano num inimigo específico.', 'In a real session, measuring the time to damage a specific enemy.')}</p></div>
            </div>
          </section>

          {acoes}
          <p className="credito">{t('Ilustrações, UI e código por mim. Ícones das criaturas: Freepik. Monstros do bestiário: 5e SRD API, sob Open Game License.', 'Illustrations, UI and code by me. Creature icons: Freepik. Bestiary monsters: 5e SRD API, under the Open Game License.')}</p>
        </div>
      </main>
      <CaseNav />
      <CaseFooter id="hordamaster" className="rodape madeira" />
    </>
  )
}
