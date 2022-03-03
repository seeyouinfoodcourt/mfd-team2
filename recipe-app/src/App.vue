<template>
  <TopNav />

  <HelloWorld />

  <BottomNav />
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue';
  import TopNav from './components/partials/TopNav.vue';
  import BottomNav from './components/partials/BottomNav.vue';

  export default {
    name: 'App',
    components: {
      HelloWorld,
      TopNav,
      BottomNav,
    },
  };
</script>

<style lang="scss">
  @import './assets/scss/app.scss';
</style>