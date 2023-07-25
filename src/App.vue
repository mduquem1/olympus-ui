<template>
  <img alt="Vue logo" src="./assets/vue.svg" />
  <h1>Welcome to OlympusUI</h1>
  <OlContainer :isFlexCol="true">
    <h2>OlContainer component</h2>
    <OlContainer :isFlexCol="true">
      <h3>Hola</h3>
      <p>Este es el component OlContainer</p>
    </OlContainer>
    <OlContainer :isFlexCol="true">
      <div class="w-full px-5 py-3">
        <OlMarkdownInput
          :label="'Documento'"
          :modelValue="markdownInput"
          @update:modelValue="markdownInput = $event"
        />
      </div>
    </OlContainer>
  </OlContainer>
</template>

<script>
import OlContainer from './components/ui/container/index.vue';
import OlMarkdownInput from './components/forms/MarkdownInput.vue';
import OlMarkdownDisplay from './components/ui/markdown-display/index.vue';

export default {
  name: 'App',
  components: {
    OlContainer,
    OlMarkdownInput,
    OlMarkdownDisplay,
  },
  data() {
    return {
      category: '',
      subcategory: '',
      description: '',
      markdownInput: '',
      status: '',
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
