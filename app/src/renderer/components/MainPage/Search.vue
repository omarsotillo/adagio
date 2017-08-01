<template>
    <div id="algoliaPlaces">
        <input type="text" id="address-input" name="address-input" placeholder="Introduce the place you want the weather..."/>
    </div>
</template>
<script>
  import places from 'places.js';
  export default{
    data() {
      return {};
    },
    computed: {
      inputQueryDOM() {
        return document.querySelector('#address-input');
      },
    },
    methods: {
      placesAutocomplete() {
        const placesAutocomplete = places({
          container: this.inputQueryDOM,
          style: true,
          useDeviceLocation: true,
          type: 'city',
        });

        placesAutocomplete.on('change',
          () => {
            const inputCity = this.inputQueryDOM.value;
            const payload = {
              appState: 'Loading',
              message: 'Loading',
            };
            this.$store.dispatch('changeAppState', payload);
            this.$store.dispatch('fetchWeather', inputCity);
          },
        );
      },
    },
    mounted() {
      this.placesAutocomplete();
    }
    ,
  }
  ;
</script>
<style>
    /* Main input wrapper */
    .algolia-places {
        max-width: 500px;
        position: fixed;

    }

    /* The algolia-places input */
    .ap-input, .ap-hint {
    }

    /* The style of the svg icons when the input is on hover */
    .ap-input:hover ~ .ap-input-icon svg,
    .ap-input:focus ~ .ap-input-icon svg,
    .ap-input-icon:hover svg {
    }

    /* The dropdown style */
    .ap-dropdown-menu {
    }

    /* The suggestions style */
    .ap-suggestion {
    }

    /* The highlighted names style */
    .ap-suggestion em {
    }

    /* The addresses style */
    .ap-address {
    }

    /* The icons of each suggestions ( can be a building or a pin ) */
    .ap-suggestion-icon {
    }

    /* The style of the svg inside the .ap-suggestion-icon */
    .ap-suggestion-icon svg {
    }

    /* The icons inside the input ( can be a pin or a cross ) */
    .ap-input-icon {
    }

    /* The style of the svg inside the .ap-input-icon */
    .ap-input-icon svg {
    }

    /* .a-cursor is the class a suggestion go on hover */
    .ap-cursor {
    }

    /* The style of the svg icon, when the .ap-suggestion is on hover */
    .ap-cursor .ap-suggestion-icon svg {
    }

    /* The styles of the Algolia Places input footer */
    .ap-footer {
    }

    /* The styles of the Algolia Places input footer links */
    .ap-footer a {
    }

    /* The styles of the Algolia Places input footer svg icons */
    .ap-footer a svg {
    }

    /* The styles of the Algolia Places input footer on hover */
    .ap-footer:hover {
    }
</style>
