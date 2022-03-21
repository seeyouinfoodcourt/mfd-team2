<template>
  <NavigationTop :key="$route.fullPath" />

<<<<<<< HEAD
  <router-view/>
<<<<<<< HEAD
  
  <NavigationBottom />

  <router-link :to="{ name: 'Feed' }">Feed</router-link> |
  <router-link :to="{ name: 'Profile' }">Profile</router-link> |
  <router-link :to="{ name: 'Search' }">Search</router-link> |
=======
=======
  <router-view />
>>>>>>> 799978a07472eff78812179af5da8451ba96e5b6

  <div class="nav">
    <router-link :to="{ name: 'Profile' }"> <i class="icofont-refrigerator"></i></router-link> 
    <router-link :to="{ name : ''}"><i class="icofont-ui-calendar"></i></router-link>
    <router-link :to="{ name: 'Feed' }"> <i class="icofont-ui-home"></i> </router-link> 
    <div class="notes"><router-link :to="{name : ''}"> <i class="icofont-list"></i></router-link></div>
    <router-link :to="{ name: 'Search' }">  <i class="icofont-search-1"></i></router-link> 

    <!--En bog 
     <i class="icofont-book-alt"></i> -->
  </div>

  <NavigationBottom />
>>>>>>> 495c56dc0f1cdf95e285b7b4a4675b6258367a14
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