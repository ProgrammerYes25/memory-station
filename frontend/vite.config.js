import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    base: '/frontend/', 
    plugins: [react()],
    server: {
    port: 10001,
    host: true
  }
})
