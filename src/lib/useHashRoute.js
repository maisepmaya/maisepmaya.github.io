import { useEffect, useState } from 'react'

// Roteamento simples por hash (#kibo, #design-system...).
// Funciona no GitHub Pages sem configuração extra de servidor.
// Hashes que não são páginas (#cases, #sobre) são âncoras da página inicial.
export function useHashRoute(routes) {
  const read = () => window.location.hash.slice(1)
  const [hash, setHash] = useState(read)

  useEffect(() => {
    const onChange = () => setHash(read())
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])

  const page = routes[hash] ? hash : 'inicio'

  // depois de renderizar: rola até a âncora, ou para o topo ao trocar de página
  useEffect(() => {
    const alvo = hash && !routes[hash] ? document.getElementById(hash) : null
    if (alvo) alvo.scrollIntoView()
    else window.scrollTo(0, 0)
  }, [hash, routes])

  return page
}
