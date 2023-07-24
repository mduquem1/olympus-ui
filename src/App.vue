<template>
  <img alt="Vue logo" src="./assets/vue.svg" />
  <h1>Welcome to OlympusUI</h1>
  <OlContainer :isFlexCol="true">
    <h2>OlContainer component</h2>
    <OlContainer :isFlexCol="true">
      <h3>Hola</h3>
      <p>Este es el component OlContainer</p>
    </OlContainer>
  </OlContainer>
</template>

<script>
import OlContainer from './components/ui/container/index.vue';
export default {
  name: 'App',
  components: {
    OlContainer,
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
