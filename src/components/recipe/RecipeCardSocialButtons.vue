<template>
    <div class="social-btns">
        <button class="like"><span class="material-icons-round">favorite</span></button>
        <button class="bookmark"><span class="material-icons-round">bookmark_border</span></button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            recipeLike: {
                data: {
                    

                }
            }
        }
    },
    methods: {
        handleLike(){
            // const response = await this.axios.post('http://localhost:1337/api/recipelikes', this.recipeLike)
        }
    }

}
</script>

<style lang="scss">
    
</style>