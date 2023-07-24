<template>
  <div class="form-control w-full h-full flex">
    <div class="w-full h-full">
      <div class="tabs mb-3">
        <a
          @click="closePreview"
          class="tab tab-bordered"
          :class="{ 'tab-active': !isPreview }"
        >
          {{ label }}
        </a>

        <a
          @click="openPreview"
          class="tab tab-bordered"
          :class="{ 'tab-active': isPreview }"
        >
          Preview
        </a>
      </div>
      <OlMarkdownDisplay v-show="isPreview" :content="renderMarkdown" />
      <OlTextareaInput
        v-show="!isPreview"
        class="markdown-input textarea textarea-bordered textarea-lg w-full h-full"
        :label="label"
        :modelValue="modelValue"
        @update:modelValue="(value) => $emit('update:modelValue', value)"
      />
    </div>
  </div>
</template>

<script>
import OlTextareaInput from './TextareaInput.vue';
import OlMarkdownDisplay from '../ui/markdown-display/index.vue';

export default {
  name: 'OlMarkdownInput',
  components: {
    OlTextareaInput,
    OlMarkdownDisplay,
  },
  data() {
    return {
      isPreview: false,
    };
  },
  props: {
    label: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: 'Escribe aquí...',
    },
    modelValue: {
      type: String,
      required: true,
    },
  },
  methods: {
    openPreview() {
      this.isPreview = true;
    },
    closePreview() {
      this.isPreview = false;
    },
    updateMessage(event) {
      this.$emit('update:modelValue', event.target.value);
    },
  },
  computed: {
    renderMarkdown() {
      return this.modelValue;
    },
  },
};
</script>
<style scoped lang="scss">
.markdown-input {
  & > * {
    height: 100%;
  }
}
</style>
