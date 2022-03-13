<template>
  <NavigationTop />

  <router-view/>

  <div class="nav">
    <router-link :to="{ name: 'Profile' }"> <i class="icofont-user-alt-3"></i></router-link> 
    <router-link :to="{ name: 'Feed' }"> <i class="icofont-ui-home"></i> </router-link> 
    <router-link :to="{ name: 'Search' }">  <i class="icofont-search-1"></i></router-link> 
  </div>


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