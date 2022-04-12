<template>
<div class="ingredient__card">
    <div class="ingredient__info">
        <img src="" alt="" class="ingredient__img">img
        <div class="ingredient__name">name</div>
    </div>
    <div class="ingredient__amount">{{ this.amount }}</div>
</div>
</template>

<script>
export default {
    props: ['amount']
}
</script>

<style>

</style>