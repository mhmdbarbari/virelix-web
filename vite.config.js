import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// Serves /api/check during `npm run dev`, so the website check works locally too (on Vercel it is a function).
const devApi = {
  name: 'dev-api',
  configureServer(server) {
    // server-side keys from .env (e.g. PSI_KEY) for the local API; never sent to the browser
    Object.assign(process.env, loadEnv(server.config.mode, process.cwd(), ''), process.env)
    server.middlewares.use('/api/check', async (req, res) => {
      const { default: handler } = await server.ssrLoadModule('/api/check.js')
      req.url = '/api/check' + (req.url.startsWith('?') ? req.url : req.url.replace(/^[^?]*/, ''))
      handler(req, res)
    })
  },
}

export default defineConfig({
  plugins: [react(), devApi],
  build: { rollupOptions: { output: { manualChunks: { motion: ['gsap', 'lenis', '@gsap/react', 'framer-motion'], react: ['react', 'react-dom', 'react-router-dom'] } } } },
})
