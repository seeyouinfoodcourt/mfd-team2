<template>
    <div class="social-stats">
        <div class="likes">
            <span class="material-icons-round likes__icon">favorite</span>
            <span class="likes__number">{{ numberOfLikes }}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: ['recipe'],
    data() {
        return {
            numberOfLikes: this.recipe.attributes?.likes.data.length
        }
    },
    mounted() {
        // console.log(this.recipe)
    }

}
</script>

<style lang="scss">

</style>