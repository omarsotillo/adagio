<template>
    <div id="map" v-if="this.latitude && this.longitude">

    </div>
</template>
<script>
  import GoogleMapsLoader from 'google-maps';
  import * as parameters from '../../api/parameters';
  import { mapState, mapActions } from 'vuex';

  export default{
    data() {
      return {};
    },
    computed: {
      ...mapState({
        latitude: state => state.Places.currentCity.latitude,
        longitude: state => state.Places.currentCity.longitude,
      }),
      ...mapActions([
        'setLatitude',
        'setLongitude',
      ]),
    },
    methods: {
      loadMap() {
          /* Setting Map getters */
        const latitude = parseInt(this.latitude, 10);
        const longitude = parseInt(this.longitude, 10);
        GoogleMapsLoader.KEY = parameters.apiGoogleKey;

        // Receives a field with information
        GoogleMapsLoader.load((google) => {
            /* eslint-disable no-new */
          new google.maps.Map(document.getElementById('map'), {
            center: { lat: latitude, lng: longitude },
            disableDefaultUI: true,
            draggable: false,
            scrollwheel: false,
            mapTypeControl: false,
            mapTypeId: 'satellite',
            navigationControl: false,
            scaleControl: false,
            zoom: 8,
          });
        });
      },
    },
    updated() {
      this.loadMap();
    },
    created() {
      this.loadMap();
    },
  };
</script>
<style lang="scss" scoped>
    #map {
        filter: grayscale(100);
        height: 100%;
        left: 0;
        opacity: 0.5;
        pointer-events: none;
        position: fixed !important;
        top: 0;
        width: 100%;
    }
</style>
