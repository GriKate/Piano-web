<template>
  <div class="fav-block">
    <h2 class="fav-title">{{ this.$store.getters.userName }} favorites</h2>
    <SongsList ref="SongsList" :melodies="melodies" page="favorites" />
  </div>
</template>

<script>
import tabMixin from '@/mixins/tabMixin';
import LayoutDefault from '../layouts/LayoutDefault.vue';
import SongsList from './SongsList.vue';
export default {
  name: 'Favourites',
  components: { SongsList },
  mixins: [tabMixin],
  data: () => ({
    melodies: [],
    url: 'https://pepperfm.ru/api/v1/favorites',
  }),
  created() {
    this.$emit('update:layout', LayoutDefault);
  },
  mounted() {
    this.setFavourites();
  },
  methods: {
    setFavourites() {
      if (!this.$store.getters.favourites.length) {
        this.getFavourites();
      } else {
        this.melodies = this.$store.getters.favourites;
      }
    },
    async getFavourites() {
      const access_token = localStorage.token;
      try {
        const response = await this.$http.get(this.url, {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${access_token}`,
          },
        });
        this.melodies = response.data.data;
        this.$store.commit('mutateFavourites', response.data.data);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style scoped>
.fav-block {
  padding: 0 120px;
  margin-bottom: 150px;
}
.fav-title {
  font-family: 'Archivo';
  font-weight: bold;
  font-size: 56px;
  line-height: 140%;
  letter-spacing: 0.02em;
  color: #232327;
  text-align: left;
  margin: 36px 0 32px 36px;
}
</style>
