<template>
  <p>Hello</p>
</template>

<script>
import LayoutDefault from '@/layouts/LayoutDefault';

export default {
  name: 'Clear',
  created() {
    this.$emit('update:layout', LayoutDefault);
  },
};
</script>

<style scoped></style>
