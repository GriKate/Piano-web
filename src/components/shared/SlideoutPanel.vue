<template>
  <div v-if="isShown" class="slideout-panel">
    <div class="shadow"></div>
    <div v-on-clickaway="hide" class="panel-body">
      <slot />
    </div>
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';

export default {
  name: 'SlideoutPanel',
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

<style scoped lang="scss">
.slideout-panel {
  .shadow {
    background-color: gray;
    height: 100vh;
    width: calc(100vw - 80px);
    position: absolute;
    opacity: 0.6;
    z-index: 9;
  }

  .panel-body {
    height: 100vh;
    width: 680px;
    background-color: white;
    position: absolute;
    left: 80px;
    box-shadow: inset 7px 0 9px -7px rgba(0, 0, 0, 0.5);
    z-index: 9;
  }
}
</style>
