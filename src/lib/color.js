// Utilitários de cor usados na demonstração white label

export const hexToRgb = (h) => {
  const v = h.replace('#', '')
  return [0, 2, 4].map((i) => parseInt(v.slice(i, i + 2), 16))
}

export const rgbToHex = (c) =>
  '#' + c.map((v) => Math.round(v).toString(16).padStart(2, '0')).join('').toUpperCase()

export const mix = (a, b, t) => a.map((v, i) => v + (b[i] - v) * t)

// luminância relativa (WCAG 2.x)
export const luminance = (c) => {
  const [r, g, b] = c.map((v) => {
    v /= 255
    return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4
  })
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

export const contrast = (a, b) => {
  const x = luminance(a)
  const y = luminance(b)
  return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05)
}

export const WHITE = [255, 255, 255]
export const BLACK = [22, 22, 29]

const STEPS = [
  ['50', WHITE, 0.9], ['100', WHITE, 0.78], ['200', WHITE, 0.58], ['300', WHITE, 0.38],
  ['400', WHITE, 0.18], ['500', null, 0], ['600', BLACK, 0.18], ['700', BLACK, 0.36], ['800', BLACK, 0.54],
]

// gera a escala de 50 a 800 a partir da cor do cliente (500)
export function scale(hex) {
  const base = hexToRgb(hex)
  return Object.fromEntries(STEPS.map(([k, alvo, t]) => [k, alvo ? mix(base, alvo, t) : base]))
}

// branco ou quase-preto, o que der mais contraste
export const bestText = (bg) => (contrast(bg, WHITE) >= contrast(bg, BLACK) ? WHITE : BLACK)
