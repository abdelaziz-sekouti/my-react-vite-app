import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/my-reacat-vite-app/',
   build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) return 'react-vendor'
            if (id.includes('lodash')) return 'lodash'
            return 'vendor'
          }
        }
      }
    },
    // increase limit (kb) or set to Infinity to disable warning
    chunkSizeWarningLimit: 600
  }
})
