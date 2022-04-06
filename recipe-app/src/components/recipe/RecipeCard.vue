<template>
    
    <div class="card" :class="slideWidth">
        <div class="card__header">
            <img :src="cardImg" :alt="recipe.attributes.Title" class="card__img">
            <div class="card__overlay">
                <div class="topleft">
                    <RecipeStats />
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
            numberOfIngredients: 14,
            emoji: '&#128336;'
        }
    },
    mounted(){
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


    .recipe-attributes{
        flex:100%;
        align-self:flex-end;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;        
        p{
            margin:0;
        }
    }
    
    

    .topleft {
        flex: 50%; 
    }

    .bottomleft {
        flex: 50%;
    }
    
    .bottomleft,  .bottomright{
      align-self:flex-end;
      
    }


.card__header {
    position: relative;
}

.card__overlay{
    padding:1em;
    color:white;
    display: flex;
    flex-wrap: wrap;
    background: linear-gradient(0deg, #181818 0%, rgba(24, 24, 24, 0) 30.04%);
    position: absolute;
    z-index: 100;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

.card {
    background-color: #fff;
    width: 100%;
    border-radius:8px; 
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);
}


.card__img{
    max-width:100%;
    border-radius: 8px 8px 0 0;
}
.card__title{
    padding: 8px;    
}
.card__title h4{
    margin: 0;
    text-overflow: ellipsis;
    overflow:hidden;
}

.card__body{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

button.btnPrimaryGreen{
    padding-right: 8px;
    padding-left: 8px;
    float:right;
}

</style>