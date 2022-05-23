<template>
  <SearchBar/>

  <div class="wrapper">
  <h3>Daily Inspiration</h3>
  <BaseCarrousel slide-width="medium" :items="this.$store.state.recipes" slider-id="1" >
    <template v-slot:item="{ item }">
      <RecipeCard :recipe="item" slide-width="medium" />
    </template>
  </BaseCarrousel>
  </div>
  

  <h3>Recent Recipes</h3>
  <BaseCarrousel slide-width="small" :items="recipes" slider-id="2" >
    <template v-slot:item="{ item }">
      <RecipeCard :recipe="item" slide-width="small" />
    </template>
  </BaseCarrousel>

<h3>Popular Chefs</h3>
<BaseCarrousel slide-width="tiny" :items="users" slider-id="3">
  <template v-slot:item="{ item }">
    <UserCard :user="item" />
  </template>
</BaseCarrousel>


</template>

<script>
import RecipeCard from '@/components/recipe/RecipeCard.vue'
import SearchBar from '../components/search/SearchBar.vue'
import BaseCarrousel from '../components/BaseCarrousel.vue'
import UserCard from '../components/UserCard.vue'

export default {
  name: 'MainFeed',
  components: { 
    RecipeCard,
    SearchBar,
    BaseCarrousel,
    UserCard
   },
  data(){
    return{
      users: ''
      // recipes: this.$store.state.recipes,
    }
  },
  computed: {
    recipes() {
      // console.log('computed')
      return this.$store.state.recipes
    },
  },
  mounted() {
    fetch(`${process.env.VUE_APP_STRAPI}api/users`).then(response => response.json()).then(data => this.users = data)
    // console.log(this.recipes)
      // fetch(`${process.env.VUE_APP_STRAPI}api/recipes?populate=users_permissions_user,recipe_ingredients.unit,recipe_ingredients.ingredient,equipment,difficulty,likes,Image`).then(response => response.json()).then(data => this.recipes = data.data).then(data => console.log(data, 'THE FETCH'));
      // fetch(`http://localhost:1337/api/recipes?populate=users_permissions_user,recipe_ingredients.unit,recipe_ingredients.ingredient,equipment,difficulty,likes`).then(response => response.json()).then(data => this.recipes = data.data);
    },
   
}
</script>

<style>

.wrapper{
  margin-top: 100px;
}

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