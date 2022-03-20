<template>

<div class="tabBox p-regular">
    <ul class="tabs">
        <li class="selected"><a href="#">Recipes</a></li>
        <li><a href="#">Ingredients</a></li>
        <li><a href="#">Chefs</a></li>
    </ul>
    <div class="content">
        <i class="icofont-search-1 item"></i>
        <input @click="isVisible = !isVisible" v-model="search" class="item" type="text" placeholder="Search recipe">
        <i class="icofont-justify-all item"></i>
    </div>
    <div v-if="isVisible" class="options">
        <ul>
            <li v-for="recipe in  filteredRecipe" :key="recipe.id">
                <p>{{recipe.attributes.Title}}</p>
            </li>
        </ul>
    </div>
  
</div>


</template>

<script>
import axios from 'axios'; 

export default {
name:'SearchBar',
  data () {
    return {
      allRecipes: [],
      search: '',
      selectedItem: null,
      isVisible:false,
    }
 },

   computed:{
    filteredRecipe(){
      return this.allRecipes.filter((recipe)=>{
        return recipe.attributes.Title.toLowerCase().match(this.search)
      }); 
    }    
  },

async mounted() {
    try {
      const response = await axios.get ('http://localhost:1337/api/recipes')
      this.allRecipes = response.data.data; 
      console.log(this.allRecipes)

    } catch (error) {
      this.error = error;
    }
  },

}
</script>

<style>

</style>