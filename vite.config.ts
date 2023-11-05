/// <reference types="vitest" />
/// <reference types="vite-plugin-svgr/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr({ include: '**/*.svg?react' }), react()],
  resolve: {
    alias: [
      { find: '@assets', replacement: '/src/assets' },
      { find: '@components', replacement: '/src/components' },
      { find: '@containers', replacement: '/src/containers' },
      { find: '@contexts', replacement: '/src/contexts' },
      { find: '@services', replacement: '/src/services' },
      { find: '@tests', replacement: '/src/tests' },
      { find: '@types', replacement: '/src/types' },
      { find: '@ui', replacement: '/src/ui' },
    ],
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setupTests.js',
  },
})
