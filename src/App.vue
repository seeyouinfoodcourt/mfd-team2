<template>
  <NavigationTop/>


<router-view></router-view>

  <NavigationBottom />
</template>

<script>

  import NavigationTop from './layout/NavigationTop.vue';
  import NavigationBottom from './layout/NavigationBottom.vue';

  export default {
    name: 'App',
    components: {
      NavigationTop,
      NavigationBottom
    }
  };
</script>

<style lang="scss">
  @import './assets/scss/app.scss';
  @import '../public/icofont/icofont.min.css';
</style>