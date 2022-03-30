<template>

<div class="tabBox p-regular">
    <ul class="tabs">
        <li class="selected"><a href="#">Recipes</a></li>
        <li><a href="#">Ingredients</a></li>
        <li><a href="#">Chefs</a></li>
    </ul>
    <div @click="isVisible = !isVisible" class="content" >
        <span class="material-icons-outlined">search</span>
        <input v-model="search" class="item" type="text" placeholder="Search recipe" >
        <span class="material-icons-outlined">filter_list</span>
    </div>
    <div v-if="isVisible" class="options">
        <ul>
            <li  @click="selected(recipe, showSearch)" v-for="recipe in  filteredRecipe" :key="recipe.id">
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
      showSearch: [],
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
      const response = await axios.get (`${process.env.VUE_APP_STRAPI}api/recipes`)
      this.allRecipes = response.data.data; 
      console.log(this.allRecipes)

    } catch (error) {
      this.error = error;
    }
  },

  /*
  methods:{  
    selected(recipe, showSearch){
     this.selectedItem = recipe.attributes.Title; 
     this.isVisible = false;  
     showSearch.push(this.selectedItem)
  }
  }*/
}
</script>

<style>

</style>