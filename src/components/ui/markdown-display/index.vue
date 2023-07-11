<template>
  <div
    class="markdown-body rounded-md h-full p-3 mb-5 break-words text-left"
    v-html="compiledMarkdown"
  ></div>
</template>

<script>
import { marked } from 'marked';

export default {
  props: {
    content: {
      type: String,
      required: true,
    },
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.content || '');
    },
  },
};
</script>

<style lang="scss" scoped>
:deep(ol) {
  list-style-type: decimal;
  padding-left: 40px;
}

:deep(ul) {
  list-style-type: disc;
  padding-left: 40px;
}
</style>
