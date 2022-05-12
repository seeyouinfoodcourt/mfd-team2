<template>

<div class="tabBox p-regular">
    <ul class="tabs">
        <li @click="activetab=1" :class="[activetab === 1 ? 'selected' : '']"><a href="#">Recipes</a></li>
        <li @click="activetab=2" :class="[activetab === 2 ? 'selected' : '']"><a href="#">Ingredients</a></li>
        <li @click="activetab=3" :class="[activetab === 3 ? 'selected' : '']"><a href="#">Chefs</a></li>
    </ul>
    <div class="content" >
        <div><router-link :to="`/search`"><span class="material-icons-outlined">search</span></router-link></div>
        <input @keydown.enter="goToSearchPage()" @click="isVisible = !isVisible" v-model="search" class="item" type="search" v-on:keyup="onSearchRecipe" placeholder="Search" >
        <div><span class="material-icons-outlined">filter_list</span></div>
    </div>

    <div v-if="isVisible" class="options">
        <ul v-if="activetab === 1">
            <li v-for="recipe in  filteredRecipe" :key="recipe.id">
                <p><router-link :to="`/recipes/${recipe.id}`">{{recipe.attributes.Title}}</router-link></p>
            </li>
        </ul>

        <ul v-if="activetab === 2">
            <li v-for="ing in  allRecipesIngredient" :key="ing.id">
              <p>{{ing.attributes.Title}}</p>
            </li>
        </ul>

      
        <ul v-if="activetab === 3">
            <li v-for="user in  filteredUsers" :key="user.id">
                <p><router-link :to="`/users/${user.id}`">{{user.username}}</router-link></p>
            </li>
        </ul>
    </div>
</div>

<ul v-show="searchResult" v-if="activetab === 1">
  <li v-for="recipe in  filteredRecipe" :key="recipe.id">
    <!--<RecipeCard :recipe="recipe" slideWidth="full" />-->
     <p>{{recipe.attributes.Title}}</p>
   </li>
</ul>

<ul v-show="searchResult" v-if="activetab === 2">
  <li v-for="ing in  allRecipesIngredient" :key="ing.id">
     <p>{{ing.attributes.Title}}</p>
   </li>
</ul>

<ul v-show="searchResult" v-if="activetab === 3">
  <li v-for="user in  filteredUsers" :key="user.id">
     <p>{{user.username}}</p>
   </li>
</ul>

</template>

<script> 
import axios from 'axios'; 
//import RecipeCard from "../components/recipe/RecipeCard.vue";


export default {
name:'SearchBar',
props: [ 'searchResult' ],
/*components: {
  RecipeCard,
},*/

  data () {
    return {
      allUsers:[],
      allRecipes:[],
      allRecipesIngredient:[],

      search: '',
      isVisible:false,
   
      activetab: 1, 
    }
 },

   computed:{
    filteredRecipe(){
      return this.allRecipes.filter((recipe)=>{
        return recipe.attributes.Title.toLowerCase().match(this.search.toLowerCase())
      }); 
    },
    
    filteredUsers(){
      return this.allUsers.filter((user)=>{
        return user.username.toLowerCase().match(this.search.toLowerCase())
      }); 
    },
   
  },

async mounted() {
  try {
      const response = await axios.get (`${process.env.VUE_APP_STRAPI}api/recipes`)
      const response2 = await axios.get (`${process.env.VUE_APP_STRAPI}api/users`)
      
      this.allRecipes = response.data.data; 
      console.log(response.data)
      this.allUsers = response2.data; 

    } catch (error) {
      this.error = error;
    }
  },

  methods:{
    goToSearchPage(){
      this.$router.push('/search')
    },

    async onSearchRecipe() {
      const response3 = await axios.get (`${process.env.VUE_APP_STRAPI}api/recipes?filters[recipe_ingredients][ingredient][Name][$contains]=${this.search}`);
      this.allRecipesIngredient = response3.data.data; 
    }
  }

}
</script>

<style>

</style>