import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: 'src/olympus-ui.js',
      name: 'OlympusUI'
    },
    rollupOptions: {
      external: ['vue', 'marked'],
      output: {
        globals: {
          vue: 'Vue',
          marked: 'marked'
        }
      }
    }
  }
})
