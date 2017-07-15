import Vue from 'vue';
import Vuex from 'vuex';

import * as actions from './actions';
import * as getters from './getters';
import Places from './modules/places';
import SearchHistory from './modules/searchHistory';
import Weather from './modules/weather';
import App from './modules/app';

Vue.use(Vuex);

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    Places,
    SearchHistory,
    App,
    Weather,
  },
  strict: process.env.NODE_ENV !== 'production',
});
