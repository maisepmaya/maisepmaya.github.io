import { useEffect, useRef } from 'react'
import { useA11y } from '../lib/a11y.jsx'

// Estrela em retícula desenhada em canvas.
// Perto do cursor (ou do dedo), os pontos crescem, se afastam e viram 0 e 1.
// Com "reduzir movimento" ligado, ela é desenhada uma vez e fica parada.

const TINTA = '#1F1B1D'
const VINHO = '#8A4B66'
const ROSA = '#C07A97'

function dentroDaEstrela(x, y, cx, cy, R, r) {
  // ponto dentro de um polígono de 10 vértices (estrela de 5 pontas)
  const pts = []
  for (let i = 0; i < 10; i++) {
    const ang = -Math.PI / 2 + (i * Math.PI) / 5
    const rad = i % 2 === 0 ? R : r
    pts.push([cx + Math.cos(ang) * rad, cy + Math.sin(ang) * rad])
  }
  let dentro = false
  for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
    const [xi, yi] = pts[i]
    const [xj, yj] = pts[j]
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) dentro = !dentro
  }
  return dentro
}

export default function HalftoneStar() {
  const ref = useRef(null)
  const { prefs } = useA11y()

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    const calmo = prefs.calmo || window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let pontos = []
    let W = 0
    let H = 0
    let passo = 12
    const mouse = { x: -9999, y: -9999 }
    let raf = 0
    let visivel = true

    function montar() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const box = canvas.getBoundingClientRect()
      W = box.width
      H = box.height
      canvas.width = W * dpr
      canvas.height = H * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      passo = W < 420 ? 10 : 12
      const cx = W * 0.56
      const cy = H * 0.5
      const R = Math.min(W, H) * 0.47
      const r = R * 0.44
      pontos = []
      for (let y = passo / 2; y < H; y += passo) {
        for (let x = passo / 2; x < W; x += passo) {
          // grade girada 45° como na retícula de jornal
          const ox = x + ((Math.round(y / passo) % 2) * passo) / 2
          const na = dentroDaEstrela(ox, y, cx, cy, R, r)
          const d = Math.hypot(ox - cx, y - cy) / R
          if (na) {
            const zona = Math.max(0, (ox - cx) / R) * Math.max(0, (y - cy) / R)
            pontos.push({ x: ox, y, base: 0.5 * (1 - d * 0.75), cor: TINTA, k: 0, s: Math.random(), zero: Math.random() < zona * 5 })
          } else if (d < 1.25 && Math.random() < 0.22 * (1.25 - d)) {
            pontos.push({ x: ox, y, base: 0.12, cor: ROSA, k: 0, s: Math.random() })
          }
        }
      }
    }

    function desenhar(t = 0) {
      ctx.clearRect(0, 0, W, H)
      const raio = Math.max(70, W * 0.16)
      for (const p of pontos) {
        const d = Math.hypot(p.x - mouse.x, p.y - mouse.y)
        const alvo = d < raio ? 1 - d / raio : 0
        p.k += (alvo - p.k) * 0.18
        const onda = calmo ? 0 : Math.sin(t / 900 + p.x / 60 + p.y / 80) * 0.06
        const k = p.k
        let x = p.x
        let y = p.y
        if (k > 0.01 && d > 0) {
          x += ((p.x - mouse.x) / d) * k * 10
          y += ((p.y - mouse.y) / d) * k * 10
        }
        if (k > 0.45 && p.cor === TINTA) {
          ctx.fillStyle = p.s > 0.7 ? VINHO : TINTA
          ctx.font = `700 ${passo * 1.05}px "Space Mono", monospace`
          ctx.fillText(p.s > 0.5 ? '1' : '0', x - passo * 0.32, y + passo * 0.36)
          continue
        }
        if (p.zero && k < 0.45) {
          ctx.strokeStyle = TINTA
          ctx.lineWidth = 1.4
          ctx.beginPath()
          ctx.ellipse(x, y, passo * 0.26, passo * 0.36, 0, 0, Math.PI * 2)
          ctx.stroke()
          continue
        }
        const rr = passo * (p.base + onda) * (1 + k * 0.6)
        if (rr <= 0.4) continue
        ctx.fillStyle = p.cor
        ctx.beginPath()
        ctx.arc(x, y, rr, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    function loop(t) {
      desenhar(t)
      if (visivel && !calmo) raf = requestAnimationFrame(loop)
    }

    function mover(e) {
      const box = canvas.getBoundingClientRect()
      mouse.x = e.clientX - box.left
      mouse.y = e.clientY - box.top
      if (calmo) desenhar()
    }
    function sair() {
      mouse.x = -9999
      mouse.y = -9999
      if (calmo) desenhar()
    }

    montar()
    desenhar()
    if (!calmo) raf = requestAnimationFrame(loop)

    const ro = new ResizeObserver(() => { montar(); desenhar() })
    ro.observe(canvas)
    const io = new IntersectionObserver(([e]) => {
      visivel = e.isIntersecting
      if (visivel && !calmo) { cancelAnimationFrame(raf); raf = requestAnimationFrame(loop) }
    })
    io.observe(canvas)
    const area = canvas.parentElement
    area.addEventListener('pointermove', mover)
    area.addEventListener('pointerleave', sair)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      io.disconnect()
      area.removeEventListener('pointermove', mover)
      area.removeEventListener('pointerleave', sair)
    }
  }, [prefs.calmo])

  return <canvas ref={ref} className="estrela-canvas" aria-hidden="true" />
}
