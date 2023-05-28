<template>
  <v-group>
    <v-rect
      :config="{
        x: note.x,
        y: note.y,
        width: note.width,
        height: note.height + 2,
        fill: '#373737',
        cornerRadius: [0, 0, 2, 2],
      }"
    />
    <v-rect
      :config="{
        x: note.x + 1,
        y: note.y,
        width: note.width - 2,
        height: note.height,
        fill: isChecked ? '#22DBE7' : '#505559',
        cornerRadius: [0, 0, 2, 2],
      }"
    />
  </v-group>
</template>

<script>
export default {
  name: 'BlackNote',
  props: {
    note: { type: Object, required: true },
  },
  data() {
    return {
      isChecked: false,
    };
  },
  methods: {
    setChecked() {
      this.isChecked = true;
    },
    setUnchecked() {
      this.isChecked = false;
    },
  },
};
</script>
