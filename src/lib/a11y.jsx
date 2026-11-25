import { createContext, useContext, useEffect, useState } from 'react'

// Preferências de acessibilidade. Viram classes no <html> e ficam salvas no navegador.
export const PADRAO = { texto: 0, contraste: false, calmo: false, legivel: false, links: false, espaco: false, regua: false }
const Ctx = createContext({ prefs: PADRAO, set: () => {}, reset: () => {} })

const ler = () => {
  const base = { ...PADRAO }
  try { Object.assign(base, JSON.parse(localStorage.getItem('a11y') || '{}')) } catch { /* ok */ }
  if (localStorage && !localStorage.getItem?.('a11y') && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) base.calmo = true
  return base
}

export function A11yProvider({ children }) {
  const [prefs, setPrefs] = useState(() => { try { return ler() } catch { return { ...PADRAO } } })

  useEffect(() => {
    const h = document.documentElement
    h.classList.remove('a11y-texto-1', 'a11y-texto-2')
    if (prefs.texto) h.classList.add(`a11y-texto-${prefs.texto}`)
    for (const k of ['contraste', 'calmo', 'legivel', 'links', 'espaco']) h.classList.toggle(`a11y-${k}`, !!prefs[k])
    try { localStorage.setItem('a11y', JSON.stringify(prefs)) } catch { /* ok */ }
    // fonte legível só é baixada quando alguém liga a opção
    if (prefs.legivel && !document.getElementById('fonte-legivel')) {
      const l = document.createElement('link')
      l.id = 'fonte-legivel'
      l.rel = 'stylesheet'
      l.href = 'https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400&display=swap'
      document.head.appendChild(l)
    }
  }, [prefs])

  const set = (k, v) => setPrefs((p) => ({ ...p, [k]: v }))
  const reset = () => setPrefs({ ...PADRAO })
  return <Ctx.Provider value={{ prefs, set, reset }}>{children}</Ctx.Provider>
}

export const useA11y = () => useContext(Ctx)
