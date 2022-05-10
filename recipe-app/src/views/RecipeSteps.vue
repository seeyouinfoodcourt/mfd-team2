<template>
<section class="recipe__instructions">
      <h3>Instructions</h3>
      <div class="recipe__steps">
      <RecipeStep
        v-for="step in steps"
        :key="step.id"
        :number="step.id"
        :title="step.attributes.Title"
        :instruction="step.attributes.Instruction"
      />
      </div>
    </section>
</template>

<script>
import RecipeStep from "../components/recipe/RecipeStep.vue";

export default {
    props: ["id"],
  components: { 
    RecipeStep
    },
    data() {
    return {
      steps: [],
    };
  },
  created() {
    fetch(
      `${process.env.VUE_APP_STRAPI}api/steps?filters&bsol;[recipes&bsol;][id][$eq]=${this.id}`
    )
      .then((response) => response.json())
      .then((data) => (this.steps = data.data));
      
  },
   
}
</script>

<style>

</style>