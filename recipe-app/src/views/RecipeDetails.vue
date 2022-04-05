<template>
  <div>
    <h1>Recipe with ID: {{this.id}} </h1>
    <RecipeIngredient />
    <RecipeEquipment />
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