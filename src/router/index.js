import Vue from 'vue';
import Router from 'vue-router';
import index from '@/components/index';
import Blog from '../views/Blog';
import About from '../views/About';
import PlayerPage from '../components/player/PlayerPage';
import Library from '../components/library/library';
import Favourites from '../components/Favourites.vue';
import ConfirmEmail from '../components/auth/ConfirmEmail';
import SongScreen from '../components/SongScreen.vue';
import EditProfile from '../components/EditProfile.vue';
import OldIndex from '../components/OldIndex';
import clear from '../components/clear';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: index,
    },
    {
      path: '/player',
      name: 'player',
      component: PlayerPage,
    },
    {
      path: '/library',
      name: 'library',
      component: Library,
    },
    {
      path: '/favourites',
      name: 'favourites',
      component: Favourites,
    },
    {
      path: '/confirm/:hash',
      name: 'confirm',
      component: ConfirmEmail,
    },
    {
      path: '/old',
      name: 'old',
      component: OldIndex,
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/song_screen',
      name: 'song_screen',
      component: SongScreen,
    },
    {
      path: '/edit_profile',
      name: 'edit_profile',
      component: EditProfile,
    },
    {
      path: '/clear',
      name: 'clear',
      component: clear,
    },
  ],
});
