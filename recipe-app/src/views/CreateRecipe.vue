<template>
<div id="app">
  <div v-if="error">
    {{ error }}
  </div>

  <form id="form" v-on:submit="handleSubmit" v-else>
    <label for="Title" class="subHeadline">Recipe title</label>
    <input id="Title" v-model="modifiedData.Title" type="text" name="Title">

    <label for="Description" class="subHeadline">Description</label>
    <textarea name="Description" id="Description" v-model="modifiedData.Description" cols="30" rows="5"></textarea> 

    <label class="subHeadline">Cooking time</label>
    <div class="flexContainer">
      <div class="flexItem">
      <label for="timeHouers">Houers</label>
      <input id="timeHouers" v-model="modifiedData.timeHouers" type="number" name="timeHouers">
      </div>

      <div class="flexItem">
      <label for="timeMinutes">Minutes</label>
      <input id="timeMinutes" v-model="modifiedData.timeMinutes" type="number" name="timeMinutes">
      </div>
    </div>

    <label class="subHeadline">Select meal types</label>
    <div class="flexContainer">
      <div class="flexItem" v-for="mealType in allMealTypes" :key="mealType.id">
        <input type="checkbox" :value="mealType.id" v-model="modifiedData.mealType" name="allMealTypes" :id="mealType.id"/>
        <label>{{ mealType.attributes.Name }}</label>
      </div>
    </div>

    <label class="subHeadline">Choose difficulty</label>
    <div class="flexContainer">
      <div class="flexItem" v-for="difficulty in allDifficulties" :key="difficulty.id">
        <input type="checkbox" :value="difficulty.id" v-model="modifiedData.difficulty" name="allDifficulties" :id="difficulty.id">
       <label>{{ difficulty.attributes.Name }}</label>
    </div>
    </div>

    <label class="subHeadline">Select equipment</label>
     <div class="flexContainer">
      <div class="flexItem" v-for="equipment in allEquipments" :key="equipment.id">
        <input type="checkbox" :value="equipment.id" v-model="modifiedData.equipment" name="allEquipments" :id="equipment.id">
       <label>{{ equipment.attributes.Name }}</label>
      </div>
    </div>

<!--INGRIDENSLISTE MED DROPDOWN-->
   <label class="subHeadline">Select ingredients</label>
  <FormAddIngredient/>
<br>
  <ButtonPrimary text="Create" color="#80BA72"/>
  </form>
</div>

</template>

<script>
import axios from 'axios'; 
import FormAddIngredient from '../components/form/FormAddIngredient.vue'; 
import ButtonPrimary from '../components/buttons/ButtonPrimary.vue'; 

export default {
  name: 'CreateRecipe',
  components: { 
    FormAddIngredient,
    ButtonPrimary,
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
      const response = await axios.get('http://localhost:1337/api/meal-types') 
      this.allMealTypes = response.data.data;
      const response2 = await axios.get ('http://localhost:1337/api/difficulties')
      this.allDifficulties = response2.data.data; 
      const response3 = await axios.get ('http://localhost:1337/api/equipments')
      this.allEquipments = response3.data.data; 
      //console.log(response3)

    } catch (error) {
      this.error = error;
    }
  },

    handleSubmit: async function(e) {
      e.preventDefault();
        try {
        const response = await axios.post('http://localhost:1337/api/recipes', this.modifiedData); 
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