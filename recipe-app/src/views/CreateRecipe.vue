<template>
<div id="app">
  <div v-if="error">
    {{ error }}
  </div>

  <form class="form__card" id="form" @submit="handleSubmit" v-else>
    <h1 style="text-align:center" class="headline">Create your delicious recipe </h1>
    <label for="Title" class="form__label">Recipe title</label>
    <input class="form__input" id="title" v-model="title" type="text" name="title">

<br>
<br>

    <label class="form__label">Upload image</label>
    <button type="button" class="button button--green">Upload image</button>
 
<br>
<br>

    <label for="Description" class="form__label">Description</label>
    <textarea class="form__input" name="description" id="description" v-model="description" cols="30" rows="5"></textarea> 

<br>
<br>


    <label class="form__label">Cooking time</label>
 <div class="flexContainer">
      
      <div class="flexItem">
      <label class="form__label form__label--time" for="timeHouers">Hours</label>
      <input class="form__input" id="timeHouers" v-model="timeHouers" type="number" name="timeHouers">
      </div>

      <div class="flexItem">
      <label class="form__label form__label--time" for="timeMinutes">Minutes</label>
      <input class="form__input" id="timeMinutes" v-model="timeMinutes" type="number" name="timeMinutes">
      </div>
    </div>

<br>

    <label class="form__label">Select meal types</label>
    <div class="flexContainer">
      <div class="flexItem" v-for="meal in allMealTypes" :key="meal.id">
        <input class="from__input" type="checkbox" :value="meal.id" v-model="mealType" name="allMealTypes" :id="meal.id"/>
        <label>{{ meal.attributes.Name }}</label>
      </div>
    </div>

<br>

    <label class="form__label">Choose difficulty</label>
    <div class="flexContainer">
      <div class="flexItem" v-for="diff in allDifficulties" :key="diff.id">
        <input type="checkbox" :value="diff.id" v-model="difficulty" name="allDifficulties" :id="diff.id">
       <label>{{ diff.attributes.Name }}</label>
    </div>
    </div>

<br>
    <label class="form__label">Select equipment</label>
     <div class="flexContainer">
      <div class="flexItem" v-for="equip in allEquipments" :key="equip.id">
        <input type="checkbox" :value="equip.id" v-model="equipment" name="allEquipments" :id="equip.id">
       <label>{{ equip.attributes.Name }}</label>
      </div>
    </div>

<br>

<!--INGRIDENSLISTE MED DROPDOWN-->

 <label class="form__label">Select ingredients</label>
  <FormAddIngredient/>

  <br>  
  <button class="button button--green">Create recipe</button>
  </form>
</div>

</template>

<script>
import axios from 'axios'; 
import FormAddIngredient from '../components/form/FormAddIngredient.vue'; 
/*import FormAddSteps from '../components/form/FormAddSteps.vue'; */


export default {
  name: 'CreateRecipeView',
  components: { 
    FormAddIngredient,
    /*FormAddSteps,*/
  },
  data () {
    return {
      allDifficulties: [],
      allMealTypes: [],
      allEquipments: [],  

      title: '',
      description: '',
      timeMinutes: '',
      timeHouers: '',
      mealType: [],
      difficulty: [],
      equipment: [],
     
      error: null
    }; 
  },
  
async mounted() {
    try {
      const response = await axios.get(`${process.env.VUE_APP_STRAPI}api/meal-types`) 
      this.allMealTypes = response.data.data;
      const response2 = await axios.get(`${process.env.VUE_APP_STRAPI}api/difficulties`)
      this.allDifficulties = response2.data.data; 

      //const response3 = await axios.get(`${process.env.VUE_APP_STRAPI}api/equipments`)
      const response3 = await axios.get('http://localhost:1337/api/equipments')
      this.allEquipments = response3.data.data; 
      //console.log(response3.data)

    } catch (error) {
      this.error = error;
    }
  },

  methods:{
  handleSubmit: async function(e) {
      e.preventDefault();
        try {
        const response = await this.axios.post('http://localhost:1337/api/recipes',
        {
        data:{
            Title: this.title,
            Description: this.description,
            CookTime: this.timeMinutes,
            meal_type: this.mealType, 
            difficulty: this.difficulty,
            equipment:this.equipment,
            }
        }); 
        let recipeId = this.title.id; 
        /*
        const response2 = await this.axios.post('http://localhost:1337/api/recipe-ingredients',
        {
          data:{
            recipe: 
            Amount: 10, 
            unit: 1,
            ingridient: 2, 
          }
        });
        console.log(response, response2); */
  
      } catch(error) {
        this.error = error;
        
      }
    },

 }
 }; 

</script>

<style lang="scss">

</style>