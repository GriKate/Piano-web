<template>
  <slideout-panel v-model="isShown">
    <div class="pt-5">
      <h3 class="fav-title">Search tab catalog</h3>
      <b-form-input
        v-model="searchName"
        class="search"
        placeholder="Search"
      ></b-form-input>
      <div class="songs">
        <div v-for="melody of melodiesData" :key="melody.id" class="song__item">
          <img
            src="../../static/img/star_small.svg"
            alt="favourite"
            class="song__icon"
          />
          <p class="song__name" @click="getMidi(melody.name, melody.id)">
            {{ getClearName(melody.name) }}
          </p>
        </div>
      </div>
    </div>
  </slideout-panel>
</template>

<script>
import tabMixin from '@/mixins/tabMixin';

export default {
  name: 'Search',
  mixins: [tabMixin],
  data() {
    return {
      // url: 'http://up-back.pepperfm.beget.tech/api/melodies/search',
      // urlMidi: 'http://up-back.pepperfm.beget.tech/api/melodies/get-midi/',
      url: 'https://pepperfm.ru/api/v1/melodies/search',
      urlMidi: 'https://pepperfm.ru/api/v1/melodies/get-midi/',
      letterURL: 'https://pepperfm.ru/api/v1/melodies/first-letter',
      searchName: '',
      melodiesData: [],
      data: {
        text: '',
      },
    };
  },
  watch: {
    searchName() {
      this.data.text = this.searchName;
      this.searchMelody();
    },
  },
  methods: {
    async searchMelody() {
      this.removePrevLetterClass();
      const response = await this.$http
        .post(this.url, this.data)
        .then((res) => {
          this.melodiesData = res.data.data;
        });
    },
    async getMidi(name, id) {
      this.$store.commit('mutateMidiName', name);
      this.$store.commit('mutateMidiPath', this.urlMidi + id);
      this.hideSearchPanel();
    },
    getClearName(name) {
      const re = new RegExp('_', 'g');
      return name.replace(re, ' ');
    },
    hideSearchPanel() {
      this.isShown = false;
    },
    async filterMelodies(event) {
      this.setCurrentLetter(event);
      try {
        const response = await this.$http.post(this.letterURL, {
          text: event.target.dataset.letter,
        });
        this.melodiesData = response.data.data;
      } catch (e) {
        console.log(e);
      }
    },
    setCurrentLetter(event) {
      this.removePrevLetterClass();
      const letter = event.target;
      letter.classList.add('current-letter-category');
    },
    removePrevLetterClass() {
      const prevLetter = document.querySelector('.current-letter-category');
      prevLetter && prevLetter.classList.remove('current-letter-category');
    },
  },
};
</script>

<style scoped>
.fav-title {
  display: flex;
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
  margin-left: 30px;
}
.songs {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 25px;
}
.song__item {
  display: flex;
}
.song__name {
  display: block;
  font-weight: 400;
  font-size: 14px;
  height: 20px;
  margin-top: 17px;
  margin-left: 10px;
  cursor: pointer;
}
.search {
  margin-left: 30px;
  width: 600px;
}
</style>
