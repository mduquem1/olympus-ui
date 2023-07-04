<template>
  <div class="form-control w-full">
    <label class="label" for="textareaInput">
      <span class="label-text">{{ label }}</span>
    </label>
    <textarea
      id="textareaInput"
      class="textarea textarea-bordered textarea-lg w-full h-full"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    ></textarea>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      message: String,
    },
    label: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: 'Escribe aquí...',
    },
  },
};
</script>
