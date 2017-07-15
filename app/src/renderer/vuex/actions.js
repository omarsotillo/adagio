import {
  SET_CURRENT_CITY_ID,
  SET_LONG,
  SET_CURRENT_CITY_NAME,
  SET_LAT,
  ADD_CITY,
  CHANGE_STATE,
  SET_WEATHER,
} from './mutation-types';
import axios from 'axios';
import * as parameters from '../api/parameters';
import store from './store';

export const fetchCoordinates = ({ commit }, location) => {
  axios({
    method: 'get',
    url: 'https://maps.googleapis.com/maps/api/geocode/json?',
    params: {
      address: location,
      key: parameters.apiGoogleKey,
    },
  }).then((response) => {
    const cityID = response.data.results[0].place_id;
    const latitudeFromAPI = response.data.results[0].geometry.location.lat;
    const longitudeFromAPI = response.data.results[0].geometry.location.lng;

    // Setting variables in the store
    commit(SET_CURRENT_CITY_NAME, { city: location });
    commit(SET_CURRENT_CITY_ID, { id: cityID });
    commit(SET_LAT, { lat: latitudeFromAPI });
    commit(SET_LONG, { lng: longitudeFromAPI });

    const cityToBeAdded = {
      name: location,
      place_id: cityID,
      latitude: latitudeFromAPI,
      longitude: longitudeFromAPI,
    };
    // Adding city to the history
    commit(ADD_CITY, { city: cityToBeAdded });
    commit(CHANGE_STATE, {
      payload: {
        appState: 'Loaded',
        message: 'City loaded properly',

      },
    });
  }).catch(error => {
    commit(CHANGE_STATE, {
      payload: {
        appState: 'Error loading the city',
        message: error,
        error: true,
      },
    });
  });
};
export const fetchWeather = async ({ commit }) => {
// eslint-disable-next-line no-console
  console.log(store.state.Places.currentCity.latitude);
// eslint-disable-next-line no-console
  console.log(store.state.Places.currentCity.longitude);
  axios({
    method: 'get',
    url: 'http://api.openweathermap.org/data/2.5/weather?',
    params: {
      lat: store.state.Places.currentCity.latitude,
      lon: store.state.Places.currentCity.longitude,
      appid: parameters.apiOpenWeatherMapKey,
    },
  }).then((response) => {
    const weatherFromAPI = response.data;
    commit(SET_WEATHER, { weather: weatherFromAPI });
  }).catch((error) => {
    commit(CHANGE_STATE, {
      payload: {
        appState: 'Error loading the weather',
        message: error,
        error: true,
      },
    });
  });
};
