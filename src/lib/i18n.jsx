import { createContext, useContext, useEffect, useMemo, useState } from 'react'

// Português e inglês. Os textos ficam lado a lado no próprio componente:
// t('Olá', 'Hello') ou t({ pt: 'Olá', en: 'Hello' }).
const Ctx = createContext({ lang: 'pt', setLang: () => {}, t: (pt) => pt })

const ler = () => {
  try {
    const salvo = localStorage.getItem('idioma')
    if (salvo === 'pt' || salvo === 'en') return salvo
  } catch { /* sem storage */ }
  return (navigator.language || 'pt').toLowerCase().startsWith('pt') ? 'pt' : 'en'
}

export function LangProvider({ children }) {
  const [lang, setLangState] = useState(ler)
  const setLang = (l) => {
    setLangState(l)
    try { localStorage.setItem('idioma', l) } catch { /* ok */ }
  }
  useEffect(() => { document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en' }, [lang])
  const value = useMemo(() => ({
    lang,
    setLang,
    t: (a, b) => (a && typeof a === 'object' && !a.$$typeof && 'pt' in a ? a[lang] ?? a.pt : lang === 'en' && b !== undefined ? b : a),
  }), [lang])
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export const useLang = () => useContext(Ctx)
