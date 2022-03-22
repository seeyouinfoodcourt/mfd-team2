<template>
  <section class="dropdown-wrapper">
  <div class="dropdown-popover"> 
    <input @click="isVisible = !isVisible" v-model="search"  placeholder="Search ingredient..">
    <div  v-if="isVisible" class="options">
    <ul>
        <li @click="selectedIngredient(ingredient, showItem)"  v-for="ingredient in  filteredIngredient" :key="ingredient.id"> 
            {{ingredient.attributes.Name}}</li>
    </ul>
  </div>
  </div>
</section>


<section class="addIngredientSection" >
  <div class="grid" v-for="item in showItem " :key="item.id" >
  
  <div class="grid-item">
    <div>{{ item }} </div>
  </div>

    <div class="grid-item">
      <label>Amount: </label>
      <input type="number" >
    </div>

    <div class="grid-item">
      <label>Unit: </label>
      <select> 
        <option v-for="unit in allUnits" :key="unit.id">{{ unit.attributes.ShortName }}</option>
      </select>
    </div>

    <div class="wrap-item">
      <button @click="deleteIngredient(item)" type="button" class="btnClose"><i class="icofont-close"></i></button>
    </div>

  </div>
</section>
</template>

<script>
import axios from 'axios'; 

export default {
name:'FormAddIngredient',
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
