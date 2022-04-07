<template>

<div v-if="recipe">
  <h1>{{ recipe.attributes.Title }}</h1>

  
  <RecipeCard :recipe="recipe" cardSize="full"/>

  <div class="recipe-description">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
  </div>

  <div>
    <h1>Recipe with ID: {{this.id}} </h1>
    <h3>Ingredients</h3>
    <RecipeIngredient />
    <h3>Equipment</h3>
    <RecipeEquipment />
    <h3>Tips</h3>
    <RecipeTip />
  </div>

</div>


</template>

<script>
import RecipeIngredient from '../components/recipe/RecipeIngredient.vue'
import RecipeEquipment from '../components/recipe/RecipeEquipment.vue'
import RecipeTip from '../components/recipe/RecipeTip.vue'
import RecipeCard from '../components/recipe/RecipeCard.vue'

export default {
  name: 'RecipeDetails',
  props: ['id'],
  components: { RecipeCard, RecipeTip, RecipeEquipment, RecipeIngredient },
  data(){
    return{
      recipe: null
    }
  },
  beforeCreate(){
    console.log('Before Create')
    fetch(`${process.env.VUE_APP_STRAPI}api/recipes/${this.id}?populate=*`).then(response => response.json()).then(data => this.recipe = data.data);
  },
  created(){
    console.log('Created')
    
  },
  mounted() {
      console.log('Mounted')
      
      console.log(this.recipe)
    } 
}
</script>
    
<style>

</style>