import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import markdownRawPlugin from 'vite-raw-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    markdownRawPlugin({
      fileRegex: /\.md$/,
    }),
  ],
  build: {
    lib: {
      entry: 'src/olympus-ui.js',
      name: 'olympus-ui',
      fileName: (format) => `olympus-ui.${format}.js`,
    },
    mode: 'production',
    cssCodeSplit: true,
    rollupOptions: {
      external: ['vue', 'marked', 'daisy-ui'],
      output: {
        inlineDynamicImports: true,
        globals: {
          vue: 'Vue',
          marked: 'marked',
          daisyui: 'daisyui',
        },
      },
    },
  },
});
