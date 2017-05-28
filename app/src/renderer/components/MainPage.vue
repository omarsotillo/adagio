<template>
    <div>
        <map-background></map-background>
        <search></search>
    </div>
</template>

<script>
  import MapBackground from './MainPage/MapBackgroud.vue';
  import Search from './MainPage/Search.vue';

  export default {
    components: {
      MapBackground,
      Search,
    },
    name: 'landing-page',
  };
</script>

<style scoped>

</style>
