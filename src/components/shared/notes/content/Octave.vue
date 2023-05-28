<template>
  <v-group>
    <white-note
      v-for="(note, index) in octave.notes.white"
      :ref="note.name"
      :key="`${index}-white`"
      :note="note"
    />
    <black-note
      v-for="(note, index) in octave.notes.black"
      :ref="note.name"
      :key="`${index}-black`"
      :note="note"
    />
  </v-group>
</template>

<script>
import WhiteNote from '@/components/shared/notes/content/WhiteNote';
import BlackNote from '@/components/shared/notes/content/BlackNote';

export default {
  name: 'Octave',
  components: {
    'white-note': WhiteNote,
    'black-note': BlackNote,
  },
  props: {
    octave: { type: Object, required: true },
  },
  methods: {
    setChecked(noteName) {
      this.$refs[noteName][0].setChecked();
    },
    setUnchecked(noteName) {
      this.$refs[noteName][0].setUnchecked();
    },
  },
};
</script>
