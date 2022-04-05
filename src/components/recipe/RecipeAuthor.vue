<template>
    <div class="recipe-cook">
     
         <img class="profile-img" :src="imgSrc" :alt="imgAlt" />
     
     <p class="cardAuthor">By {{ author.attributes.username }}</p>              
                  
    </div>
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
        console.log(this.imgSrc)
    }

}
</script>

<style>
.recipe-cook {
    display: inline-flex;
    align-items:center;
    margin-top:8px;
    /* justify-content: space-between; */
}

.profile-img {
    border-radius:100%;
    width: 2em;
    height: 2em;
    background-color:grey;
    margin-right:8px;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
    
}
</style>