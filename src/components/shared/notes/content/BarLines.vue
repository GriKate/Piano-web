<template>
  <v-group ref="bar">
    <v-line
      v-for="note in bar"
      :key="note.name"
      :config="{
        points: [0, tailHeight, width, tailHeight],
        stroke: 'black',
        strokeWidth: 1,
      }"
    />
  </v-group>
</template>

<script>
import { showNotesTimeInterval, NoteNames, OctaveNames } from '@/constants';
import { mapGetters } from 'vuex';
import Konva from 'konva';

export default {
  name: 'BarLines',
  props: {
    bar: { type: Object, required: true },
    note: { type: Object, required: true },
    width: { type: Number, required: true },
  },
  computed: {
    ...mapGetters(['currentTime', 'pianoHeight', 'pianoDimensions']),
    tailHeight() {
      return this.getTailHeight();
    },
    oneTickHeight() {
      return this.getOneTickHeight();
    },
    barWidth() {
      return this.getBarWidth();
    },
    blackNoteWidth() {
      return this.getBlackNoteWidth();
    },
  },
  mounted() {
    const node = this.$refs['bar'].getNode();
    const anim = new Konva.Animation((frame) => {
      node.y(this.noteBarY());
    }, node.getLayer());
    anim.start();
  },
  methods: {
    getTailHeight() {
      const tail = this.bar.duration * this.oneTickHeight;
      return tail > this.barWidth ? tail : this.barWidth;
    },
    getOneTickHeight() {
      return this.pianoDimensions.trackHeight / showNotesTimeInterval; // ... / 5
    },
    noteBarY() {
      return (
        (this.currentTime - this.bar.time) * this.oneTickHeight -
        this.tailHeight
      );
    },
    getBlackNoteWidth() {
      return (this.note.width / 5) * 2;
    },
    getBarWidth() {
      switch (this.note.name) {
        case NoteNames.A:
          if (String(this.bar.octave) !== String(OctaveNames.Octave0))
            return this.note.width - this.blackNoteWidth;
          else return this.note.width - this.blackNoteWidth / 2;

        case NoteNames.B:
        case NoteNames.F:
        case NoteNames.E:
          return this.note.width - this.blackNoteWidth / 2;

        case NoteNames.C:
          if (String(this.bar.octave) !== String(OctaveNames.Octave8))
            return this.note.width - this.blackNoteWidth / 2;
          else return this.note.width;

        case NoteNames.D:
        case NoteNames.G:
          return this.note.width - this.blackNoteWidth;

        default:
          // for black notes
          return this.note.width;
      }
    },
  },
};
</script>

<style scoped></style>
