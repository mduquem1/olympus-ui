import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import markdownRawPlugin from 'vite-raw-plugin';
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    cors: true,
  },
  plugins: [
    Vue(),
    markdownRawPlugin({
      fileRegex: /\.md$/,
    }),
    federation({
      name: 'olympus-ui',
      filename: 'main.js',
      exposes: {
        './OlMarkdownInput': './src/components/forms/MarkdownInput.vue',
        './OlTextareaInput': './src/components/forms/TextareaInput.vue',
        './OlTextInput': './src/components/forms/TextInput.vue',
        './OlButton': './src/components/ui/button/index.vue',
        './OlContainer': './src/components/ui/container/index.vue',
        './OlLoader': './src/components/ui/loader/index.vue',
        './OlMarkdownDisplay': './src/components/ui/markdown-display/index.vue',
      },
      shared: ['vue'],
    }),
  ],
  build: {
    target: 'esnext',
  },
  // build: {
  //   lib: {
  //     entry: 'src/olympus-ui.js',
  //     name: 'olympus-ui',
  //     fileName: (format) => `olympus-ui.${format}.js`,
  //   },
  //   mode: 'production',
  //   cssCodeSplit: true,
  // },
});
