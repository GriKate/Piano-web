// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';
import router from './router';
import store from './store';
import VueKonva from 'vue-konva';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import SlideoutPanel from '@/components/shared/SlideoutPanel';
import axios from 'axios';
import VueAxios from 'vue-axios';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;

Vue.component('slideout-panel', SlideoutPanel);

Vue.use(Vuex);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(VueKonva);
Vue.use(VueAxios, axios);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
