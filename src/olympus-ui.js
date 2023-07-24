import OlContainer from './components/ui/container/index.vue';
import OlButton from './components/ui/button/index.vue';
import OlLoader from './components/ui/loader/index.vue';
import OlMarkdownDisplay from './components/ui/markdown-display/index.vue';

import OlMarkdownInput from './components/forms/MarkdownInput.vue';
import OlTextareaInput from './components/forms/TextareaInput.vue';
import OlTextInput from './components/forms/TextInput.vue';

export default {
  install(app) {
    app.component('OlContainer', OlContainer);
    app.component('OlButton', OlButton);
    app.component('OlLoader', OlLoader);
    app.component('OlMarkdownInput', OlMarkdownInput);
    app.component('OlTextareaInput', OlTextareaInput);
    app.component('OlTextInput', OlTextInput);
    app.component('OlMarkdownDisplay', OlMarkdownDisplay);
  },
};
