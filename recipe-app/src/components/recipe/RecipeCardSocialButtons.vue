<template>
    <div class="social-btns">
        <button @click="handleLike()" class="like">
            <span class="material-icons-round" v-if="recipeLiked">favorite</span>
            <span class="material-icons-round" v-else>favorite_border</span>
            
        </button>
        <button class="bookmark"><span class="material-icons-round">bookmark_border</span></button>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    props: ["recipe"],
    data() {
        return {
            loggedInUser: JSON.parse(localStorage.getItem('userData')),
            recipeLiked: false,
            recipeLikes: this.recipe.attributes.likes.data
            
        }
    },
    methods: {
        handleLike(){
            if(this.recipeLiked){
                // TODO: Remove like entry from database
                console.log('Already liked')
                const index = this.recipeLikes.map(x => x.id).indexOf(this.loggedInUser.id)
                this.recipeLikes.splice(index, 1)

                const response = axios.put (`${process.env.VUE_APP_STRAPI}api/recipes/${this.recipe.id}?populate=likes`,
                {
                    data: {
                        likes: this.recipeLikes
                    }
                })

                this.recipeLiked = false
                console.log(response)
            } 
            else
            {   
                const response = axios.put (`${process.env.VUE_APP_STRAPI}api/recipes/${this.recipe.id}?populate=likes`,
                // const response = axios.put(`http://localhost:1337/api/recipes/${this.recipe.id}?populate=likes`,
                {
                    data: {
                        likes: this.loggedInUser.id
                    }
                })
                this.recipeLiked = true
                console.log(response)
                // console.log(this.recipe.attributes.likes.data.map((x) => x.id = 1) > 0)
            }
            
        }
    },
    mounted() {

    }
}
</script>

<style lang="scss">
    
</style>