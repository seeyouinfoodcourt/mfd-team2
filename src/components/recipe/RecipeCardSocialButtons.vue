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
            // Change x.id to dynamic user ID
            recipeLiked: this.recipe.attributes.likes.data.filter((user) => user.id === 1).length > 0,
            loggedInUser: JSON.parse(localStorage.getItem('userData'))
        }
    },
    methods: {
        handleLike(){
            if(this.recipeLiked){
                // TODO: Remove like entry from database
                console.log('Already liked')
                this.recipeLiked = false
            } 
            else
            {
                const response = axios.put(`http://localhost:1337/api/recipes/${this.recipe.id}?populate=likes`,
                {
                    data: {
                        likes: 1
                    }
                })
                this.recipeLiked = true
                console.log(response)
                // console.log(this.recipe.attributes.likes.data.map((x) => x.id = 1) > 0)
            }
            
        }
    },
    mounted() {
        // console.log(this.recipe)
        // console.log(this.recipeLiked)
        // console.log('Recipe ID ' + this.recipe.id, this.recipe.attributes.likes.data.map((x) => x.id = 1))
        // Change x.id to dynamic user ID
        // if(){
        //     // console.log('HEJ HEJ HEJ', this.recipe.attributes.likes.data.length)
        // }
        // console.log(this.recipe)
        console.log('map', this.recipe.attributes.likes.data.map((x) => x.id === 1))
        console.log('filter', this.recipe.attributes.likes.data.filter((x) => x.id === 1))
        
    }
}
</script>

<style lang="scss">
    
</style>