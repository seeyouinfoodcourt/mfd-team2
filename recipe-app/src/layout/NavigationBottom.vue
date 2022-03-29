<template>
<footer class="footer">
  <div class="footer__content">
    <router-link :to="{ name: '' }"> <i class="icofont-refrigerator"></i></router-link> 
    <router-link :to="{ name : ''}"><i class="icofont-ui-calendar"></i></router-link>
    <router-link :to="{ name: 'Feed' }"> <span class="material-icons-round">home</span> </router-link> 
    <router-link :to="{name : ''}"> <i class="icofont-list"></i></router-link>
    <router-link :to="{ name: 'Search' }">  <i class="icofont-search-1"></i></router-link> 
  </div>
</footer>
</template>

<script>
 export default {
   name: "NavigationBottom",
}
</script>
