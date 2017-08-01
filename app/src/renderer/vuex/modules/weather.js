import { SET_WEATHER } from '../mutation-types';

const state = {
  weather: {},
};
const getters = {
  weather: state => state.weather,
};
const actions = {
  setWeather({ commit }, weather) {
    commit(SET_WEATHER, { weather });
  },
};
const mutations = {
  [SET_WEATHER](state, { weather }) {
    state.weather = weather;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
