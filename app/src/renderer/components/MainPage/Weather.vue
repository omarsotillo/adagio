<template>
    <div>
        <pre>{{ this.weather | json }}</pre>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span style="line-height: 36px;">Card name</span>
                <el-button style="float: right;" type="primary">Operation button</el-button>
            </div>
        </el-card>
    </div>
</template>
<script>
  import { mapGetters } from 'vuex';
  export default {
    computed: {
      ...mapGetters({
        weather: 'weather',
      }),
    },
    updated() {

    },
  };
</script>
<style>

</style>
