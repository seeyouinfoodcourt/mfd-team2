<template>
    <!-- <router-link :to="{ name: 'RecipeDetails', params: { id: recipe.id} }"> -->
        <div class="recipe-card" :class="cardSize">
        <img src="../../../public/img/recipes/pexels-edward-eyer-1049620.jpg" alt="pizza" class="recipe-img">
        <div class="recipe-title">
            <h4 class="card-headline">{{ recipe.title }}</h4>
            <RecipeAuthor :author="recipe.author"/>          
            <!-- <button class="btnPrimaryGreen" v-if="cardSize === 'medium' || cardSize === 'large'">Cook <i class="icofont-arrow-right"></i></button>             -->
            </div>
        </div>
    <!-- </router-link> -->


</template>

<script>
import RecipeAuthor from './RecipeAuthor.vue'

export default {
    props: [ 'recipe', 'cardSize' ],
    components: { RecipeAuthor }
}
</script> 

<style scoped>

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


button.btnPrimaryGreen{
    padding-right: 8px;
    padding-left: 8px;
    float:right;
}

</style>