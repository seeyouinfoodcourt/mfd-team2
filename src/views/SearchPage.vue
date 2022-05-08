<template>
  <SearchBar />  <!--@input="onSearch"-->
    <span v-for="recipe in filteredList" :key="recipe.id">
      <p>{{ recipe.attributes.Title}}</p>
    </span>
</template>

<script>
import SearchBar from '../components/search/SearchBar.vue'

export default {
  components: {
    SearchBar,    
  },
  data(){
    return{
      recipes: [],
      search:'',
    }
  },
  mounted() {
      fetch(`${process.env.VUE_APP_STRAPI}api/recipes?populate=*`).then(response => response.json()).then(data => this.recipes = data.data);
    },

  /*
  methods: {
      onSearch(query) {
        console.log('search', query);
      }
  },*/

  computed: {
    filteredList() {
      return this.recipes.filter(recipe => {
        return recipe.attributes.Title.toLowerCase().match(this.search.toLowerCase())
      })
    }
  }
}
</script>

<style>

</style>