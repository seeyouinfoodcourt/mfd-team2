<template>
  <NavigationTop :key="$route.fullPath" />

  <router-view />

  <div class="nav">
    <router-link :to="{ name: '' }"> <i class="icofont-refrigerator"></i></router-link> 
    <router-link :to="{ name : ''}"><i class="icofont-ui-calendar"></i></router-link>
    <router-link :to="{ name: 'Feed' }"> <i class="icofont-ui-home"></i> </router-link> 
    <router-link :to="{name : ''}"> <i class="icofont-list"></i></router-link>
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