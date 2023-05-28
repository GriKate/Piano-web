<template>
  <div class="song">
    <div class="song__name">
      <p class="song__name_name">
        {{ artistName }}
        <span class="song__name_song">{{ songName }}</span>
      </p>
    </div>
    <div class="song__buttons">
      <button class="player__button">
        <svg
          width="26"
          height="27"
          viewBox="0 0 26 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="song__icon_like"
        >
          <path
            d="M17.5235 3.33203C15.7095 3.33203 13.9684 4.23203 12.832 5.65425C11.6956 4.23203 9.95446 3.33203 8.14039 3.33203C4.92927 3.33203 2.40625 6.02092 2.40625 9.44314C2.40625 13.6431 5.95099 17.0654 11.3202 22.2654L12.832 23.7209L14.3437 22.2543C19.7129 17.0654 23.2577 13.6431 23.2577 9.44314C23.2577 6.02092 20.7346 3.33203 17.5235 3.33203ZM12.9362 20.6098L12.832 20.7209L12.7277 20.6098C7.76506 15.8209 4.49139 12.6543 4.49139 9.44314C4.49139 7.22092 6.05525 5.55425 8.14039 5.55425C9.74595 5.55425 11.3098 6.65425 11.8624 8.17648H13.812C14.3541 6.65425 15.918 5.55425 17.5235 5.55425C19.6087 5.55425 21.1725 7.22092 21.1725 9.44314C21.1725 12.6543 17.8989 15.8209 12.9362 20.6098Z"
            fill="#232327"
          />
        </svg>
      </button>
      <button class="player__button">
        <svg
          width="22"
          height="20"
          viewBox="0 0 22 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="song__icon_share"
        >
          <path
            d="M11 1L15 5M11 1V13V1ZM11 1L7 5L11 1Z"
            stroke="#232327"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1 15L1.621 17.485C1.72915 17.9177 1.97882 18.3018 2.33033 18.5763C2.68184 18.8508 3.11501 18.9999 3.561 19H18.439C18.885 18.9999 19.3182 18.8508 19.6697 18.5763C20.0212 18.3018 20.2708 17.9177 20.379 17.485L21 15"
            stroke="#232327"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import '@/styles/piano.css';

export default {
  name: 'PlayerSongName',
  computed: {
    artistName() {
      const rawName = this.$store.getters.currentMelodyName
        ? this.$store.getters.currentMelodyName
        : this.$store.getters.defaultMelodyName;
      const re = new RegExp('_', 'g');
      const newName = rawName.replace(re, ' ');
      const name = newName.split(' - ', 1);
      return name[0] + ' - ';
    },
    songName() {
      const rawName = this.$store.getters.currentMelodyName
        ? this.$store.getters.currentMelodyName
        : this.$store.getters.defaultMelodyName;
      const re = new RegExp('_', 'g');
      const newName = rawName.replace(re, ' ');
      const name = newName.split(' - ');
      return name[1];
    },
  },
};
</script>

<style scoped></style>
