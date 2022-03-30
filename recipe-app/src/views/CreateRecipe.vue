<template>
<div id="app">
  <div v-if="error">
    {{ error }}
  </div>
  <form class="form__card" id="form" v-on:submit="handleSubmit" v-else>
    <h1 style="text-align:center" class="headline">Create your delicious recipe</h1>
    <label for="Title" class="form__label">Recipe title</label>
    <input class="form__input" id="Title" v-model="modifiedData.Title" type="text" name="Title">
<br>
<br>

    <label class="form__label">Uploade image</label>
    <button type="button" class="button button--green">Uploade image</button>
 
<br>
<br>

    <label for="Description" class="form__label">Description</label>
    <textarea class="form__input" name="Description" id="Description" v-model="modifiedData.Description" cols="30" rows="5"></textarea> 

<br>
<br>
    <label class="form__label">Cooking time</label>
    <div class="flexContainer">
      <div class="flexItem">
      <label class="form__label form__label--time" for="timeHouers">Houers</label>
      <input class="form__input" id="timeHouers" v-model="modifiedData.timeHouers" type="number" name="timeHouers">
      </div>

      <div class="flexItem">
      <label class="form__label form__label--time" for="timeMinutes">Minutes</label>
      <input class="form__input" id="timeMinutes" v-model="modifiedData.timeMinutes" type="number" name="timeMinutes">
      </div>
    </div>

<br>

    <label class="form__label">Select meal types</label>
    <div class="flexContainer">
      <div class="flexItem" v-for="mealType in allMealTypes" :key="mealType.id">
        <input class="from__input" type="checkbox" :value="mealType.id" v-model="modifiedData.mealType" name="allMealTypes" :id="mealType.id"/>
        <label>{{ mealType.attributes.Name }}</label>
      </div>
    </div>

<br>

    <label class="form__label">Choose difficulty</label>
    <div class="flexContainer">
      <div class="flexItem" v-for="difficulty in allDifficulties" :key="difficulty.id">
        <input type="checkbox" :value="difficulty.id" v-model="modifiedData.difficulty" name="allDifficulties" :id="difficulty.id">
       <label>{{ difficulty.attributes.Name }}</label>
    </div>
    </div>

<br>
    <label class="form__label">Select equipment</label>
     <div class="flexContainer">
      <div class="flexItem" v-for="equipment in allEquipments" :key="equipment.id">
        <input type="checkbox" :value="equipment.id" v-model="modifiedData.equipment" name="allEquipments" :id="equipment.id">
       <label>{{ equipment.attributes.Name }}</label>
      </div>
    </div>

<br>
<!--INGRIDENSLISTE MED DROPDOWN-->
   <label class="form__label">Select ingredients</label>
  <FormAddIngredient/>

  <br>  
  <button class="button button--green" type="button">Create recipe</button>
  </form>
</div>

</template>

<script>
import axios from 'axios'; 
import FormAddIngredient from '../components/form/FormAddIngredient.vue'; 
/*import FormAddSteps from '../components/form/FormAddSteps.vue'; */

export default {
  name: 'CreateRecipe',
  components: { 
    FormAddIngredient,
    /*FormAddSteps,*/
  },
  data () {
    return {
      allDifficulties: [],
      allMealTypes: [],
      allEquipments: [],  
      modifiedData: {
        Title: '',
        Description: '',
        timeMinutes: '',
        timeHouers: '',
        mealType: [],
        difficulty: [],
        equipment: [],
        ingredient:[],
      },
      error: null
    }; 
  },
  
async mounted() {
    try {
      const response = await axios.get(`${process.env.VUE_APP_STRAPI}api/meal-types`) 
      this.allMealTypes = response.data.data;
      const response2 = await axios.get(`${process.env.VUE_APP_STRAPI}api/difficulties`)
      this.allDifficulties = response2.data.data; 
      const response3 = await axios.get(`${process.env.VUE_APP_STRAPI}api/equipments`)
      this.allEquipments = response3.data.data; 
      //console.log(response3)

    } catch (error) {
      this.error = error;
    }
  },

    handleSubmit: async function(e) {
      e.preventDefault();
        try {
        const response = await axios.post(`${process.env.VUE_APP_STRAPI}recipes`, this.modifiedData); 
        console.log(response); 
      } catch(error) {
        this.error = error;

        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        
      }
    }
 }; 

</script>

<style lang="scss">

</style>