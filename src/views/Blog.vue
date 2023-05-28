<template>
  <iframe
    src="https://ultimate-piano.blogspot.com/"
    title="The Ultimate-Piano Blog"
    height="100%"
    width="100%"
    frameBorder="0"
  ></iframe>
</template>

<script>
import LayoutPiano from '../layouts/LayoutPiano';

export default {
  name: 'Blog',
  created() {
    this.$emit('update:layout', LayoutPiano);
  },
};
</script>

<style scoped></style>
