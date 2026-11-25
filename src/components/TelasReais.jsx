import { useState } from 'react'
import { img } from '../lib/asset.js'
import { useLang } from '../lib/i18n.jsx'

// Galeria com prints reais do style guide (dados fictícios).
const TELAS = [
  { id: 'login', nome: { pt: 'Login', en: 'Login' }, arq: 'example-login', extra: true,
    desc: { pt: 'Formulário com validação e estados de erro e sucesso, feito só com Input, Botão, Checkbox, Alerta e Badge.', en: 'A form with validation and error and success states, built only with Input, Button, Checkbox, Alert and Badge.' } },
  { id: 'usuarios', nome: { pt: 'Usuários', en: 'Users' }, arq: 'example-users',
    desc: { pt: 'Tabela com busca, filtro, seleção múltipla, status e paginação.', en: 'A table with search, filters, multi-select, status and pagination.' } },
  { id: 'config', nome: { pt: 'Configurações', en: 'Settings' }, arq: 'example-settings',
    desc: { pt: 'Formulário longo com navegação lateral, breadcrumb e alerta informativo.', en: 'A long form with side navigation, breadcrumb and an info alert.' } },
  { id: 'metricas', nome: { pt: 'Métricas', en: 'Metrics' }, arq: 'stat-cards',
    desc: { pt: 'Cards de indicador com variantes de cor por intenção e estado de carregamento.', en: 'Metric cards with intent-based color variants and a loading state.' } },
  { id: 'campanhas', nome: { pt: 'Campanhas', en: 'Campaigns' }, arq: 'campanhas', extra: true,
    desc: { pt: 'Uma tela que junta quase tudo: botões, cards de indicador, tags de status, barras de progresso, tabela e paginação.', en: 'A screen that brings almost everything together: buttons, metric cards, status tags, progress bars, table and pagination.' } },
]

const VERSOES_LOGIN = [
  { id: 'claro', nome: { pt: 'Claro', en: 'Light' } },
  { id: 'escuro', nome: { pt: 'Escuro', en: 'Dark' } },
  { id: 'indigo', nome: { pt: 'Marca índigo', en: 'Indigo brand' } },
  { id: 'laranja', nome: { pt: 'Marca laranja', en: 'Orange brand' } },
]

export default function TelasReais() {
  const { t } = useLang()
  const [tela, setTela] = useState(TELAS[0])
  const [versao, setVersao] = useState('claro')
  const versoes = tela.extra ? VERSOES_LOGIN : VERSOES_LOGIN.slice(0, 2)
  const v = versoes.some((x) => x.id === versao) ? versao : 'claro'
  const marca = v === 'indigo' || v === 'laranja'

  const tecla = (e) => {
    const i = TELAS.indexOf(tela)
    const prox = e.key === 'ArrowRight' ? TELAS[(i + 1) % TELAS.length] : e.key === 'ArrowLeft' ? TELAS[(i - 1 + TELAS.length) % TELAS.length] : null
    if (!prox) return
    setTela(prox)
    document.getElementById(`aba-${prox.id}`)?.focus()
  }

  return (
    <div className="telas">
      <div className="telas-barra">
        <div role="tablist" aria-label={t('Telas de exemplo', 'Example screens')} className="telas-abas" onKeyDown={tecla}>
          {TELAS.map((tl) => (
            <button
              key={tl.id} id={`aba-${tl.id}`} role="tab" type="button"
              aria-selected={tl === tela} aria-controls="painel-tela" tabIndex={tl === tela ? 0 : -1}
              onClick={() => setTela(tl)}
            >
              {t(tl.nome)}
            </button>
          ))}
        </div>
        <div className="telas-versoes" role="group" aria-label={t('Versão', 'Version')}>
          {versoes.map((x) => (
            <button key={x.id} type="button" aria-pressed={v === x.id} onClick={() => setVersao(x.id)}>
              {t(x.nome)}
            </button>
          ))}
        </div>
      </div>
      <div id="painel-tela" role="tabpanel" aria-labelledby={`aba-${tela.id}`} className="telas-painel">
        <img
          key={`${tela.arq}-${v}`}
          src={img(`ds/${tela.arq}-${v}.webp`)}
          alt={t(`${t(tela.nome)}, versão ${t(versoes.find((x) => x.id === v).nome).toLowerCase()}, montada com os componentes do Design System.`, `${t(tela.nome)}, ${t(versoes.find((x) => x.id === v).nome).toLowerCase()} version, built with the Design System components.`)}
          loading="lazy"
        />
      </div>
      <p className="telas-legenda">
        {marca
          ? t('Mesma tela, só com a cor da marca trocada: botões, links e destaques mudam juntos. Hoje cada cliente escolhe a própria cor, com a recomendação de usar tons mais claros e cuidar do contraste. Repare no texto do botão sobre o índigo: é aí que essa recomendação faz diferença.', 'Same screen, only the brand color changed: buttons, links and highlights all follow. Today each client picks their own color, with a recommendation to use lighter shades and mind the contrast. Look at the button text on indigo: that’s where the recommendation matters.')
          : t(tela.desc)}
      </p>
    </div>
  )
}
