<template>    
    <div class="card" :class="slideWidth">
        <div class="card__header">
            <img :src="cardImg" :alt="recipe.attributes.Title" class="card__img">
            <div class="card__overlay">
                <div class="topleft" v-if="slideWidth === 'medium' || slideWidth === 'large'">
                    <RecipeStats  />
                </div>
                <div class="topright">
                    <RecipeCardSocialButtons />
                </div>
                <div class="recipe-attributes">
                    <div class="recipe-attributes__left">
                        <p class="recipe-attributes__left__difficulty">{{ recipe.attributes.difficulty.data.attributes.Name }} <span class="emoji"></span> </p>
                        <p class="recipe-attributes__left__ingredients">{{ numberOfIngredients }} ingredients</p>
                    </div>
                    <div class="recipe-attributes__right">
                        <p class="recipe-attributes__rightcook-time">&#128336; {{ recipe.attributes.CookTime }}min</p>
                    </div>
                </div>                
            </div>
        </div>        
        <div class="card__title">
            <h4 class="card-headline">{{ recipe.attributes.Title }}</h4>
            <div class="card__body">
                <RecipeAuthor :author="cardAuthor"/>          
                <router-link :to="{ name: 'RecipeDetails', params: { id: recipe.id} }" v-if="slideWidth === 'medium' || slideWidth === 'large'">
                    <button class="button button--green">Cook <i class="icofont-arrow-right"></i></button>
                </router-link>
            </div>
            <div class="card__gallery" v-if="slideWidth === 'full' ">
                
            </div>            
        </div>
    </div>
  
 
</template>

<script>
import RecipeAuthor from './RecipeAuthor.vue'
import RecipeStats from './RecipeStats.vue'
import RecipeCardSocialButtons from './RecipeCardSocialButtons.vue'

export default {
    props: [ 'recipe', 'cardSize', 'slideWidth' ],
    components: { RecipeAuthor, RecipeStats, RecipeCardSocialButtons },
    data(){
        return{     
            cardAuthor: this.recipe.attributes.users_permissions_user.data,
            cardImg: 'Test',
            numberOfIngredients: this.recipe.attributes.recipe_ingredients.data.length,
            emoji: '&#128336;'
        }
    },
    mounted(){      
        console.log('HER!', this.numberOfIngredients)  
        document.querySelector('.emoji').innerHTML = '&#'+this.recipe.attributes.difficulty.data.attributes.ImageURL+';'
        this.cardImg = require('../../../public/img/food/'+this.recipe.attributes.ImageURL)
        console.log(this.recipe.attributes)
        // console.log(this.recipe.attributes.Title, this.recipe.attributes.users_permissions_user.data.attributes.username)
        // console.log(this.recipe.attributes.Title, this.recipe.attributes.ImageURL)
        // console.log(this.recipe.id, this.cardImg)
        // console.log('Card Author', this.cardAuthor)
    }
}
</script> 

<style lang="scss">



</style>