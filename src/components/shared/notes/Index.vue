<template>
  <div :class="pianoContainerClass">
    <v-stage :config="configKonva">
      <v-layer>
        <track-field
          v-if="octaves && pianoWidth"
          :dimensions="pianoDimensions"
          :width="pianoWidth"
        />
        <bar-lines
          v-for="(displayNote, index) in displayNotes"
          :key="`${index}-note-line`"
          :bar="displayNote"
          :note="getNote(displayNote)"
          :width="pianoWidth"
        />
        <note-bar
          v-for="(displayNote, index) in displayNotes"
          :key="`${index}-note-bar`"
          :bar="displayNote"
          :note="getNote(displayNote)"
          :width="pianoWidth"
        />
        <player-field
          v-if="oct"
          :start="oct"
          :width="pianoWidth"
          :dimensions="pianoDimensions"
        ></player-field>
        <octave
          v-for="(octave, index) in octaves"
          :key="index"
          :octave="octave"
          :ref="`${octave.name}-octave`"
        />
      </v-layer>
    </v-stage>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Octave from '@/components/shared/notes/content/Octave';
import TrackField from '@/components/shared/notes/content/TrackField';
import { OctaveNames, pianoContainerClass } from '@/constants';
import NoteBar from '@/components/shared/NoteBar';
import PlayerField from './content/PlayerField';
import BarLines from './content/BarLines';

export default {
  name: 'Notes',
  components: {
    octave: Octave,
    'track-field': TrackField,
    'note-bar': NoteBar,
    'player-field': PlayerField,
    'bar-lines': BarLines,
  },
  data() {
    return {
      pianoContainerClass,
      OctaveNames,
    };
  },
  computed: {
    ...mapGetters([
      'displayNotes',
      'pianoWidth',
      'pianoHeight',
      'pianoDimensions',
    ]),
    configKonva() {
      return {
        width: this.pianoWidth,
        height: this.pianoHeight,
      };
    },
    octaves() {
      // console.log(this.pianoDimensions);
      return this.pianoDimensions?.octaves || [];
    },
    oct() {
      return this.octaves ? this.octaves[0] : {};
    },
  },
  mounted() {
    this.setPianoSize();
  },
  methods: {
    ...mapActions(['setPianoSize']),
    setChecked(octaveNumber, noteName) {
      try {
        this.$refs[`${octaveNumber}-octave`][0].setChecked(noteName);
      } catch (e) {
        console.error(
          `Error when trying to check "${noteName}" in "${octaveNumber}" octave`
        );
      }
    },
    setUnchecked(octaveNumber, noteName) {
      try {
        this.$refs[`${octaveNumber}-octave`][0].setUnchecked(noteName);
      } catch (e) {
        console.error(
          `Error when trying to uncheck "${noteName}" in "${octaveNumber}" octave`
        );
      }
    },
    getNote(bar) {
      const octave = this.pianoDimensions.octaves.find(
        (octave) => String(octave.name) === String(bar.octave)
      );

      return [...octave.notes.white, ...octave.notes.black].find(
        (note) => note.name.toUpperCase() === bar.pitch.toUpperCase()
      );
    },
  },
};
</script>

<style lang="scss">
@import '~@/styles';

.piano-container {
  width: 100%;
  height: 100%;
}
</style>
