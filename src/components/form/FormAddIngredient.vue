<template>
  <section class="dropdown-wrapper">
  <ButtonPrimary @click="isVisible = !isVisible" text="Add ingredient" color="#80BA72"/>
  <div v-if="isVisible" class="dropdown-popover"> 
    <input v-model="search"  placeholder="Search ingredient..">
    <div class="options">
    <ul>
        <li @click="selectedIngredient(ingredient, showItem)"  v-for="ingredient in  filteredIngredient" :key="ingredient.id"> 
            {{ingredient.attributes.Name}}</li>
    </ul>
  </div>
  </div>
</section>

<section class="addIngredientSection" >
  <div class="grid" v-for="item in showItem " :key="item.id" >
  
  <div class="wrap-item">
    <div>{{ item }} </div>
  </div>

    <div class="wrap-item">
      <label>Amount: </label>
      <input type="number" >
    </div>

    <div class="wrap-item">
      <label>Unit: </label>
      <select> 
        <option v-for="unit in allUnits" :key="unit.id">{{ unit.attributes.ShortName }}</option>
      </select>
    </div>

    <div class="wrap-item">
      <button @click="deleteIngredient(item)" type="button" class="btn-close"><i class="icofont-close"></i></button>
    </div>

  </div>
</section>
</template>

<script>
import axios from 'axios'; 
import ButtonPrimary from '../buttons/ButtonPrimary.vue'; 

export default {
name:'FormAddIngredient',
components: {
    ButtonPrimary,
},
  data () {
    return {
      search: '',
      selectedItem: null,
      isVisible: false,
      allIngredients: [],
      showItem: [],
      allUnits: [],
    }
 },
   computed:{
    filteredIngredient(){
      return this.allIngredients.filter((ingredient)=>{
        return ingredient.attributes.Name.toLowerCase().match(this.search)
      }); 
    }    
  },
async mounted() {
    try {
      const response = await axios.get ('http://localhost:1337/api/ingredients')
      this.allIngredients = response.data.data; 
      const response2 = await axios.get ('http://localhost:1337/api/units')
      this.allUnits = response2.data.data; 

    } catch (error) {
      this.error = error;
    }
  },

  methods:{  
    selectedIngredient(ingredient, showItem){
     this.selectedItem = ingredient.attributes.Name; 
     this.isVisible = false;  
     showItem.push(this.selectedItem)
  },

    deleteIngredient(item){
      this.showItem = this.showItem.filter((item1)=>{
        return item!== item1
      })
    },

}
}
</script>
