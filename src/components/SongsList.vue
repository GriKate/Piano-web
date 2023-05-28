<template>
  <div class="all-songs-block">
    <span class="all-songs-name">All songs</span>
    <a href="#" class="songs-sort-name">
      <label for="dropdown-input" class="songs-sort-type">
        <span>{{ songsSortType }}</span>
        <svg viewBox="0 0 12 7" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11.2883 0.308069C11.1958 0.215366 11.0859 0.141818 10.9649 0.0916366C10.8439 0.0414552 10.7142 0.015625 10.5833 0.015625C10.4523 0.015625 10.3226 0.0414551 10.2016 0.0916366C10.0807 0.141818 9.97078 0.215366 9.87827 0.308069L5.99827 4.18807L2.11827 0.308069C1.93129 0.121091 1.6777 0.016048 1.41327 0.016048C1.14884 0.016048 0.895246 0.121091 0.708268 0.308069C0.521291 0.495046 0.416249 0.748642 0.416249 1.01307C0.416249 1.27749 0.521291 1.53109 0.708268 1.71807L5.29827 6.30807C5.39078 6.40077 5.50067 6.47432 5.62164 6.5245C5.74262 6.57468 5.8723 6.60051 6.00327 6.60051C6.13424 6.60051 6.26392 6.57468 6.38489 6.5245C6.50587 6.47432 6.61576 6.40077 6.70827 6.30807L11.2983 1.71807C11.6783 1.33807 11.6783 0.698069 11.2883 0.308069Z"
            fill="#51B9B9"
          />
        </svg>
      </label>
    </a>
    <input id="dropdown-input" type="checkbox" name="" />
    <div class="dropdown-block">
      <a href="#" class="dropdown-block-item">
        <option
          value="recently added"
          @click="switchSortType($event, (key = 'recently added'))"
        >
          Recently added
        </option>
      </a>
      <a href="#" class="dropdown-block-item">
        <option
          value="alphabetically"
          @click="switchSortType($event, (key = 'alphabetically'))"
        >
          Alphabetically
        </option>
      </a>
    </div>
    <div class="songs-list">
      <div v-for="melody in melodies" :key="melody.id" class="songs-list-item">
        <img :src="require('@/assets/song-photo.svg')" alt="photo" />
        <div class="melody-info">
          <span class="melody-author">{{
            melody.name.replace(/[-_]/g, ' ')
          }}</span>
          <span class="melody-name">{{
            melody.name.replace(/[-_]/g, ' ')
          }}</span>
        </div>
        <div class="melody-icons">
          <div
            class="melody-icons-item"
            @click="playMelody(melody.name, melody.id)"
          >
            <router-link :to="{ name: 'player' }" class="melody-icons-link">
              <svg
                width="23"
                height="21"
                viewBox="0 0 18 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 1.33203V18.6654"
                  stroke="#232327"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.6667 10L1.5 18.6667"
                  stroke="#232327"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.6667 9.9987L1.5 1.33203"
                  stroke="#232327"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </router-link>
          </div>
          <div class="melody-icons-item" @click="handleAddFavourite(melody)">
            <svg
              v-if="melody.favorite || page == `favorites`"
              width="22"
              height="21"
              viewBox="0 0 22 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8333 20.5315L9.2625 19.0832C3.68333 13.9594 0 10.5802 0 6.43287C0 3.05359 2.62167 0.398438 5.95833 0.398438C7.84333 0.398438 9.6525 1.28714 10.8333 2.69152C12.0142 1.28714 13.8233 0.398438 15.7083 0.398438C19.045 0.398438 21.6667 3.05359 21.6667 6.43287C21.6667 10.5802 17.9833 13.9595 12.4042 19.0942L10.8333 20.5315Z"
                fill="#EF5C9A"
              />
            </svg>
            <svg
              v-else-if="!melody.favorite"
              width="23"
              height="21"
              viewBox="0 0 23 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.3338 0.332031C14.4004 0.332031 12.5449 1.23203 11.3338 2.65425C10.1227 1.23203 8.2671 0.332031 6.33377 0.332031C2.91155 0.332031 0.222656 3.02092 0.222656 6.44314C0.222656 10.6431 4.00043 14.0654 9.72266 19.2654L11.3338 20.7209L12.9449 19.2543C18.6671 14.0654 22.4449 10.6431 22.4449 6.44314C22.4449 3.02092 19.756 0.332031 16.3338 0.332031ZM11.4449 17.6098L11.3338 17.7209L11.2227 17.6098C5.93377 12.8209 2.44488 9.65425 2.44488 6.44314C2.44488 4.22092 4.11154 2.55425 6.33377 2.55425C8.04488 2.55425 9.71154 3.65425 10.3004 5.17648H12.3782C12.956 3.65425 14.6227 2.55425 16.3338 2.55425C18.556 2.55425 20.2227 4.22092 20.2227 6.44314C20.2227 9.65425 16.7338 12.8209 11.4449 17.6098Z"
                fill="#232327"
              />
            </svg>
          </div>
          <div class="melody-icons-item">
            <svg
              width="23"
              height="21"
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 1L15 5M11 1V13V1ZM11 1L7 5L11 1Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1 15L1.621 17.485C1.72915 17.9177 1.97882 18.3018 2.33033 18.5763C2.68184 18.8508 3.11501 18.9999 3.561 19H18.439C18.885 18.9999 19.3182 18.8508 19.6697 18.5763C20.0212 18.3018 20.2708 17.9177 20.379 17.485L21 15"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SongsList',
  props: {
    melodies: { type: Array, required: true },
    page: { type: String, default: '' },
  },
  data: () => ({
    songsSortType: 'alphabetically',
    urlMidi: 'https://pepperfm.ru/api/v1/melodies/get-midi/',
    url: 'https://pepperfm.ru/api/v1/favorites',
    token: null,
  }),
  watch: {
    token() {
      this.token = localStorage.token;
      this.$parent.getMelodies();
    },
  },
  mounted() {
    this.setSongsSortType();
  },
  methods: {
    setSongsSortType() {
      const sortType = Array.from(document.querySelectorAll('option')).find(
        (el) => el.value == this.songsSortType
      );
      sortType.id = 'selected-sort-type';
    },
    switchSortType(event, key) {
      this.sortMelodies(key, this.melodies);
      event.preventDefault();
      this.songsSortType = key;
      const prevType = document.querySelector('#selected-sort-type');
      prevType.removeAttribute('id');
      event.target.id = 'selected-sort-type';
      this.closeSortTypesList();
    },
    sortMelodies(type, melodies) {
      type == 'alphabetically'
        ? (this.melodies = melodies
            .slice()
            .sort((a, b) => a.name.localeCompare(b.name)))
        : this.melodies;
    },
    closeSortTypesList() {
      const listBlockInput = document.querySelector('#dropdown-input');
      listBlockInput.checked = false;
    },
    async playMelody(name, id) {
      this.$store.commit('mutateMelodyName', name);
      this.$store.commit('mutateMelodyPath', this.urlMidi + id);
      document.cookie = 'melodyName=' + name + '; max-age=86400';
      document.cookie = 'melodyUrl=' + this.urlMidi + id + '; max-age=86400';
    },
    async handleAddFavourite(melody) {
      const access_token = localStorage.token;
      try {
        const response = await this.$http({
          method: 'POST',
          url: `${this.url}/${melody.id}`,
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${access_token}`,
          },
        });
        melody.favorite || this.page == 'favorites'
          ? this.$store.commit('removeFavourite', melody)
          : this.$store.commit('addFavourite', melody);
        this.$store.commit('changeMelodyStatus', melody);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>
