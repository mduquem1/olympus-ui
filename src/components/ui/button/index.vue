<template>
  <button class="btn my-20" @click="$emit('on-click-handle')" data-testid="btn">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'OlButton',
  props: {
    text: {
      type: String,
      default: 'Button',
    },
  },
};
</script>
