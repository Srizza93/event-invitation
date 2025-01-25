import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig(async () => {
  const { viteStaticCopy } = await import('vite-plugin-static-copy')

  return {
    base: '/event-invitation',
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    plugins: [
      vue(),
      vueDevTools(),
      viteStaticCopy({
        targets: [
          {
            src: 'dist/index.html',
            dest: '.',
            rename: '404.html',
          },
        ],
      }),
    ],
  }
})
