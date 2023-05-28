<template>
  <div v-if="isShown" class="modal__container">
    <div class="shadow"></div>
    <div v-on-clickaway="hide" class="auth">
      <slot />
    </div>
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';
import '../../styles/auth.css';

export default {
  name: 'AuthModal',
  mixins: [clickaway],
  model: {
    prop: 'isShown',
    event: 'show',
  },
  props: {
    isShown: { type: Boolean, default: false },
  },
  methods: {
    hide() {
      this.$emit('show', false);
    },
  },
};
</script>

<style scoped></style>
