<template>
  <v-group ref="lines">
    <v-line
      v-for="index in linesCount"
      :key="index"
      :config="{
        points: [0, lineThickness * index, width, lineThickness * index],
        stroke: '#484848',
        strokeWidth: 1,
      }"
    />
  </v-group>
</template>

<script>
import { linesCount } from '@/constants';

export default {
  name: 'Lines',
  props: {
    height: { type: Number, required: true },
    width: { type: Number, required: true },
  },
  data() {
    return {
      linesCount,
    };
  },
  computed: {
    lineThickness() {
      return this.height / linesCount;
    },
  },
};
</script>

<style scoped></style>
