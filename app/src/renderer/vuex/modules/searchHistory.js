import { ADD_CITY } from '../mutation-types';
const state = {
  history: [],
};
const getters = {};
const actions = {
  addToHistory({ commit }, city) {
    commit(ADD_CITY, { city });
  },
};
const mutations = {
  ADD_CITY(state, { city }) {
    state.history.push(city);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
