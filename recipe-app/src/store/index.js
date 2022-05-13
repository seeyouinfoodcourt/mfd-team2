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
    },

    // Kenneths state/local storage   script
    initLocalStorageCache(state) {
      if(localStorage.getItem('store')){
        this.replaceState(
          Object.assign(state, JSON.parse(localStorage.getItem('store')))
        );
      }

    }
  },
  actions: {
    fetchRecipes({ commit }) {
      console.log('fetch recipes')      
      axios.get(`${process.env.VUE_APP_STRAPI}api/recipes?populate=*`).then(response => {
        commit('fetchRecipes', response.data.data)
      })
    }
  },
  modules: {
  }
})
