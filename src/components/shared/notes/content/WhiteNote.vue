<template>
  <v-group>
    <v-group ref="note">
      <v-rect
        :config="{
          x: note.x,
          y: note.y,
          width: note.width / 2,
          height: note.height + 5,
          cornerRadius: [0, 0, 0, 3],
          fillLinearGradientStartPoint: { x: 1, y: 0 },
          fillLinearGradientEndPoint: { x: 10, y: 0 },
          fillLinearGradientColorStops: [0, '#C4C4C4', 1, '#ECEDED'],
        }"
      />
      <v-rect
        :config="{
          x: note.x + note.width / 2 - 1,
          y: note.y,
          width: note.width / 2 + 1,
          height: note.height + 5,
          cornerRadius: [0, 0, 3, 0],
          fillLinearGradientStartPoint: { x: 3, y: 0 },
          fillLinearGradientEndPoint: { x: note.width / 2 - 1, y: 0 },
          fillLinearGradientColorStops: [0, '#ECEDED', 1, '#C4C4C4'],
        }"
      />
      <v-rect
        :config="{
          x: note.x + 2,
          y: note.y,
          width: note.width - 4,
          height: note.height,
          fill: isChecked ? '#22DBE7' : '#F8FCFF',
          cornerRadius: [0, 0, 3, 3],
          // shadowBlur: 5,
        }"
      />
      <v-text
        :config="{
          x: note.x + note.width / 2 - 3,
          y: note.y + note.height - 17,
          fontFamily: 'Noto Sans',
          fontSize: 12,
          text: note.name,
          fill: 'black',
        }"
      />
    </v-group>
  </v-group>
</template>

<script>
export default {
  name: 'WhiteNote',
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
