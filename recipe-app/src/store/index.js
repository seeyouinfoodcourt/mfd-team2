import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    recipes: []
  },
  getters: {
  },
  mutations: {
    fetchRecipes(state, response) {
      state.recipes = response
      console.log('Mutatuions', state.recipes)

    },

    // Kenneths state/local storage   script
    // initLocalStorageCache(state) {
    //   if(localStorage.getItem('store')){
    //     this.replaceState(
    //       Object.assign(state, JSON.parse(localStorage.getItem('store')))
    //     );
    //   }

    // }
  },
  actions: {
    async fetchRecipes({ commit }){
      const response = await axios.get(`${process.env.VUE_APP_STRAPI}api/recipes?populate=users_permissions_user,recipe_ingredients.unit,recipe_ingredients.ingredient,equipment,difficulty,likes,Image`)
      console.log('async fetch')
      commit('fetchRecipes', response.data.data) 
    }
    // fetchRecipes({ commit }) {
    //   console.log('actions fetch recipes')
    //   axios
    //     .get(`${process.env.VUE_APP_STRAPI}api/recipes?populate=users_permissions_user,recipe_ingredients.unit,recipe_ingredients.ingredient,equipment,difficulty,likes,Image`)
    //     .then(response => {
    //       commit('fetchRecipes', response.data.data)
    //       }
    //     )
    //     .catch((err) => console.error(err) )
    // }

  },
  modules: {
  }
})
