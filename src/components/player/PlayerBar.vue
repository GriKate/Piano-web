<template>
  <div class="player">
    <div class="song-line">
      <div class="duration__line"></div>
    </div>
    <div class="player__line">
      <div class="speed">
        <p class="speed__text">speed</p>
        <div class="speed__line">
          <div class="speed__line_handler"></div>
        </div>
        <p class="speed__text">original</p>
      </div>
      <MidiPlayer @trigger="trigger" @showModal="showModal" />
    </div>
  </div>
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

<style scoped>
.player {
  width: 100%;
  background: #303233;
  border-radius: 0px 0px 12px 12px;
  display: flex;
  flex-direction: column;
  /*justify-content: space-between;*/
  /*align-items: center;*/
  /*height: 30px;*/
  /*margin-bottom: 30px;*/
  /*background-color: white;*/
}
.song-line {
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
}
.duration__line {
  width: 100%;
  height: 10px;
  background-color: #23c6d0;
}
.player__line {
  width: 100%;
  padding: 10px 30px 10px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.speed {
  display: flex;
  align-items: center;
}
.speed__text {
  margin: 0;
  padding: 0;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 159.5%;
  color: #ffffff;
}
.speed__line {
  width: 150px;
  height: 2px;
  margin: 0 15px;
  position: relative;
  background-color: #23c6d0;
}
.speed__line_handler {
  position: absolute;
  width: 18px;
  height: 18px;
  left: calc(50% - 18px / 2 + 13.5px);
  top: calc(50% - 18px / 2);
  border-radius: 50%;
  background: #ffffff;
}
.buttons {
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.buttons__main {
  display: flex;
  align-items: center;
}
.buttons__other {
  display: flex;
}
.button__center {
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.play {
  width: 62px;
  height: 62px;
  position: relative;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 50%;
  background: #666666;
}
.play-icon {
  width: 30px;
  height: 30px;
  position: absolute;
  top: 17px;
  left: 15px;
}
.button__right {
  width: 50px;
  height: 50px;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.player__icon {
  height: 20px;
}
.song-name {
  display: flex;
  align-items: center;
}
.song__star {
  margin-right: 15px;
}
.song__name {
  font-family: 'Lora', serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 31px;
  color: #212121;
  margin-bottom: 0;
}
</style>
