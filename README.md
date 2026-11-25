# Portfólio · Maíse Perini Maya

Portfólio de Product Design (UX/UI), feito em React + Vite e publicado no GitHub Pages.

**→ [maisepmaya.github.io](https://maisepmaya.github.io)**

## Estrutura

```
src/
  App.jsx               rotas por hash (#kibo, #design-system, #hordamaster)
  data/cases.js         lista dos cases: alimenta os cards da home e a navegação entre cases
  components/           Header, Logo, CaseCard, CaseFooter, SkipLink, WhiteLabelDemo
  pages/                Home e uma página por case, cada uma com o tema do próprio projeto
  lib/color.js          escala de cores e contraste WCAG usados na demo white label
  lib/i18n.jsx          português e inglês: t('texto', 'text') direto no componente
  lib/a11y.jsx          preferências de acessibilidade aplicadas como classes no <html>
  styles/               estilo global + um arquivo por case
public/assets/          imagens e currículo em PDF
```

## Acessibilidade

- Painel “Do seu jeito”: idioma (PT/EN), tamanho do texto, alto contraste, pausar animações, fonte legível (Atkinson Hyperlegible), mais espaçamento, destacar links e régua de leitura — salvo no navegador
- Sem violações do axe-core (WCAG 2 A/AA) nas quatro páginas, em português e inglês

- Link "pular para o conteúdo" e foco visível em todos os controles
- Contraste AA nos textos; a demo white label calcula o contraste do botão em tempo real
- Textos alternativos nas imagens e respeito a `prefers-reduced-motion`

## Rodar localmente

```bash
npm install
npm run dev
```

## Publicar

Cada push na `main` gera o build e publica pelo GitHub Actions (`.github/workflows/deploy.yml`).
