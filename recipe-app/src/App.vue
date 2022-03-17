<template>
  <NavigationTop :key="$route.fullPath"/>
  <router-link :to="{ name: 'Feed' }">Feed</router-link> |
  <router-link :to="{ name: 'Profile' }">Profile</router-link> |
  <router-link :to="{ name: 'Search' }">Search</router-link> |
  <router-link :to="{ name: 'CreateRecipe' }">Create Recipe</router-link> |

  <router-view />
  <i class="icofont-address-book"></i>
  <NavigationBottom />   
 
</template>

<script>

  import NavigationTop from './layout/NavigationTop.vue';
  import NavigationBottom from './layout/NavigationBottom.vue';

  export default {
    name: 'App',
    components: {
      NavigationTop,
      NavigationBottom,
    }
  };
</script>

<style lang="scss">
  @import 'assets/scss/app.scss';
  @import '../public/icofont/icofont.min.css';
</style>