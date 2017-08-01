<template>
    <div>
        <map-background></map-background>
        <el-row class="logo">
            <el-col :span="8" :offset="8">

            </el-col>
        </el-row>
        <el-row class="search">
            <el-col :span="8" :offset="8">
                <search></search>
            </el-col>
        </el-row>

        <el-row>
            <weather></weather>
        </el-row>
    </div>
</template>

<script>
  import MapBackground from './MainPage/MapBackgroud.vue';
  import Search from './MainPage/Search.vue';
  import Weather from './MainPage/Weather.vue';

  export default {
    components: {
      MapBackground,
      Search,
      Weather,
    },
    name: 'landing-page',
  };
</script>

<style scoped>
    .search{
    margin: 10px 0 0 10px;
}
</style>
