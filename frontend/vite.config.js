import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    base: '/'
  },
  server: {
    port: 10001,
    proxy: {
      '/api': {
        target: 'http://localhost:20001', // 스프링 부트 백엔드 주소
        changeOrigin: true, // 대상 서버의 호스트 헤더를 변경
        secure: false, // HTTPS가 아닌 경우 false
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
