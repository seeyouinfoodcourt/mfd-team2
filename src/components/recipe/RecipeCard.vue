<template>
    <div class="card" :class="slideWidth"
        @mousedown.left="registerClick"
        @touchstart="registerClick"
        @mouseup.left="goToDetails"
        @touchend="goToDetails"
        >
            <div class="card__header">
                <img :src="cardImg" :alt="recipe.attributes.Title" class="card__img">
                <div class="card__overlay">
                    <div class="topleft" v-if="slideWidth === 'medium' || slideWidth === 'large'">
                        <RecipeStats :recipe="recipe" />
                    </div>
                    <div class="topright">
                        <RecipeCardSocialButtons :recipe="recipe" />
                    </div>
                    <div class="recipe-attributes">
                        <div class="recipe-attributes__left">
                            <p class="recipe-attributes__left__difficulty" v-if="recipe.attributes.difficulty.data">
                                {{ recipe.attributes.difficulty.data.attributes.Name }}
                                <span :class="'emoji-'+recipe.id"></span>
                            </p>
                            <p class="recipe-attributes__left__ingredients">{{ numberOfIngredients }} ingredients</p>
                        </div>
                        <div class="recipe-attributes__right">
                            <p class="recipe-attributes__rightcook-time">&#128336; {{ recipe.attributes.CookTime }}min</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card__title">
                <h4 class="card-headline"><router-link :to="{ name: 'RecipeDetails', params: { id: recipe.id } }">{{ recipe.attributes.Title }}</router-link></h4>
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
        // console.log(this.recipe.attributes.users_permissions_user)
        return{
            cardAuthor: this.recipe.attributes.users_permissions_user.data,
            cardImg: '/mfd-team2/img/food/placeholder.png',
            numberOfIngredients: this.recipe.attributes.recipe_ingredients.data.length,
            emoji: '&#128336;',
            clickTimeStamp: 0
        }
    },
    methods: {
        registerClick(event) {
            this.clickTimeStamp = event.timeStamp
        },
        goToDetails(event) {
            if(event.timeStamp - this.clickTimeStamp < 200){
                this.$router.push({ name: 'RecipeDetails', params: { id: this.recipe.id } })
            }
            console.log(event.timeStamp - this.clickTimeStamp)
        }
    },
    mounted(){
        // console.log('card', this.recipe.attributes.users_permissions_user.data)
        if(this.recipe.attributes.difficulty.data?.attributes.ImageURL)
        {   
            document.querySelector('.emoji-'+this.recipe.id).innerHTML = '&#'+this.recipe.attributes.difficulty.data.attributes.ImageURL+';'
        } else {
            console.log('no emoji')
        }
        if(this.recipe.attributes.Image)
        {
            this.cardImg = this.recipe.attributes.Image.data.attributes.formats.medium.url
        }
    }
}
</script>

<style lang="scss">



</style>