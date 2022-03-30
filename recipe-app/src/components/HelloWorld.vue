<template>
  <h1 class="text-large">Template is clean</h1>
<p>Line Test</p>
<p>Malene Test</p>
<p>Recipes Array: {{ recipes }}</p>
<div v-for="recipe in recipes" :key="recipe.id">
  <p>Recipe Title: {{ recipe.attributes.Title }} </p>
</div>

<p>Recipe.data: {{ recipes.data }}</p>


</template>

<script>
  export default {
    data() {
      return{
        recipes: ''
        
      }
    },
    mounted() {
      fetch(`${process.env.VUE_APP_STRAPI}api/recipes`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then(response => response.json())
  .then(data => this.recipes = data.data);

    }
  };
</script>

<style></style>