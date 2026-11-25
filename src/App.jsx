import { useEffect } from 'react'
import { useHashRoute } from './lib/useHashRoute.js'
import { useReveal } from './lib/useReveal.js'
import { useLang } from './lib/i18n.jsx'
import SkipLink from './components/SkipLink.jsx'
import Header from './components/Header.jsx'
import PainelA11y from './components/PainelA11y.jsx'
import Home from './pages/Home.jsx'
import DesignSystem from './pages/DesignSystem.jsx'
import Kibo from './pages/Kibo.jsx'
import Hordamaster from './pages/Hordamaster.jsx'

const ROUTES = {
  'design-system': { Page: DesignSystem, title: { pt: 'Design System white label', en: 'White label Design System' } },
  kibo: { Page: Kibo, title: { pt: 'Kibo · Comunicação Alternativa', en: 'Kibo · Alternative Communication' } },
  hordamaster: { Page: Hordamaster, title: { pt: 'HordaMaster', en: 'HordaMaster' } },
}

export default function App() {
  const { t } = useLang()
  const page = useHashRoute(ROUTES)
  const rota = ROUTES[page]
  useReveal(page)

  useEffect(() => {
    document.title = rota ? `${t(rota.title)} · Maíse Perini Maya` : 'Maíse Perini Maya · Product Designer UX/UI'
  }, [rota, t])

  return (
    <>
      <SkipLink />
      <Header caso={Boolean(rota)} />
      {rota ? <rota.Page /> : <Home />}
      <PainelA11y />
    </>
  )
}
