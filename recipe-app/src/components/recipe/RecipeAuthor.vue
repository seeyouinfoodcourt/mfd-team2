<template>
    <div class="recipe-cook">
     <div class="profile-img"></div>
     <p class="cardAuthor">By {{ author }}</p>              
                  
    </div>
</template>

<script>
export default {
    props: [ 'author' ]

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