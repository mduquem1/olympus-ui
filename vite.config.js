import { defineConfig } from 'vite';
import markdownRawPlugin from 'vite-raw-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    ViteFederation({
      name: 'olympus-ui',
      filename: 'main.js',
      exposes: {
        './OlButton': './src/components/ui/button/index.vue',
      },
    }),
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
