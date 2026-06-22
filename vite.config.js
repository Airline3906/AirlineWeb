import { copyFileSync, existsSync } from 'node:fs'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import WindiCSS from 'vite-plugin-windicss'

// 用户站点 (https://airline3906.github.io/) → base 用 '/'
// 项目站点 (https://airline3906.github.io/AirlineWeb/) → base 用 '/AirlineWeb/'
const GITHUB_BASE = '/AirlineWeb/'

export default defineConfig(({ mode }) => ({
  plugins: [
    vue(),
    WindiCSS(),
    {
      name: 'github-pages-404',
      closeBundle() {
        const indexPath = 'dist/index.html'
        if (existsSync(indexPath)) {
          copyFileSync(indexPath, 'dist/404.html')
        }
      },
    },
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'vue': 'vue/dist/vue.esm.js'
    },
  },

  server: {
    hmr: true,
    watch: {
      usePolling: true,
      interval: 100,
      binaryInterval: 300,
      alwaysStat: true
    },
    open: true
  },

  optimizeDeps: {
    force: true,
  },

  base: mode === 'pages' ? GITHUB_BASE : './',
  build: {
    assetsDir: 'assets',
    outDir: 'dist'
  },
}))
