<template>
  <MidiPlayer @trigger="trigger" @showModal="showModal" />
</template>

<script>
import MidiPlayer from './MidiPlayer';
import Modal from '../Modal';

export default {
  name: 'PlayerBar',
  components: {
    MidiPlayer,
    Modal,
  },
  methods: {
    trigger(note) {
      this.$emit('trigger', note);
    },
    showModal() {
      this.$emit('showModal');
    },
  },
};
</script>

<style scoped></style>
