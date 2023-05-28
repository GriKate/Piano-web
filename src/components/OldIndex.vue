<template>
  <div class="d-flex flex-column h-100 py-5">
    <player @trigger="handleTrigger" @showModal="openModal" />
    <piano ref="piano" />
    <modal v-show="showModal" @close="closeModal"></modal>
  </div>
</template>

<script>
import LayoutPiano from '../layouts/LayoutPiano';
import Piano from './player/Piano';
import Player from './player/PlayerBar';
import Modal from './Modal';

export default {
  name: 'Index',
  components: {
    piano: Piano,
    player: Player,
    modal: Modal,
  },
  data() {
    return {
      showModal: false,
    };
  },
  created() {
    this.$emit('update:layout', LayoutPiano);
  },
  mounted() {
    // for testing purposes
    //this.$refs.notes.setChecked('3', 'B');
  },
  methods: {
    handleTrigger(note) {
      if (note.type === 'attack') {
        this.$refs.piano.$refs.notes.setChecked(note.octave, note.pitch);
      }
      if (note.type === 'release') {
        this.$refs.piano.$refs.notes.setUnchecked(note.octave, note.pitch);
        // console.log(note.duration);
      }
    },
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
  },
};
</script>

<style scoped></style>
