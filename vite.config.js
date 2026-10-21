import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // '' as the third argument loads ALL env vars, not just VITE_-prefixed ones
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [tailwindcss(), react()],
    server: {
      proxy: {
        '/newsapi': {
          target: 'https://api.freenewsapi.io',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/newsapi/, ''),
          headers: { 'x-api-key': env.VITE_API_KEY_NEWS },
        },
      },
    },
  }
})