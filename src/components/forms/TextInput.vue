<template>
  <div class="form-control w-full max-w-xl">
    <label class="label" for="textInput">
      <span class="label-text">{{ label }}</span>
    </label>
    <input
      id="textInput"
      type="text"
      :placeholder="placeholder"
      class="input input-bordered w-full max-w-xl"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'OlTextInput',
  data() {
    return {
      text: '',
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
      message: String,
    },
  },
};
</script>
