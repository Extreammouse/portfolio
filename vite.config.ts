import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
  server: {
    host: '0.0.0.0',
    port: 3000,
    watch: {
      usePolling: true,
    },
    open: true, // Automatically opens the browser
    cors: true, // Enable CORS for debugging API issues
    strictPort: true, // Ensures the server exits if the port is unavailable
  },
})