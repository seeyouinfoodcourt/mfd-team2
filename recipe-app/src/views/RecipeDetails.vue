<template>

<div v-if="recipe">
  <h1>{{ recipe.attributes.Title }}</h1>

  
  <RecipeCard :recipe="recipe" cardSize="full"/>

  <div class="recipe-description">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
  </div>

  

</div>


</template>

<script>
import RecipeCard from '../components/recipe/RecipeCard.vue'

export default {
  props: ['id'],
  components: { RecipeCard },
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