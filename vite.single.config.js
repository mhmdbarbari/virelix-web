import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

// One self-contained index.html that opens straight from disk (hash URLs: #/work).
export default defineConfig({
  plugins: [react(), viteSingleFile()],
  define: { 'import.meta.env.VITE_HASH_ROUTER': JSON.stringify('1') },
  build: { outDir: 'dist-single', assetsInlineLimit: 100_000_000 },
})
