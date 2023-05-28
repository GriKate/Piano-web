<template>
  <nav class="menu-left">
    <ul class="menu-left__list">
      <li class="menu-left__item">
        <router-link id="logo-tooltip" :to="{ name: 'home' }">
          <img
            :src="require('@/assets/logo2.svg')"
            alt="logo"
            class="menu-left__icon"
          />
        </router-link>
        <b-tooltip target="logo-tooltip" triggers="hover">
          Ultimate-piano helps you learn new piano pieces
        </b-tooltip>
      </li>
      <li class="menu-left__item">
        <ul class="menu-left__sub-list">
          <li class="menu-left__sub-item">
            <div
              :class="{ 'div-as-button': true, active: searchShown }"
              @click="$refs.search.show()"
            >
              <img
                id="search-tooltip"
                src="../../static/img/search.svg"
                alt="search"
                class="menu-left__icon"
              />
              <b-tooltip target="search-tooltip" triggers="hover">
                Find more pieces
              </b-tooltip>
            </div>
          </li>
          <router-link :to="{ name: 'favourites' }" class="menu-left__sub-item">
            <div :class="{ 'div-as-button': true, active: favouritesShown }">
              <img
                id="fav-tooltip"
                src="../../static/img/star.svg"
                alt="search"
                class="menu-left__icon"
              />
              <b-tooltip target="fav-tooltip" triggers="hover">
                Add to favorites
              </b-tooltip>
            </div>
          </router-link>
          <li class="menu-left__sub-item">
            <div
              :class="{ 'div-as-button': true, active: loginShown }"
              @click="$refs.login.show()"
            >
              <img
                id="login-tooltip"
                src="../../static/img/enter.svg"
                alt="search"
                class="menu-left__icon"
              />
              <b-tooltip target="login-tooltip" triggers="hover">
                Log In / Sign In
              </b-tooltip>
            </div>
          </li>
          <li class="menu-left__sub-item link">
            <router-link :to="{ name: 'blog' }">
              <img
                id="blog-tooltip"
                src="../../static/img/blog.svg"
                alt="search"
                class="menu-left__icon"
              />
              <b-tooltip target="blog-tooltip" triggers="hover">
                Latest piano news
              </b-tooltip>
            </router-link>
          </li>
        </ul>
      </li>
      <li class="menu-left__item">
        <router-link :to="{ name: 'about' }">
          <img
            id="about-tooltip"
            src="../../static/img/info.svg"
            alt="about"
            class="menu-left__icon"
          />
          <b-tooltip target="about-tooltip" triggers="hover">
            About us
          </b-tooltip>
        </router-link>
      </li>
    </ul>
    <premium ref="premium" @shown="premiumShown = $event" />
    <login ref="login" @shown="loginShown = $event" />
    <search ref="search" @shown="searchShown = $event" />
  </nav>
</template>

<script>
import Premium from '@/components/Premium';
import Favourites from '@/components/Favourites';
import Login from '@/components/Login';
import Search from '@/components/Search';

export default {
  name: 'MenuLeft',
  components: {
    premium: Premium,
    favourites: Favourites,
    login: Login,
    search: Search,
  },
  data() {
    return {
      premiumShown: false,
      favouritesShown: false,
      loginShown: false,
      searchShown: false,
    };
  },
};
</script>

<style scoped lang="scss">
.menu-left {
  position: absolute;
  top: 0;
  left: 0;
  width: 80px;
  height: 100vh;
  z-index: 10;
  display: flex;
  justify-content: center;
  background-color: white;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);

  ul {
    list-style-type: none;
    padding-left: 0;
  }

  .div-as-button {
    cursor: pointer;
    background-color: white;
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;

    &.active {
      background-color: gray;
    }
  }
}

.menu-left__list {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;
  margin-bottom: 25px;
}

.menu-left__sub-item {
  display: flex;
  justify-content: center;
  font-size: 16px;

  &.link {
    margin-top: 20px;
  }
}
</style>
