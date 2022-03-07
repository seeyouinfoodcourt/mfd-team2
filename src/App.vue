<template>
  <NavigationTop />

  <HelloWorld />

  <NavigationBottom />
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue';
  import NavigationTop from './layout/NavigationTop.vue';
  import NavigationBottom from './layout/NavigationBottom.vue';

  export default {
    name: 'App',
    components: {
      HelloWorld,
      NavigationTop,
      NavigationBottom
    }
  };
</script>

<style lang="scss">
  @import './assets/scss/app.scss';
</style>