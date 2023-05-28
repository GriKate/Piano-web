<template>
  <div class="menu">
    <div class="menu__wrapper">
      <div class="menu__container">
        <div class="menu__left">
          <div class="menu__logo">
            <router-link
              id="logo-tooltip"
              :to="{ name: 'home' }"
              class="menu__logo-link"
            >
              <img
                :src="require('@/assets/UP-logo.svg')"
                alt="logo"
                class="logo__img"
              />
            </router-link>
          </div>
          <div class="menu__search">
            <img
              :src="require('@/assets/search-icon1.svg')"
              alt="search"
              class="menu__search-icon"
              @click="showSearchDrop"
            />
            <div :class="{ 'drop-active': search }" class="search__drop">
              <div class="search__container">
                <div class="form__container">
                  <img
                    :src="require('@/assets/search-icon2.svg')"
                    alt="search"
                    class="menu__search-icon"
                    @click="showSearchDrop"
                  />
                  <form class="menu__search-form">
                    <input
                      v-model="searchName"
                      type="text"
                      class="menu__search-line"
                    />
                  </form>
                </div>
                <div
                  :class="{ 'prompt-active': searchName }"
                  class="prompt__container"
                >
                  <span class="search__prompt">You might like</span>
                  <ul
                    v-for="melody of melodiesData"
                    :key="melody.id"
                    class="prompt__variants"
                  >
                    <li class="prompt__song">
                      <a class="prompt__name">{{
                        getClearName(melody.name)
                      }}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="menu__right">
          <nav class="menu__list">
            <div class="submenu__container">
              <a href="" class="menu__link-dropdown">Community</a>
              <div class="arrow-button">
                <svg
                  class="arrow-icon"
                  width="12"
                  height="7"
                  viewBox="0 0 12 7"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.2883 0.308069C11.1958 0.215366 11.0859 0.141818 10.9649 0.0916366C10.8439 0.0414552 10.7142 0.015625 10.5833 0.015625C10.4523 0.015625 10.3226 0.0414551 10.2016 0.0916366C10.0807 0.141818 9.97078 0.215366 9.87827 0.308069L5.99827 4.18807L2.11827 0.308069C1.93129 0.121091 1.6777 0.016048 1.41327 0.016048C1.14884 0.016048 0.895246 0.121091 0.708268 0.308069C0.521291 0.495046 0.416249 0.748642 0.416249 1.01307C0.416249 1.27749 0.521291 1.53109 0.708268 1.71807L5.29827 6.30807C5.39078 6.40077 5.50067 6.47432 5.62164 6.5245C5.74262 6.57468 5.8723 6.60051 6.00327 6.60051C6.13424 6.60051 6.26392 6.57468 6.38489 6.5245C6.50587 6.47432 6.61576 6.40077 6.70827 6.30807L11.2983 1.71807C11.6783 1.33807 11.6783 0.698069 11.2883 0.308069Z"
                    fill="#9393A4"
                  />
                </svg>
              </div>
              <div class="submenu">
                <nav class="submenu__links">
                  <a href="" class="submenu__link">FAQ</a>
                  <a href="" class="submenu__link">About us</a>
                  <a href="" class="submenu__link">Our blog</a>
                </nav>
                <nav class="submenu__socials">
                  <a href="" class="submenu__social-link">
                    <svg
                      width="9"
                      height="16"
                      viewBox="0 0 9 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.39196 16V8.71352H7.85012L8.21551 5.86063H5.39196V4.04345C5.39196 3.22021 5.62133 2.65657 6.80285 2.65657H8.29997V0.113057C7.57154 0.0349924 6.83934 -0.00270088 6.10674 0.000150394C3.93395 0.000150394 2.44216 1.32658 2.44216 3.76163V5.85529H0V8.70819H2.4475V16H5.39196Z"
                        fill="#696A7B"
                      />
                    </svg>
                  </a>
                  <a href="" class="submenu__social-link">
                    <svg
                      width="18"
                      height="15"
                      viewBox="0 0 18 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.7874 1.71522C17.1333 2.00507 16.4306 2.20091 15.6918 2.28944C16.4541 1.83335 17.0243 1.11552 17.2962 0.269888C16.5801 0.695254 15.7963 0.994665 14.979 1.15511C14.4293 0.568249 13.7013 0.179272 12.908 0.0485635C12.1146 -0.0821448 11.3003 0.0527291 10.5915 0.432245C9.88261 0.811761 9.31889 1.41469 8.98781 2.14741C8.65674 2.88014 8.57684 3.70167 8.76051 4.48446C7.30945 4.4116 5.88993 4.03445 4.59406 3.37747C3.29819 2.7205 2.15495 1.79838 1.23852 0.670978C0.925169 1.21151 0.744992 1.83821 0.744992 2.50565C0.744643 3.1065 0.892606 3.69814 1.17576 4.22809C1.4589 4.75803 1.86848 5.2099 2.36815 5.54359C1.78867 5.52515 1.22197 5.36857 0.715224 5.08688V5.13388C0.715166 5.97659 1.00667 6.79337 1.54026 7.44563C2.07386 8.09788 2.81669 8.54544 3.64271 8.71235C3.10514 8.85784 2.54154 8.87927 1.99448 8.77502C2.22753 9.50013 2.6815 10.1342 3.29282 10.5885C3.90415 11.0428 4.64223 11.2945 5.40374 11.3085C4.11104 12.3233 2.51455 12.8737 0.871116 12.8713C0.579998 12.8714 0.289126 12.8544 0 12.8204C1.66818 13.893 3.61007 14.4622 5.59332 14.46C12.3069 14.46 15.977 8.89958 15.977 4.0771C15.977 3.92043 15.9731 3.76219 15.966 3.60551C16.6799 3.08924 17.2961 2.44995 17.7858 1.71757L17.7874 1.71522Z"
                        fill="#696A7B"
                      />
                    </svg>
                  </a>
                  <a href="" class="submenu__social-link">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.055 8.375C11.055 8.90505 10.8978 9.4232 10.6033 9.86393C10.3089 10.3047 9.8903 10.6482 9.40059 10.851C8.91089 11.0538 8.37203 11.1069 7.85216 11.0035C7.33229 10.9001 6.85476 10.6449 6.47995 10.27C6.10515 9.89524 5.8499 9.41771 5.7465 8.89784C5.64309 8.37797 5.69616 7.83911 5.899 7.34941C6.10185 6.8597 6.44535 6.44114 6.88607 6.14666C7.3268 5.85218 7.84495 5.695 8.375 5.695C9.08553 5.69582 9.76672 5.97844 10.2691 6.48086C10.7716 6.98328 11.0542 7.66447 11.055 8.375ZM16.75 4.69V12.06C16.7486 13.3034 16.254 14.4955 15.3748 15.3748C14.4955 16.254 13.3034 16.7486 12.06 16.75H4.69C3.44657 16.7486 2.25447 16.254 1.37524 15.3748C0.495998 14.4955 0.00141863 13.3034 0 12.06V4.69C0.00141863 3.44657 0.495998 2.25447 1.37524 1.37524C2.25447 0.495998 3.44657 0.00141863 4.69 0H12.06C13.3034 0.00141863 14.4955 0.495998 15.3748 1.37524C16.254 2.25447 16.7486 3.44657 16.75 4.69ZM12.395 8.375C12.395 7.57992 12.1592 6.80269 11.7175 6.14161C11.2758 5.48052 10.6479 4.96527 9.91339 4.661C9.17883 4.35674 8.37054 4.27713 7.59074 4.43224C6.81093 4.58736 6.09464 4.97022 5.53243 5.53243C4.97022 6.09464 4.58736 6.81093 4.43224 7.59074C4.27713 8.37054 4.35674 9.17883 4.661 9.91339C4.96527 10.6479 5.48052 11.2758 6.14161 11.7175C6.80269 12.1592 7.57992 12.395 8.375 12.395C9.4408 12.3938 10.4626 11.9699 11.2162 11.2162C11.9699 10.4626 12.3938 9.4408 12.395 8.375ZM13.735 4.02C13.735 3.82123 13.6761 3.62692 13.5656 3.46165C13.4552 3.29638 13.2982 3.16757 13.1146 3.0915C12.931 3.01543 12.7289 2.99553 12.5339 3.03431C12.339 3.07309 12.1599 3.16881 12.0194 3.30936C11.8788 3.44991 11.7831 3.62898 11.7443 3.82393C11.7055 4.01889 11.7254 4.22096 11.8015 4.4046C11.8776 4.58824 12.0064 4.7452 12.1717 4.85563C12.3369 4.96606 12.5312 5.025 12.73 5.025C12.9965 5.025 13.2522 4.91912 13.4406 4.73064C13.6291 4.54217 13.735 4.28654 13.735 4.02Z"
                        fill="#696A7B"
                      />
                    </svg>
                  </a>
                  <a href="" class="submenu__social-link">
                    <svg
                      width="17"
                      height="15"
                      viewBox="0 0 17 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.501 0.161391L0.554466 5.95493C-0.0470111 6.22473 -0.250447 6.76502 0.409089 7.05824L4.24353 8.28311L13.5147 2.52371C14.0209 2.16214 14.5392 2.25855 14.0932 2.6563L6.13053 9.90325L5.88041 12.9701C6.11208 13.4437 6.53628 13.4459 6.80687 13.2105L9.00987 11.1152L12.7829 13.9551C13.6592 14.4766 14.136 14.1401 14.3245 13.1843L16.7993 1.4055C17.0562 0.229005 16.6181 -0.289371 15.501 0.161391Z"
                        fill="#696A7B"
                      />
                    </svg>
                  </a>
                </nav>
              </div>
            </div>
            <router-link :to="{ name: 'library' }" class="menu__link"
              >Library</router-link
            >
            <div id="menu__auth" class="menu__auth menu-active">
              <a class="menu__link" @click="show('auth')">Log in</a>
              <a class="menu__link" @click="show('reg')">
                <div class="menu__link-purple">
                  <span class="white-text">Join us</span>
                </div>
              </a>
            </div>
            <div id="menu__user" class="menu__user">
              <router-link :to="{ name: 'favourites' }" class="menu__link"
                >Favourites</router-link
              >
              <div class="submenu__container">
                <a class="menu__link-dropdown">{{
                  this.$store.getters.userName
                }}</a>
                <div class="arrow-button">
                  <svg
                    class="arrow-icon"
                    width="12"
                    height="7"
                    viewBox="0 0 12 7"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.2883 0.308069C11.1958 0.215366 11.0859 0.141818 10.9649 0.0916366C10.8439 0.0414552 10.7142 0.015625 10.5833 0.015625C10.4523 0.015625 10.3226 0.0414551 10.2016 0.0916366C10.0807 0.141818 9.97078 0.215366 9.87827 0.308069L5.99827 4.18807L2.11827 0.308069C1.93129 0.121091 1.6777 0.016048 1.41327 0.016048C1.14884 0.016048 0.895246 0.121091 0.708268 0.308069C0.521291 0.495046 0.416249 0.748642 0.416249 1.01307C0.416249 1.27749 0.521291 1.53109 0.708268 1.71807L5.29827 6.30807C5.39078 6.40077 5.50067 6.47432 5.62164 6.5245C5.74262 6.57468 5.8723 6.60051 6.00327 6.60051C6.13424 6.60051 6.26392 6.57468 6.38489 6.5245C6.50587 6.47432 6.61576 6.40077 6.70827 6.30807L11.2983 1.71807C11.6783 1.33807 11.6783 0.698069 11.2883 0.308069Z"
                      fill="#9393A4"
                    />
                  </svg>
                </div>
                <div class="submenu">
                  <nav class="submenu__links">
                    <router-link
                      :to="{ name: 'edit_profile' }"
                      class="submenu__link"
                      >Edit</router-link
                    >
                    <a class="submenu__link" @click="exit">Log out</a>
                  </nav>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../styles/menu-bar.css';
