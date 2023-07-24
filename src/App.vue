<template>
  <img alt="Vue logo" src="./assets/vue.svg" />
  <h1>Welcome to OlympusUI</h1>
  <Container :isFlexCol="true">
    <h2>Container component</h2>
    <Container :isFlexCol="true">
      <h3>Hola</h3>
      <p>Este es el component container</p>
    </Container>
  </Container>
</template>

<script>
import Container from './components/ui/container/index.vue'
export default {
  name: 'App',
  components: {
    Container
  }
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
