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
        console.log('index', this.recipeLikes.map(x => x.id).indexOf(this.loggedInUser.id))
        // console.log('like map', this.recipe.attributes.likes.data.map((like) => like.id))
        // console.log('Before splice', this.recipeLikes)
        // setTimeout(() => {
        //     // this.recipeLikes.splice(0, 1)
        // console.log('After splice', this.recipeLikes)
        // }, 2000);
        
        this.recipeLiked = this.recipe.attributes.likes.data.filter((user) => user.id === this.loggedInUser.id).length > 0
        // console.log(this.recipe.attributes.likes.data.filter((user) => user.id === this.loggedInUser.id).length > 0)
        // console.log(this.recipe)
        // console.log(this.recipe)
        // console.log(this.recipeLiked)
        // console.log('Recipe ID ' + this.recipe.id, this.recipe.attributes.likes.data.map((x) => x.id = 1))
        // Change x.id to dynamic user ID
        // if(){
        //     // console.log('HEJ HEJ HEJ', this.recipe.attributes.likes.data.length)
        // }
        // console.log(this.loggedInUser.id)
        // console.log('map', this.recipe.attributes.likes.data.map((x) => x.id === 1))
        // console.log('filter', this.recipe.attributes.likes.data.filter((x) => x.id === 1))
        
    }
}
</script>

<style lang="scss">
    
</style>