<template>
    <div class="recipe-card" :class="cardSize">
      <img src="../../../public/img/recipes/pexels-edward-eyer-1049620.jpg" alt="pizza" class="recipe-img">
      <div class="recipe-title">
          <h4>{{ recipe.title }}</h4>
          <div class="recipe-cook">
              <div class="profile-img"></div>
              <p>By {{ recipe.author }}</p>              
          </div>
          <!-- <router-link :to="{ name: 'RecipeDetails', params: { id: recipe.id} }">
              <button v-if="cardSize === 'medium' || cardSize === 'large'">Cook <i class="icofont-arrow-right"></i></button>
            </router-link> -->
        </div>
    </div>


</template>

<script>
export default {
    props: [ 'recipe', 'cardSize' ],
}
</script>

<style>

body{
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    
}

#app{background-color: #FFF9F5;}

.recipe-card {
    background-color: #fff;
    width: 100%;
    border-radius:8px; 
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);
}

.recipe-card.small{
    width:45%;
}

.recipe-card.medium{
    width: 80%;
}

.recipe-card.large{
    width:100%;
}
.recipe-img{
    max-width:100%;
    border-radius: 8px 8px 0 0;
}
.recipe-title{
    padding: 8px;    
}
.recipe-title h4{
    margin: 0;
    text-overflow: ellipsis;
    overflow:hidden;
}

.recipe-cook{
    display: flex;
    align-items:center;
    /* justify-content: space-between; */
}

.profile-img{
    border-radius:100%;
    width: 2em;
    height: 2em;
    background-color:grey;
    margin-right:1em;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
    
}

button{
    background-color:#80BA72;
    border:0;
    padding:  12px 16px;
    border-radius:8px;
    color: #fff;
    font-weight: bold;
    font-size: 1.2em;    
}

</style>