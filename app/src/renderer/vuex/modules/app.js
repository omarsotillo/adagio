import { CHANGE_STATE } from '../mutation-types';

const state = {
  appState: 'Started',
  message: 'Recently started',
  error: false,
};
const getters = {};
const actions = {
  changeAppState({ commit }, payload) {
    commit(CHANGE_STATE, { payload });
  },
};
const mutations = {
  CHANGE_STATE(state, { payload }) {
    state.appState = payload.appState;
    state.message = payload.message;
    state.error = !(payload.error !== 'undefined');
  },
};

export default{
  state,
  getters,
  actions,
  mutations,
};
