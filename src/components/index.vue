<template>
  <div class="main-page-container">
    <main>
      <section class="introduce">
        <div class="introduce-wrapper">
          <article class="introduce-article">
            <h1 class="introduce-title">Ultimate Piano</h1>
            <p class="introduce-text">
              As we <span class="text-selection">already know,</span> a solar
              eclipse in many ways negates the close argument of perihelion.
              When it comes to galaxies, the ecliptic is possible
            </p>
            <router-link :to="{ name: 'library' }" class="choose-btn">
              Сhoose a song
            </router-link>
          </article>
          <div class="introduce-img-wrapper">
            <img
              :src="require('@/assets/mainPage/mainPage.png')"
              alt="Introduce image"
              class="introduce-img"
            />
          </div>
        </div>
      </section>
      <section class="guide">
        <div class="guide-preview">
          <div
            v-for="melody in guideMelodies"
            :key="melody.name"
            class="guide-preview-el"
          >
            <div class="album-preview-wrapper">
              <img :src="melody.Img" :alt="melody.name" class="album-preview" />
            </div>
            <article class="music-cred">
              <h3 class="music-author music-author-hover">
                {{ melody.authorName }}
              </h3>
              <p class="music-name music-name-hover">
                {{ melody.name }}
              </p>
            </article>
            <div class="guide-el-btns">
              <button class="like-btn">
                <i class="fa fa-heart" aria-hidden="true"></i>
              </button>
              <button class="share-btn" @click="openShareBlock($event)">
                Share
                <div class="share-block">
                  <div class="social-wrapper">
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                  </div>
                  <div class="social-wrapper">
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                  </div>
                  <div class="social-wrapper social-wrapper-hover">
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
        <article class="guide-article">
          <h2 class="guide-title">
            How it works?<span class="title-hint">quick guide</span>
          </h2>
          <p class="guide-text">
            Use the library to search for works and start exploring them
          </p>
          <p class="guide-text">
            We update our library with popular and
            <span class="text-selection">easy-to-learn</span>
            compositions
          </p>
        </article>
      </section>
      <section class="tabl">
        <article class="tabl-article">
          <h3 class="tabl-title guide-title">
            Tabulature
            <span class="title-hint">watch and repeat</span>
          </h3>
          <p class="guide-text tabl-text">
            <span class="text-selection">Navigate</span> with the tablature to
            understand which keys to press and how long to press
          </p>
        </article>
        <div class="empty-block">
          <div class="empty-block-content"></div>
        </div>
      </section>
      <section class="tools">
        <div class="tools-control-wrapper">
          <div class="tools-control"></div>
        </div>
        <article class="tools-article">
          <h3 class="tools-title guide-title">
            Tools<span class="title-hint">everything you need</span>
          </h3>
          <p class="guide-text tools-text">
            Use <span class="text-selection">tab management</span> tools to
            customize your playing
          </p>
        </article>
      </section>
      <section class="keyboard">
        <article class="keyboard-article">
          <h3 class="keyboard-title guide-title">
            Keyboard<span class="title-hint">quick action</span>
          </h3>
          <p class="guide-text keyboard-text">
            Use your keyboard to
            <span class="text-selection"> quickly manage</span> tablature
          </p>
        </article>
        <div class="keyboard-wrapper">
          <div class="keyboard-item"></div>
        </div>
      </section>
      <section class="join-us">
        <div class="join-us-btn-wrapper">
          <img
            :src="require('@/assets/mainPage/arrow.svg')"
            alt="arrow"
            class="join-us-arrow"
          />
          <button class="join-us-btn" @click="openModal()">Join</button>
        </div>
        <article class="join-us-article-article">
          <h3 class="join-us-title guide-title">
            Join us<span class="title-hint">and help us become better</span>
          </h3>
          <p class="guide-text join-us-text">
            Help us develop the service, send feedback,
            <span class="text-selection">share</span> songs on social networks,
            and <span class="text-selection">add</span> your favorite works to
            your “favorites”
          </p>
        </article>
      </section>
      <section class="faq">
        <h3 class="faq-title">Have any questions?</h3>
        <div class="faq-wrapper">
          <article class="faq-article">
            <h4 class="faq-article-title">Twitter</h4>
            <p class="faq-article-text">
              Ask questions, share thoughts and stay tuned
            </p>
            <router-link :to="{ name: 'home' }" class="faq-link">
              Open
            </router-link>
          </article>
          <article class="faq-article">
            <h4 class="faq-article-title">F.A.Q.</h4>
            <p class="faq-article-text">
              We have collected frequently asked questions so that you can
              figure it out on your own
            </p>
            <router-link :to="{ name: 'home' }" class="faq-link">
              Open
            </router-link>
          </article>
          <article class="faq-article">
            <h4 class="faq-article-title">About us</h4>
            <p class="faq-article-text">
              Find out who we are, how we got together and what we are working
              on
            </p>
            <router-link :to="{ name: 'home' }" class="faq-link">
              Open
            </router-link>
          </article>
        </div>
      </section>
    </main>
    <modal v-show="showModal" @close="closeModal" />
  </div>
  <!-- <div class="d-flex flex-column h-100 py-5">
    <player @trigger="handleTrigger" @showModal="openModal" />
    <piano ref="piano" />
  </div> -->
</template>

<script>
import LayoutDefault from '../layouts/LayoutDefault';
import '../styles/mainPage/mainPage.css';
import '../styles/mainPage/reset.css';
// import Piano from '../components/Piano';
// import Player from './Player';

import Modal from './Modal';
import firstImg from '../assets/mainPage/guide1.png';
import secImg from '../assets/mainPage/guide2.png';
import thirdImg from '../assets/mainPage/guide3.png';

export default {
  name: 'Index',
  components: {
    Modal,
  },
  data: () => ({
    guideMelodies: [
      {
        Img: firstImg,
        authorName: 'Ludwig van Beethoven',
        name: 'Sonata № 14, “Moonlight”',
      },
      {
        Img: secImg,
        authorName: 'Yiruma',
        name: 'River Flows in You',
      },
      {
        Img: thirdImg,
        authorName: 'Frédéric Chopin',
        name: 'Prelude, Op. 28, No. 4',
      },
    ],
    prevShareBlock: null,
    showModal: false,
  }),
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
    openShareBlock(e) {
      const shareBlock = e.target.querySelector('.share-block');
      if (shareBlock) {
        if (this.prevShareBlock == shareBlock) {
          shareBlock.classList.contains('visible-share-block')
            ? shareBlock.classList.remove('visible-share-block')
            : shareBlock.classList.add('visible-share-block');
        } else {
          this.prevShareBlock &&
            this.prevShareBlock.classList.remove('visible-share-block');
          shareBlock.classList.add('visible-share-block');
        }
        this.prevShareBlock = shareBlock;
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
