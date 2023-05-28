<template>
  <div class="rated-songs-list">
    <div v-for="song in ratedSongs" :key="song.id" class="rated-songs-item">
      <div class="likes-count-block">
        <svg
          width="18"
          height="16"
          viewBox="0 0 18 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.7513 0.5C11.3013 0.5 9.90964 1.175 9.0013 2.24167C8.09297 1.175 6.7013 0.5 5.2513 0.5C2.68464 0.5 0.667969 2.51667 0.667969 5.08333C0.667969 8.23333 3.5013 10.8 7.79297 14.7L9.0013 15.7917L10.2096 14.6917C14.5013 10.8 17.3346 8.23333 17.3346 5.08333C17.3346 2.51667 15.318 0.5 12.7513 0.5ZM9.08464 13.4583L9.0013 13.5417L8.91797 13.4583C4.9513 9.86667 2.33464 7.49167 2.33464 5.08333C2.33464 3.41667 3.58464 2.16667 5.2513 2.16667C6.53464 2.16667 7.78464 2.99167 8.2263 4.13333H9.78464C10.218 2.99167 11.468 2.16667 12.7513 2.16667C14.418 2.16667 15.668 3.41667 15.668 5.08333C15.668 7.49167 13.0513 9.86667 9.08464 13.4583Z"
            fill="white"
          />
        </svg>
        <span class="likes-count">12</span>
      </div>
      <div class="card-mask"></div>
      <img src="../../assets/song-photo.svg" alt="photo" />
      <div class="card-icons">
        <div class="card-icons-item">
          <svg
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
        <div class="card-icons-item">
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
        </div>
        <div class="card-icons-item">
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
      <div class="rated-song-desc">
        <span class="rated-author-name">{{ song.author }}</span>
        <span class="rated-song-name">{{ song.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RatedSongs',
  data: () => ({
    ratedSongs: [
      {
        id: 1,
        name: 'Sonata № 14, “Moonlight”',
        author: 'Ludwig van Beethoven',
      },
      {
        id: 2,
        name: 'Sonata № 14, “Moonlight”',
        author: 'Ludwig van Beethoven',
      },
      {
        id: 3,
        name: 'Sonata № 14, “Moonlight”',
        author: 'Ludwig van Beethoven',
      },
      {
        id: 4,
        name: 'Sonata № 14, “Moonlight”',
        author: 'Ludwig van Beethoven',
      },
      {
        id: 5,
        name: 'Sonata № 14, “Moonlight”',
        author: 'Ludwig van Beethoven',
      },
    ],
  }),
};
</script>
