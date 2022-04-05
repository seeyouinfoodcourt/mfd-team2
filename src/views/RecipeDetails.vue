<template>
  <div>
    <h1>Recipe with ID: {{this.id}} </h1>
    <h3>Ingredients</h3>
    <RecipeIngredient />
    <h3>Equipment</h3>
    <RecipeEquipment />
    <h3>Tips</h3>
    <RecipeTip />
  </div>
</template>

<script>
import RecipeIngredient from '../components/recipe/RecipeIngredient.vue'
import RecipeEquipment from '../components/recipe/RecipeEquipment.vue'
import RecipeTip from '../components/recipe/RecipeTip.vue'


export default {
  name: 'RecipeDetails',
  props: ['id'],
  components: {RecipeIngredient, RecipeEquipment, RecipeTip},
  data(){
    return{
      
    }
  }
}
</script>

<style>

</style>