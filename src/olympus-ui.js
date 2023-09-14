export default {
  install(app) {
    app.component('OlContainer', () =>
      import('./components/ui/container/index.vue')
    );
    app.component('OlButton', () => import('./components/ui/button/index.vue'));
    app.component('OlLoader', () => import('./components/ui/loader/index.vue'));
    app.component('OlMarkdownInput', () =>
      import('./components/forms/MarkdownInput.vue')
    );
    app.component('OlTextareaInput', () =>
      import('./components/forms/TextareaInput.vue')
    );
    app.component('OlTextInput', () =>
      import('./components/forms/TextInput.vue')
    );
    app.component('OlMarkdownDisplay', () =>
      import('./components/ui/markdown-display/index.vue')
    );
  },
};
