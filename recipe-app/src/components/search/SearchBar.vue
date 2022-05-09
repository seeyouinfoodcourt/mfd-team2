<template>

<div class="tabBox p-regular">
    <ul class="tabs">
        <li @click="activetab=1" :class="[activetab === 1 ? 'selected' : '']"><a href="#">Recipes</a></li>
        <li @click="activetab=2" :class="[activetab === 2 ? 'selected' : '']"><a href="#">Ingredients</a></li>
        <li @click="activetab=3" :class="[activetab === 3 ? 'selected' : '']"><a href="#">Chefs</a></li>
    </ul>
    <div class="content" >
        <div><router-link :to="`/search`"><span class="material-icons-outlined">search</span></router-link></div>
        <input @keydown.enter="goToSearchPage()" @input="isVisible = !isVisible" v-model="search" class="item" type="search" placeholder="Search" >
        <div><span class="material-icons-outlined">filter_list</span></div>
    </div>

    <div v-if="isVisible" class="options">
        <ul v-if="activetab === 1">
            <li v-for="recipe in  filteredRecipe" :key="recipe.id">
                <p><router-link :to="`/recipes/${recipe.id}`">{{recipe.attributes.Title}}</router-link></p>
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
     <p>{{recipe.attributes.Title}}</p>
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

export default {
name:'SearchBar',
props: [ 'searchResult' ],
  data () {
    return {
      allUsers:[],
      allRecipes:[],

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
      this.allUsers = response2.data; 

    } catch (error) {
      this.error = error;
    }
  },

  methods:{
    goToSearchPage(){
      this.$router.push('/search')
    }
  }

}
</script>

<style>

</style>