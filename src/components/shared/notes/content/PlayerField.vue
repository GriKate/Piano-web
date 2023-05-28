<template>
  <v-rect
    :config="{
      x: 0,
      y: start.y,
      width: width,
      height: dimensions.trackHeight,
      fill: '#373737',
    }"
  />
</template>

<script>
export default {
  name: 'PlayerField',
  props: {
    start: { type: Object, required: true },
    width: { type: Number, required: true },
    dimensions: { type: Object, required: true },
  },
  // mounted() {
  //   console.log(this.start.y);
  // },
};
</script>

<style scoped></style>
