<template>
  <v-group ref="bar">
    // переместить линии на слой ниже табов, тк здесь линия отображается для
    каждой ноты в переборе, и нижние табы перекрываются линиями верхних табов в
    переборе. Линии отдельным компонентом ставим в index перед табами
    <!--    <v-line-->
    <!--      v-for="note in bar"-->
    <!--      :key="note.name"-->
    <!--      :config="{-->
    <!--        points: [0, tailHeight, width, tailHeight],-->
    <!--        stroke: 'black',-->
    <!--        strokeWidth: 1,-->
    <!--      }"-->
    <!--    />-->
    <v-rect
      v-if="tailHeight > barWidth"
      ref="tail"
      :config="{
        x: note.x + shift,
        width: barWidth,
        height: tailHeight,
        fill: '#22DBE7',
        opacity: 0.5,
        cornerRadius: 3,
      }"
    />
    <v-line
      v-if="tailHeight > barWidth"
      ref="tail-line"
      :config="{
        points: [
          note.x + shift + barWidth / 2,
          0,
          note.x + shift + barWidth / 2,
          tailHeight,
        ],
        stroke: '#22DBE7',
        strokeWidth: 2,
      }"
    />
    <v-rect
      ref="note-bar"
      :config="{
        x: note.x + shift,
        y: tailHeight - barWidth,
        width: barWidth,
        height: barWidth,
        fill: '#22DBE7',
        cornerRadius: 5,
      }"
    />
    <v-text
      v-if="!note.name.endsWith('#')"
      :config="{
        x: note.x + barWidth / 2 - 4 + shift,
        y: tailHeight - barWidth / 2 - 4,
        fontFamily: 'Noto Sans',
        fontSize: 12,
        text: note.name,
        fill: 'black',
      }"
    />
  </v-group>
</template>

<script>
import { showNotesTimeInterval, NoteNames, OctaveNames } from '@/constants';
import { mapGetters } from 'vuex';
import Konva from 'konva';

export default {
  name: 'NoteBar',
  props: {
    bar: { type: Object, required: true },
    note: { type: Object, required: true },
    width: { type: Number, required: true },
  },
  computed: {
    ...mapGetters(['currentTime', 'pianoHeight', 'pianoDimensions']),
    oneTickHeight() {
      return this.getOneTickHeight();
    },
    blackNoteWidth() {
      return this.getBlackNoteWidth();
    },
    barWidth() {
      return this.getBarWidth();
    },
    tailHeight() {
      return this.getTailHeight();
    },
    shift() {
      return this.getShift();
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
    getBlackNoteWidth() {
      return (this.note.width / 5) * 2;
    },
    getShift() {
      switch (this.note.name) {
        case NoteNames.A:
          if (String(this.bar.octave) !== String(OctaveNames.Octave0))
            return this.blackNoteWidth / 2;
          else return 0;

        case NoteNames.C:
        case NoteNames.F:
          return 0;

        case NoteNames.D:
        case NoteNames.G:
        case NoteNames.B:
        case NoteNames.E:
          return this.blackNoteWidth / 2;

        default:
          // for black notes
          return 0;
      }
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
    getOneTickHeight() {
      return this.pianoDimensions.trackHeight / showNotesTimeInterval;
    },
    noteBarY() {
      return (
        (this.currentTime - this.bar.time) * this.oneTickHeight -
        this.tailHeight
      );
    },
  },
};
</script>
