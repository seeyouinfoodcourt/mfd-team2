<template>
  <div class="recipe" v-if="recipe">
    <section class="recipe__section recipe__section--info">
      <h1>{{ recipe.attributes.Title }}</h1>
      <RecipeCard :recipe="recipe" slideWidth="full" />
      <p class="recipe__description">{{ recipe.attributes.Description }}</p>
      <router-link :to="{ name: 'RecipeSteps', params: { id: recipe.id } }">
        <button class="button button--green button--wide">Start Cooking</button>
      </router-link>
    </section>

    <section class="recipe__section recipe__section--ingredients">
      <h3>Ingredients</h3>
      <RecipeIngredient
        v-for="ingredient in recipe.attributes.recipe_ingredients.data"
        :key="ingredient.id"
        :amount="ingredient.attributes.Amount"
        :unit="ingredient.attributes.unit.data.attributes.ShortName"
        :name="ingredient.attributes.ingredient.data.attributes.Name"
      ></RecipeIngredient>
    </section>
    <section class="recipe__section recipe__section--equipment">
      <h3>Equipment</h3>
      <div class="recipe__equipment">
        <RecipeEquipment
          v-for="equipment in recipe.attributes.equipment.data"
          :key="equipment.id"
          :name="equipment.attributes.Name"
        />
      </div>
    </section>
  </div>
</template>

<script>
import RecipeIngredient from "../components/recipe/RecipeIngredient.vue";
import RecipeEquipment from "../components/recipe/RecipeEquipment.vue";
import RecipeCard from "../components/recipe/RecipeCard.vue";

export default {
  name: "RecipeDetails",
  props: ["id"],
  components: {
    RecipeEquipment,
    RecipeIngredient,
    RecipeCard,
  },
  data() {
    return {
      recipe: [],
    };
  },
  created() {
    fetch(
      `${process.env.VUE_APP_STRAPI}api/recipes/${this.id}?populate=users_permissions_user,recipe_ingredients.unit,recipe_ingredients.ingredient,equipment,difficulty,likes`
    )
      .then((response) => response.json())
      .then((data) => (this.recipe = data.data));
  },
  mounted() {
    console.log(this.recipe);
  },
};
</script>
    
<style>
</style>