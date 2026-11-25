import { useEffect } from 'react'

// Elementos com data-revela aparecem suavemente quando entram na tela.
export function useReveal(dep) {
  useEffect(() => {
    const els = document.querySelectorAll('[data-revela]:not(.visivel)')
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('visivel'))
      return
    }
    const io = new IntersectionObserver((entradas) => {
      for (const e of entradas) {
        if (e.isIntersecting) {
          e.target.classList.add('visivel')
          io.unobserve(e.target)
        }
      }
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 })
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [dep])
}
