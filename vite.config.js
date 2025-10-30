import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚙️ Configuração para funcionar no GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: '/ClimaEmTempoRealNoMundo/', // 👈 nome exato do seu repositório no GitHub
})
