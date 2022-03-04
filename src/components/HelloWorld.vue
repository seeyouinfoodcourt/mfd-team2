<template>
  <h1 class="text-large">Template is clean</h1>
<p>Line Test</p>
<p>Malene Test</p>
<p>Recipes Array: {{ recipes }}</p>
<div v-for="recipe in recipes" :key="recipe.id">
  <p>Recipe Title: {{ recipe.attributes.Title }} </p>
</div>

<p>Recipe.data: {{ recipes.data }}</p>

Recipes Array Formateret: 
{ "data": [ 
  { 
    "id": 1, 
    "attributes": { 
        "Title": "Gule Ærter", 
        "Description": "De bedste guleærter i verden.", 
        "createdAt": "2022-03-03T10:24:05.971Z", 
        "updatedAt": "2022-03-03T10:47:56.690Z", 
        "publishedAt": "2022-03-03T10:47:56.686Z" 
        } 
      }, 
    { 
      "id": 2,
      "attributes": { 
          "Title": "Pizza", 
          "Description": "God pizza med mel. ", 
          "createdAt": "2022-03-03T10:47:32.104Z", 
          "updatedAt": "2022-03-03T10:47:48.191Z", 
          "publishedAt": "2022-03-03T10:47:48.185Z" } 
          } 
    ], 
    "meta": 
    {
       "pagination": {
          "page": 1, "pageSize": 25, "pageCount": 1, "total": 2 } } }


</template>

<script>
  export default {
    data() {
      return{
        recipes: ''
        
      }
    },
    mounted() {
      fetch('http://localhost:1337/api/recipes', {
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