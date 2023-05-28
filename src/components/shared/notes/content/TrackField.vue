<template>
  <v-group
    ref="track"
    :config="{ width: width, height: dimensions.trackHeight }"
  >
    <v-rect
      :config="{
        x: 0,
        width: width,
        height: dimensions.trackHeight,
        fill: '#373737',
      }"
    />
    <v-group
      v-for="(octave, index) in dimensions.octaves"
      :key="`${index}-octave`"
    >
      <v-rect
        v-if="octave.notes.white[2] && octave.notes.white[2].name === 'C'"
        :config="{
          x: octave.notes.white[0].x,
          width: calculateWidth(octave.notes.white),
          height: dimensions.trackHeight,
          fill: '#373737',
          stroke: '#c4c4c4',
          strokeWidth: 1,
        }"
      />
      <v-rect
        v-else
        :config="{
          x: octave.notes.white[0].x,
          width: calculateWidth(octave.notes.white),
          height: dimensions.trackHeight,
          fill: '#373737',
          stroke: '#c4c4c4',
          strokeWidth: 1,
        }"
      />
      <!--      <v-rect-->
      <!--        v-for="(note, index) in octave.notes.white"-->
      <!--        :key="`${index}-white-track`"-->
      <!--        :config="{-->
      <!--          x: note.x,-->
      <!--          width: note.width,-->
      <!--          height: dimensions.trackHeight,-->
      <!--          fill: '#373737',-->
      <!--          stroke: 'black',-->
      <!--          strokeWidth: 1,-->
      <!--        }"-->
      <!--      />-->
      <!--      <v-rect-->
      <!--        v-for="(note, index) in octave.notes.black"-->
      <!--        :key="`${index}-black-track`"-->
      <!--        :config="{-->
      <!--          x: note.x,-->
      <!--          width: note.width,-->
      <!--          height: dimensions.trackHeight,-->
      <!--          fill: '#212121',-->
      <!--        }"-->
      <!--      />-->
    </v-group>
    <!--    <lines :width="width" :height="dimensions.trackHeight" />-->
  </v-group>
</template>

<script>
import Lines from '@/components/shared/notes/content/Lines';

export default {
  name: 'Track',
  components: {
    lines: Lines,
  },
  props: {
    dimensions: { type: Object, required: true },
    width: { type: Number, required: true },
  },
  methods: {
    calculateWidth(whiteNotes) {
      return whiteNotes[0].width * whiteNotes.length;
    },
  },
};
</script>
