<template>
  <div
    class="container min-w-full h-full"
    :class="isFlexCol && 'page-container__cols'"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'OlContainer',
  props: {
    isFlexCol: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-between;

  &__cols {
    flex-direction: column;
  }
}
</style>
