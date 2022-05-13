<template>
  <SearchBar/>

  <h3>Daily Inspiration</h3>
  <BaseCarrousel slide-width="medium" :items="recipes" slider-id="1" >
    <template v-slot:item="{ item }">
      <RecipeCard :recipe="item" slide-width="medium" />
    </template>
  </BaseCarrousel>
  
  

  <h3>Recent Recipes</h3>
  <BaseCarrousel slide-width="small" :items="recipes" slider-id="2" >
    <template v-slot:item="{ item }">
      <RecipeCard :recipe="item" slide-width="small" />
    </template>
  </BaseCarrousel>
  

</template>

<script>
import RecipeCard from '@/components/recipe/RecipeCard.vue'
import SearchBar from '../components/search/SearchBar.vue'
import BaseCarrousel from '../components/BaseCarrousel.vue'

export default {
  name: 'MainFeed',
  components: { 
    RecipeCard,
    SearchBar,
    BaseCarrousel,
   },
  data(){
    return{
      recipes: '',
      recipes2: ''      
    }
  },
  mounted() {
      // fetch(`${process.env.VUE_APP_STRAPI}api/recipes?populate=users_permissions_user,recipe_ingredients.unit,recipe_ingredients.ingredient,equipment,difficulty,likes`).then(response => response.json()).then(data => this.recipes2 = data.data);
      fetch(`http://localhost:1337/api/recipes?populate=users_permissions_user,recipe_ingredients.unit,recipe_ingredients.ingredient,equipment,difficulty,likes`).then(response => response.json()).then(data => this.recipes = data.data);
    } 
}
</script>

<style>
  .carrousel{
    overflow:auto;
    white-space: nowrap;
  }

  .carrousel::-webkit-scrollbar{height: 8px; border-radius: 8px; background-color:aqua;}
  .carrousel::-webkit-scrollbar-track{background-color: lightgrey; border-radius: 8px;}
  .carrousel::-webkit-scrollbar-thumb{background-color: darkgrey;}
  .carrousel::-webkit-scrollbar-thumb:hover{background-color: rgb(146, 146, 146);}

  .carrousel .recipe-card{
    display: inline-block;
    /* width: 80%; */
    margin-right:1em;
  }
</style>