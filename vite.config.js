import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' deixa o build funcionar tanto no GitHub Pages quanto em qualquer subpasta
export default defineConfig({
  plugins: [react()],
  base: './',
})
