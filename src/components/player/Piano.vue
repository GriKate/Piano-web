<template>
  <div class="player-wrapper">
    <button class="back__button">
      <svg
        width="12"
        height="19"
        viewBox="0 0 12 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="back__icon"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10.7457 0.729888C10.2458 0.209962 9.41383 0.209962 8.9139 0.729888L0.481445 9.49957L8.9139 18.2692C9.41383 18.7892 10.2458 18.7892 10.7457 18.2692C11.2187 17.7774 11.2187 16.9997 10.7457 16.5079L4.00694 9.49957L10.7457 2.49128C11.2187 1.9994 11.2187 1.22177 10.7457 0.729888Z"
          fill="#181A1F"
        />
      </svg>
    </button>
    <div class="main-section">
      <b-container id="player" fluid class="main-container">
        <div class="d-flex flex-column h-100">
          <player-song-name />
          <div class="piano d-flex flex-column flex-grow-1">
            <notes ref="notes" />
          </div>
          <playerBar @trigger="handleTrigger" @showModal="openModal" />
          <!--    <modal v-show="showModal" @close="closeModal"></modal>-->
        </div>
      </b-container>
    </div>
  </div>
</template>

<script>
import Notes from '@/components/shared/notes/Index';
import PlayerSongName from './PlayerSongName';
import PlayerBar from './PlayerBar';

export default {
  name: 'Piano',
  components: {
    PlayerSongName,
    notes: Notes,
    playerBar: PlayerBar,
  },
  data() {
    return {
      showModal: false,
    };
  },
  mounted() {
    this.setMelodyName();
    this.setMelodyUrl();
  },
  methods: {
    handleTrigger(note) {
      if (note.type === 'attack') {
        this.$refs.notes.setChecked(note.octave, note.pitch);
      }
      if (note.type === 'release') {
        this.$refs.notes.setUnchecked(note.octave, note.pitch);
        // console.log(note.duration);
      }
    },
    getMelody() {
      return document.cookie.split('; ');
    },
    setMelodyName() {
      const arr = this.getMelody();
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].indexOf('melodyName') >= 0) {
          const name = arr[i].split('melodyName=')[1];
          this.$store.commit('mutateMelodyName', name);
        }
      }
    },
    setMelodyUrl() {
      const arr = this.getMelody();
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].indexOf('melodyUrl') >= 0) {
          const path = arr[i].split('melodyUrl=')[1];
          this.$store.commit('mutateMelodyPath', path);
        }
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

<style scoped lang="scss">
.player-wrapper {
  width: 1200px;
  margin: 0 auto;
}
.main-section {
  width: 100%;
  display: flex;
}
.main-container {
  overflow-y: hidden;
  padding: 0 !important;
  //min-height: 100vh;
  height: calc(100vh - 90px);
}
.fullscreen-player {
  height: 100vh;
  z-index: 200;
}
</style>
