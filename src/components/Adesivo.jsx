import { useRef, useState } from 'react'

// Etiqueta que pode ser arrastada com o mouse/dedo ou movida com as setas.
export default function Adesivo({ children, className = '', giro = 0 }) {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [pegando, setPegando] = useState(false)
  const inicio = useRef(null)

  const down = (e) => {
    e.currentTarget.setPointerCapture(e.pointerId)
    inicio.current = { x: e.clientX - pos.x, y: e.clientY - pos.y }
    setPegando(true)
  }
  const move = (e) => {
    if (!inicio.current) return
    setPos({ x: e.clientX - inicio.current.x, y: e.clientY - inicio.current.y })
  }
  const up = () => { inicio.current = null; setPegando(false) }
  const tecla = (e) => {
    const passo = e.shiftKey ? 40 : 12
    const m = { ArrowLeft: [-passo, 0], ArrowRight: [passo, 0], ArrowUp: [0, -passo], ArrowDown: [0, passo] }[e.key]
    if (!m) return
    e.preventDefault()
    setPos((p) => ({ x: p.x + m[0], y: p.y + m[1] }))
  }

  return (
    <span
      className={`etiqueta adesivo ${className} ${pegando ? 'pegando' : ''}`}
      style={{ transform: `translate(${pos.x}px, ${pos.y}px) rotate(${pegando ? 0 : giro}deg)` }}
      tabIndex={0}
      aria-roledescription="etiqueta móvel"
      onPointerDown={down}
      onPointerMove={move}
      onPointerUp={up}
      onPointerCancel={up}
      onKeyDown={tecla}
    >
      {children}
    </span>
  )
}
