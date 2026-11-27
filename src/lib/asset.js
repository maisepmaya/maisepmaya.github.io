// Caminho para arquivos de /public, respeitando o "base" do Vite
export const asset = (path) => `${import.meta.env.BASE_URL}assets/${path}`
export const img = (name) => asset(`img/${name}`)
export const CURRICULO = asset('docs/Maise-Perini-Maya-Curriculo.pdf')
export const RESUME_EN = asset('docs/Maise-Perini-Maya-Resume.pdf')
