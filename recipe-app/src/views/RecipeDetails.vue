<template>

<div v-if="recipe">
  <h1>{{ recipe.attributes.Title }}</h1>

  

  <div class="recipe-description"> {{ recipe.attributes.Description }}
   
  </div>

    <h3>Ingredients</h3>
    <RecipeIngredient v-for="ingredient in recipe.attributes.recipe_ingredients.data" :key="ingredient.id" :amount="ingredient.attributes.Amount" :unit="ingredient.attributes.unit.data.attributes.ShortName" :name="ingredient.attributes.ingredient.data.attributes.Name"></RecipeIngredient>
    <h3>Equipment</h3>
    <RecipeEquipment v-for="equipment in recipe.attributes.equipment.data" :key="equipment.id" :name="equipment.attributes.Name" />
    <h3>Instructions</h3>
    <RecipeStep v-for="step in recipe.attributes.steps.data" :key="step.id" :number="step.id" :title="step.attributes.Title" :instruction="step.attributes.Instruction" />

</div>


</template>

<script>
import RecipeIngredient from '../components/recipe/RecipeIngredient.vue'
import RecipeEquipment from '../components/recipe/RecipeEquipment.vue'
import RecipeStep from '../components/recipe/RecipeStep.vue'


export default {
  name: 'RecipeDetails',
  props: ['id'],
  components: { RecipeEquipment, RecipeIngredient, RecipeStep },
  data(){
    return{
      recipe: []
    }
  },
  created(){
    fetch(`${process.env.VUE_APP_STRAPI}api/recipes/${this.id}?populate=*,recipe_ingredients.unit,recipe_ingredients.ingredient,steps,equipment`).then(response => response.json()).then(data => this.recipe = data.data);
    
  },
  mounted() {
    console.log(this.recipe)
  }
  
}
</script>
    
<style>

</style>