import authMixin from '../mixins/authMixin';

export default {
  name: 'MenuBar',
  mixins: [authMixin],
  data() {
    return {
      url: 'https://pepperfm.ru/api/v1/melodies/search',
      urlMidi: 'https://pepperfm.ru/api/v1/melodies/get-midi/',
      melUrl: 'https://pepperfm.ru/api/v1/melodies',
      search: false,
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
      this.getMelody();
    },
  },
  mounted() {
    this.switchToUser();
    if (localStorage.token) {
      this.getUsername();
    }
  },
  methods: {
    showSearchDrop() {
      if (!this.search) {
        this.search = true;
      } else {
        // this.search = false;
        // open search page with all results
      }
    },
    switchToUser() {
      if (localStorage.token) {
        const authSection = document.getElementById('menu__auth');
        const userSection = document.getElementById('menu__user');
        if (!userSection.classList.contains('menu-active')) {
          authSection.classList.remove('menu-active');
          userSection.classList.add('menu-active');
        }
      }
    },
    exit() {
      // authMixin
      const status = this.logout(this.switchToAuth);
    },
    switchToAuth() {
      const authSection = document.getElementById('menu__auth');
      const userSection = document.getElementById('menu__user');
      if (!authSection.classList.contains('menu-active')) {
        authSection.classList.add('menu-active');
        userSection.classList.remove('menu-active');
      }
    },
    show(key) {
      this.$emit('show', key);
    },
    async getMelody() {
      const response = await this.$http
        .post(this.url, this.data)
        .then((res) => {
          this.melodiesData = res.data.data;
        });
    },
    getClearName(name) {
      const re = new RegExp('_', 'g');
      return name.replace(re, ' ');
    },
  },
};
</script>

<style scoped></style>
