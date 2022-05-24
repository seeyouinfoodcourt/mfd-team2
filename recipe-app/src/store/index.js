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
      // console.log('Mutatuions', state.recipes)

    },
  },
  actions: {
    async fetchRecipes({ commit }){
      const response = await axios.get(`${process.env.VUE_APP_STRAPI}api/recipes?populate=users_permissions_user,recipe_ingredients.unit,recipe_ingredients.ingredient,equipment,difficulty,likes,Image`)
      commit('fetchRecipes', response.data.data) 
    }
  },
  modules: {
  }
})
