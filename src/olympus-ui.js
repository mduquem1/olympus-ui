import Container from './components/ui/container/index.vue';
import Button from './components/ui/button/index.vue';
import Loader from './components/ui/loader/index.vue';
import MarkdownDisplay from './components/ui/markdown-display/index.vue';

import MarkdownInput from './components/forms/MarkdownInput.vue';
import TextareaInput from './components/forms/TextareaInput.vue';
import TextInput from './components/forms/TextInput.vue';

export const OlympusUI = {
  install(app) {
    app.component('Container', Container);
    app.component('Button', Button);
    app.component('Loader', Loader);
    app.component('MarkdownInput', MarkdownInput);
    app.component('TextareaInput', TextareaInput);
    app.component('TextInput', TextInput);
    app.component('MarkdownDisplay', MarkdownDisplay);
  },
};

