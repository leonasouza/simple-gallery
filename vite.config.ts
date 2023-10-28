/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@ui', replacement: '/src/ui' },
      { find: '@components', replacement: '/src/components' },
      { find: '@containers', replacement: '/src/containers' },
      { find: '@services', replacement: '/src/services' },
      { find: '@types', replacement: '/src/types' },
    ],
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.js',
  },
})
