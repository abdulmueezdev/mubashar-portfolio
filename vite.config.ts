import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    watch: {
      ignored: ['**/MCPS/**', '**/.agents/**'],
    },
    fs: {
      allow: ['/home/alucard/Documents/Antigraivty_Data/shared-deps/node_modules', '/home/alucard/mubashar-portfolio'],
    }
  },
  resolve: {
    preserveSymlinks: true,
  },
})
