<template>
  <section class="dropdown-wrapper">
  <div class="dropdown-popover"> 
    <input class="form__input" type="text" @click="isVisible = !isVisible" v-model="search"  placeholder="Search ingredient..">
    <div  v-if="isVisible" class="options">
    <ul>
        <li @click="selectedIngredient(ingredient, showItem)"  v-for="ingredient in  filteredIngredient" :key="ingredient.id"> 
            {{ingredient.attributes.Name}}</li>
    </ul>
  </div>
  </div>
</section>


<section class="addIngredientSection" >
  <div class="grid" v-for="item in showItem" :key="item.id" >
  
  <div class="grid-item">
    <div>{{ item.item}} </div>
  </div>

    <div class="grid-item">
      <label>Amount: </label>
      <input @change="$emit('costumChange', $event.target.value)" v-model="item.amount" type="number" >
    </div>

    <div class="grid-item">
      <label>Unit: </label>
      <select v-model="item.unit">   
        <option v-for="unit in allUnits" :key="unit.id">{{ unit.attributes.ShortName }}</option>
      </select>
    </div>

    <div class="wrap-item">
      <button @click="deleteIngredient(item)" type="button" class="btnClose"><span class="material-icons-outlined">
close
</span></button>
    </div>

  </div>
</section>
</template>

<script>
import axios from 'axios'; 

export default {
name:'FormAddIngredient',
//emits:['costumChange'],
  data () {
    return {
      search: '',
      selectedItem:null,
      isVisible: false,
      allIngredients: [],
      allUnits: [],
   
      showItem:[], 

      unit:[], 
      amount:[],

      
      
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
      const response = await axios.get (`${process.env.VUE_APP_STRAPI}api/ingredients`)
      this.allIngredients = response.data.data; 
      const response2 = await axios.get (`${process.env.VUE_APP_STRAPI}api/units`)
      this.allUnits = response2.data.data; 

    } catch (error) {
      this.error = error;
    }
  },

  methods:{  
    selectedIngredient(ingredient, showItem){
     this.selectedItem = ingredient.attributes.Name; 
     this.isVisible = false;  
     let obj = {};
     obj['item']= this.selectedItem; 
     showItem.push(obj)
     console.log(showItem); 
  },

  update(showItem){
    //showItem.push(this.unit)
    let obj = {};
    obj['amount']= 10;
    showItem.push(obj)
  },
  
    deleteIngredient(item){
      this.showItem = this.showItem.filter((item1)=>{
        return item!== item1
      })
    },
/*
  add() {
      console.log('test'); 
    }*/
}
}
</script>
