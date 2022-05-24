<template>
<footer class="footer">
  <div class="footer__content">
    <router-link :to="{ name: 'Feed' }"> <span class="material-icons-round">home</span> </router-link> 
    <router-link :to="{ name : 'Search'}"><span class="material-icons-round">search</span></router-link>
    <router-link :to="{ name: 'CreateRecipe' }"> <span class="material-icons-round">add_circle_outline</span> </router-link> 
    <router-link :to="{name : ''}"> <span class="material-icons-round">kitchen</span></router-link>
    <router-link :to="{ name: '' }">  <span class="material-icons-round">event_note</span></router-link> 
  </div>
</footer>
</template>

<script>
 export default {
   name: "NavigationBottom",
}
</script>
