<template>
    <div class="social-btns">
        <button class="like"><span class="material-icons-round">favorite</span></button>
        <button class="bookmark"><span class="material-icons-round">bookmark_border</span></button>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .social-btns button {
    background-color: rgba(255, 95, 95, 0.8);
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 50%;
    margin-left:8px;
    color:white; 
    span{
        font-size: 20px;
    }   
}
</style>