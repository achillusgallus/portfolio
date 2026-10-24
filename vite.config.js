import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? "/portfolio/" : "/",
  server: {
    watch: {
      usePolling: true,
      interval: 1000,
      ignored: ['**/ERP_logiciel/**', '**/*.exe', '**/*.dmg']
    }
  }
}))
