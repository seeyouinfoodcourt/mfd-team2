<template>
  <NavigationTop />

  <router-link :to="{ name: 'Feed' }">Feed</router-link> |
  <router-link :to="{ name: 'Profile' }">Profile</router-link> |
  <router-link :to="{ name: 'Search' }">Search</router-link> |

  <router-view/>
  
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
</style>