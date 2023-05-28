<template>
  <div class="library-container">
    <div class="library-top">
      <div class="lib-head">
        <span class="lib-head-item">Library</span>
        <a href="#" class="lib-head-item" @click="openSongSendForm()">
          Did not find the song?
        </a>
      </div>
      <label for="lib-search-input" class="search-input-wrapper">
        <img src="../../assets/search-icon.svg" alt="search" />
        <input
          id="lib-search-input"
          type="text"
          placeholder="Search by author or composition"
        />
      </label>
      <div class="dif-level-block">
        <span>Choose your level</span>
        <section class="level-btns">
          <a
            href="#"
            class="level-btns-item"
            @click="handleChooseLevel($event)"
          >
            Beginner
          </a>
          <a
            href="#"
            class="level-btns-item"
            @click="handleChooseLevel($event)"
          >
            Middle
          </a>
          <a
            href="#"
            class="level-btns-item"
            @click="handleChooseLevel($event)"
          >
            Advanced
          </a>
          <a
            href="#"
            class="level-btns-item"
            @click="handleChooseLevel($event)"
          >
            Professional
          </a>
        </section>
      </div>
      <div class="rated-songs-block">
        <span class="rated-songs-name">Most rated songs</span>
        <RatedSongs />
      </div>
    </div>
    <div class="library-bottom">
      <SongsList ref="SongsList" :melodies="melodies" />
    </div>
  </div>
</template>

<script>
import LayoutDefault from '@/layouts/LayoutDefault';
import '@/styles/library/library.css';
import SongsList from '@/components/SongsList.vue';
import RatedSongs from './ratedSongs.vue';
import tabMixin from '@/mixins/tabMixin';

export default {
  name: 'Library',
  components: { SongsList, RatedSongs },
  mixins: [tabMixin],
  data: () => ({
    melodies: [],
    prevLevel: null,
    logOutUrl: 'https://pepperfm.ru/api/v1/melodies',
    logInUrl: 'https://pepperfm.ru/api/v1/auth-melodies',
  }),
  created() {
    this.$emit('update:layout', LayoutDefault);
  },
  mounted() {
    this.setMelodies();
  },
  methods: {
    setMelodies() {
      if (!this.$store.getters.melodies.length) {
        this.getMelodies();
      } else {
        this.melodies = this.$store.getters.melodies;
      }
    },
    async getMelodies() {
      const access_token = localStorage.token;
      const url = access_token ? this.logInUrl : this.logOutUrl;
      try {
        const response = await this.$http.get(url, {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${access_token}`,
          },
        });
        this.melodies = response.data.data;
        this.$store.commit('mutateMelodies', response.data.data);
      } catch (e) {
        console.log(e);
      }
    },
    openSongSendForm() {
      this.$parent.show('libForm');
      // this.$parent.layout = LibraryForm;
      // console.log(this.$parent);
    },
    handleChooseLevel(event) {
      event.preventDefault();
      this.prevLevel && this.prevLevel.classList.remove('selected-level');
      this.prevLevel = event.target;
      event.target.classList.add('selected-level');
    },
  },
};
</script>
