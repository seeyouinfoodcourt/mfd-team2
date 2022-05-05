<template>
  <NavigationTop :key="$route.fullPath" />

  <main>
    <router-view />
  </main>
  
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
    },
    beforeCreate() {
      // Kenneths state/local storage script
      this.$store.commit('initLocalStorageCache');

    }
  };
</script>

<style lang="scss">
  @import './assets/scss/app.scss';
  @import '../public/icofont/icofont.min.css';
</style>