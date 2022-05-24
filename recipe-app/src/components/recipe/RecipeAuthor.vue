<template>
    <router-link :to="{ name: 'ProfileDetails', params: { id: author.id} }">
        <div class="recipe-cook">
            <img class="profile-img" :src="imgSrc" :alt="imgAlt" />        
            <p class="cardAuthor">By {{ author.attributes.username }}</p>                    
        </div>
    </router-link>
</template>

<script>
export default {
    props: [ 'author' ],
    data(){
        return{
            imgSrc: '',
            imgAlt: ''
        }
    },
    mounted(){
        this.imgSrc = require('../../../public/img/profile/person'+this.author.id+'.jpg')
        this.imgAlt = this.author.attributes.username
        // console.log(this.imgSrc)
    }

}
</script>

<style>

</style>