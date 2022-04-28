<template>
<div class="ingredient__card">
    <div class="ingredient__info">
        <div class="ingredient__name">name prop</div>
    </div>
    <div class="ingredient__amount">{{ this.amount }} unit prop</div>
</div>
</template>

<script>
export default {
    props: ['amount']
}
</script>

<style>

</style>