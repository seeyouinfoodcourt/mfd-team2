<template>
<div class="tab-box p-regular">
    <ul class="tab-box__tabs">
        <li @click="activetab=1; isVisible = false" v-on:click="resetSearh" :class="[activetab === 1 ? 'selected' : '']"><a href="#">Recipes</a></li>
        <li @click="activetab=2; isVisible = false" v-on:click="resetSearh" :class="[activetab === 2 ? 'selected' : '']"><a href="#">Ingredients</a></li>
        <li @click="activetab=3; isVisible = false" v-on:click="resetSearh" :class="[activetab === 3 ? 'selected' : '']"><a href="#">Chefs</a></li>
    </ul>
    <div class="tab-box__content" >
        <div><router-link :to="`/search`"><span class="material-icons-outlined">search</span></router-link></div>
        <input @keydown.enter="goToSearchPage()" @input="isVisible = true" @click="isVisible = false" v-model="search" class="item"  v-on:keyup="onSearchIngredient" placeholder="Search" type="search" >
        <div><span class="material-icons-outlined">filter_list</span></div>
    </div>

    <div v-if="isVisible" class="tab-box__options">
        <ul v-if="activetab === 1">
            <li v-for="recipe in  filteredRecipe" :key="recipe.id">
                <router-link :to="`/recipes/${recipe.id}`"><p>{{recipe.attributes.Title}}</p></router-link>
            </li>
        </ul>

        <ul v-if="activetab === 2">
            <li v-for="ing in  allRecipesIngredient" :key="ing.id">
              <router-link :to="`/recipes/${ing.id}`"><p>{{ing.attributes.Title}}</p></router-link>
            </li>
        </ul>


        <ul v-if="activetab === 3">
            <li v-for="user in  filteredUsers" :key="user.id">
                <router-link :to="`/profile/${user.id}`"><p>{{user.username}}</p></router-link>
            </li>
        </ul>
    </div>
</div>

<div class="grid-search" v-show="searchResult" v-if="activetab === 1">
  <div v-for="recipe in filteredRecipe" :key="recipe.id">
    <RecipeCard :recipe="recipe"/>

   </div>
</div>

<div class="grid-search" v-show="searchResult" v-if="activetab === 2">
  <div v-for="ing in allRecipesIngredient" :key="ing.id">
    <RecipeCard :recipe="ing"/>
   </div>
</div>

<div class="user-search" v-show="searchResult" v-if="activetab === 3">
  <div class="user-search__user" v-for="user in filteredUsers" :key="user.id">
    <UserCard :user="user"/>
   </div>
</div>

</template>

<script>
import axios from 'axios';
import RecipeCard from "../recipe/RecipeCard.vue"
import UserCard from '../UserCard.vue'


export default {
name:'SearchBar',
props: [ 'searchResult' ],
components: {
  RecipeCard,
  UserCard
},

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

     if (sessionStorage.getItem('searchInput') === null) {
    this.search = '';
    } else {
    this.search = sessionStorage.getItem('searchInput');
    }

    window.onunload = function() {
      sessionStorage.removeItem('searchInput')
   }

  try {
      const resResipes = await axios.get (`${process.env.VUE_APP_STRAPI}api/recipes?populate=users_permissions_user,recipe_ingredients.unit,recipe_ingredients.ingredient,equipment,difficulty,likes,Image`)
      const resUsers = await axios.get (`${process.env.VUE_APP_STRAPI}api/users`)
      const respResipeIngredient = await axios.get (`${process.env.VUE_APP_STRAPI}api/recipes?filters[recipe_ingredients][ingredient][Name][$contains]=&populate=*`);

      this.allRecipes = resResipes.data.data;
      this.allUsers = resUsers.data;
      this.allRecipesIngredient = respResipeIngredient.data.data;

    } catch (error) {
      this.error = error;
    }

  },

  created() {
      window.addEventListener('click', (e) => {
        if (!this.$el.contains(e.target)){
          this.isVisible = false
        }
      })
  },

  methods:{
    resetSearh(){
    this.search = '';
  },

    goToSearchPage(){
      this.$router.push('/search')
      sessionStorage.setItem('searchInput', this.search);
    },

    async onSearchIngredient() {
      const response = await axios.get (`${process.env.VUE_APP_STRAPI}api/recipes?populate=*&filters[recipe_ingredients][ingredient][Name][$contains]=${this.search}`);


      this.allRecipesIngredient = response.data.data;
    },
  }
}
</script>

<style>

</style>