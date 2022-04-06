<template>
    <div class="social-stats">
        <div class="likes">
            <span class="material-icons-round likes__icon">favorite</span>
            <span class="likes__number">10.540</span>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .likes {
    vertical-align: middle;
    display: inline-flex;
    align-items: center;
    background-color:rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
    padding:4px 8px;
    border-radius: 8px;
    &__icon
    {
        font-size:1.2em;
        margin-right:8px;
    }
    &__number{
        font-size:1em;
    }

}
</style>