<template>
  <div class="lds-ring">
    <div ref="loaderChild"></div>
    <div ref="loaderChild"></div>
    <div ref="loaderChild"></div>
    <div ref="loaderChild"></div>
  </div>
</template>

<script>
export default {
  name: 'OlLoader',
  props: {
    theme: {
      type: String,
      required: false,
      default: 'light',
    },
  },
  mounted() {
    if (this.theme !== 'light') {
      const loaderChildren = this.$refs.loaderChild;
      Array.from(loaderChildren).forEach((child) => {
        child.style.borderColor = 'black transparent transparent transparent';
      });
    }
  },
};
</script>

<style lang="scss" scoped>
.lds-ring {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #a7f3d0;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #a7f3d0 transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
