import Container from './components/ui/container/index.vue'
import Button from './components/ui/button/index.vue'
import MarkdownDisplay from './components/ui/markdown-display/index.vue'

import MarkdownInput from './components/forms/MarkdownInput.vue'
import TextareaInput from './components/forms/TextareaInput.vue'
import TextInput from './components/forms/TextInput.vue'

const OlympusUI= {
    install(app) {
        app.component('Container', Container)
        app.component('Button', Button)
        app.component('MarkdownInput', MarkdownInput)
        app.component('TextareaInput', TextareaInput)
        app.component('TextInput', TextInput)
        app.component('MarkdownDisplay', MarkdownDisplay)
    }
}


export default OlympusUI
