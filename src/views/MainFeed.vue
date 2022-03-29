<template>
  <SearchBar/>

  <BaseCarrousel slide-width="80" :recipes="recipes2" />
  
  <h3>Daily Inspiration test</h3>
  <div class="carrousel">
    
      <RecipeCard v-for="recipe in recipes2" :key="recipe.id" :recipe="recipe" card-size="medium"/>
    
  </div>
  
  <h3>Recent Recipes</h3>
  <div class="carrousel">
    
      <RecipeCard v-for="recipe in recipes2" :key="recipe.id" :recipe="recipe"  card-size="small" />
    
  </div>
<!-- <div v-for="r in recipes2" :key="r.id">{{ r.attributes.Title }} - {{ r.id }} - {{ r.attributes.Description }} </div>
{{ recipes2 }} -->

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
      recipes2: '',
      // recipes: [
      //   {
      //     id: 1,
      //     attributes: {title: 'Mushroom Parmesan Pizza', author: 'Aria Jameson', difficulty: 1, ingredients: 14, cookTime: 40 }
      //   },
      //   {
      //     id: 2,
      //     attributes: {title: 'Grilled cheese with kimchi', author: 'Gentleman Finn', difficulty: 2, ingredients: 12, cookTime: 15}
      //   },
      //   {
      //     id: 3,
      //     attributes: {title: 'Wonton soup', author: 'Bjarne Goldbæk  ', difficulty: 3, ingredients: 22, cookTime: 55}
      //   }
      // ]
    }
  },
  mounted() {
      fetch('https://team2-recipe-app.herokuapp.com/api/recipes?populate=*', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then(response => response.json())
  .then(data => this.recipes2 = data.data);
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