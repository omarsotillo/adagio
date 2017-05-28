<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
  import store from 'renderer/vuex/store';
  export default {
    store,
  };
</script>

<style>
    @import url(https://fonts.googleapis.com/css?family=Lato:300);

    body {
        margin: 0;
        padding: 0;
    }

    html {
        font-size: 100%;
    }
</style>
