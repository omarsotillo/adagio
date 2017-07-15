import {
  SET_CURRENT_CITY_NAME,
  SET_CURRENT_CITY_ID,
  SET_LAT,
  SET_LONG } from '../mutation-types';

const state = {
  currentCity: {
    name: 'Egipto',
    place_id: 'ChIJgTwKgJcpQg0RaSKMYcHeNsQ',
    latitude: '11',
    longitude: '11',
  },
};
const getters = {};

const actions = {
  setCurrentCityName({ commit }, city) {
    commit(SET_CURRENT_CITY_NAME, { city });
  },
  setCurrentCityID({ commit }, id) {
    commit(SET_CURRENT_CITY_ID, { id });
  },
  setLatitude({ commit }, lat) {
    commit(SET_LAT, { lat });
  },
  setLongitude({ commit }, lng) {
    commit(SET_LONG, { lng });
  },

};

const mutations = {
  [SET_CURRENT_CITY_NAME](state, { city }) {
    state.currentCity.name = city;
  },
  [SET_CURRENT_CITY_ID](state, { id }) {
    state.currentCity.place_id = id;
  },
  [SET_LONG](state, { lng }) {
    state.currentCity.longitude = lng;
  },
  [SET_LAT](state, { lat }) {
    state.currentCity.latitude = lat;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
