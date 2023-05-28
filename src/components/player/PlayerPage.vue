<template>
  <piano ref="piano" />
</template>

<script>
import LayoutDefault from '@/layouts/LayoutDefault';
import Piano from './Piano';
import Modal from '../Modal';
import '@/styles/library/library.css';
import '@/styles/piano.css';

export default {
  name: 'Index',
  components: {
    piano: Piano,
    modal: Modal,
  },
  data() {
    return {
      showModal: false,
    };
  },
  created() {
    this.$emit('update:layout', LayoutDefault);
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
