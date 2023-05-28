<template>
  <div class="song-screen_container">
    <div class="song-info">
      <h3 class="song-name">Sonate No. 14, “Moonlight” 1st Movement</h3>
      <p class="song-description">
        The first Movement of Ludwig van Beethoven's Moonlight Sonata. The
        movement opens with an octave in the left hand and a triplet figuration
        in the right. A melody that Hector Berlioz called a "lamentation",
        mostly by the right hand, is played against an accompanying ostinato
        triplet rhythm, simultaneously played by the right hand. The movement is
        played pianissimo or "very quietly", and the loudest it gets is mezzo
        forte or "moderately loud". The adagio sostenuto has made a powerful
        impression on many listeners; for instance, Berlioz said of it that it
        "is one of those poems that human language does not know how to
        qualify". Beethoven's student Carl Czerny called it "a nocturnal scene,
        in which a mournful ghostly voice sounds from the distance". The
        movement was very popular in Beethoven's day, to the point of
        exasperating the composer himself, who remarked to Czerny, "Surely I've
        written better things."
        <span class="song-desc_open-btn" @click="handleOpenSongDesc($event)">
          {{ openDesc ? 'close' : 'read more' }}
        </span>
      </p>
    </div>
    <div class="might-like">
      <span>You might like</span>
      <RatedSongs />
    </div>
  </div>
</template>

<script>
import LayoutDefault from '../layouts/LayoutDefault.vue';
import RatedSongs from './library/ratedSongs.vue';

export default {
  name: 'SongScreen',
  components: { RatedSongs },
  data: () => ({
    openDesc: false,
  }),
  created() {
    this.$emit('update:layout', LayoutDefault);
  },
  methods: {
    handleOpenSongDesc(event) {
      const description = event.target.parentElement;
      this.openDesc
        ? description.classList.remove('opened-song_desc')
        : description.classList.add('opened-song_desc');
      this.openDesc = !this.openDesc;
    },
  },
};
</script>

<style scoped>
.song-screen_container {
  padding: 0 156px;
  margin-bottom: 100px;
}
.song-info {
  max-width: 1041px;
  text-align: left;
  padding: 0 6px;
}
.song-name {
  font-family: 'Archivo', sans-serif;
  font-weight: bold;
  font-size: 28px;
  line-height: 140%;
  letter-spacing: 0.02em;
  color: #232327;
  margin-bottom: 20px;
}
.song-description {
  position: relative;
  font-family: 'Noto Sans', sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 160%;
  color: #232327;
  max-height: 172px;
  overflow: hidden;
  padding-bottom: 48px;
}
.song-description::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 80px;
  bottom: 0;
  background: linear-gradient(
    360deg,
    #ffffff 40.19%,
    rgba(255, 255, 255, 0) 119.01%
  );
}
.song-desc_open-btn {
  position: absolute;
  bottom: 0;
  left: 0;
  font-family: 'Noto Sans', sans-serif;
  font-size: 18px;
  line-height: 140%;
  letter-spacing: 0.02em;
  color: #3e9398;
  cursor: pointer;
  margin-bottom: 13px;
}
.opened-song_desc {
  max-height: 100%;
}
.opened-song_desc::before {
  content: none;
}
.might-like {
  margin-top: 113px;
}
.might-like span {
  font-family: 'Archivo', sans-serif;
  font-weight: bold;
  font-size: 28px;
  line-height: 140%;
  letter-spacing: 0.02em;
  color: #232327;
  display: block;
  text-align: left;
}
</style>
