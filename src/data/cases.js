// Lista dos cases. Para adicionar um projeto: crie a página em /pages,
// registre em App.jsx e inclua um item aqui. Textos em { pt, en }.
export const cases = [
  {
    id: 'design-system',
    rotulo: { pt: '01 · design system · white label', en: '01 · design system · white label' },
    titulo: { pt: 'Um padrão para todos os sites', en: 'One standard for every site' },
    resumo: { pt: 'Tokens, temas claro e escuro e uma paleta que se adapta à cor de cada cliente.', en: 'Tokens, light and dark themes, and a palette that adapts to each client’s color.' },
    curto: { pt: 'Design System', en: 'Design System' },
  },
  {
    id: 'kibo',
    rotulo: { pt: '02 · mobile · acessibilidade', en: '02 · mobile · accessibility' },
    titulo: { pt: 'Kibo: comunicação para todas as vozes', en: 'Kibo: communication for every voice' },
    resumo: { pt: 'App de Comunicação Aumentativa e Alternativa com pictogramas que representam quem usa.', en: 'An Augmentative and Alternative Communication app with pictograms that represent its users.' },
    curto: { pt: 'Kibo', en: 'Kibo' },
  },
  {
    id: 'hordamaster',
    rotulo: { pt: '03 · web app · ilustração', en: '03 · web app · illustration' },
    titulo: { pt: 'HordaMaster: combate sem papel', en: 'HordaMaster: paperless combat' },
    resumo: { pt: 'Controle de combate para mestres de RPG, com todas as ilustrações da interface desenhadas por mim.', en: 'Combat tracking for tabletop RPG game masters, with every interface illustration drawn by me.' },
    curto: { pt: 'HordaMaster', en: 'HordaMaster' },
  },
]

export const vizinhos = (id) => {
  const i = cases.findIndex((c) => c.id === id)
  return { anterior: cases[i - 1], proximo: cases[i + 1] }
}
