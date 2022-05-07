<template>
<div class="ingredient__card">
    <div class="ingredient__info">
        <div class="ingredient__name">{{ this.name }}</div>
    </div>
    <div class="ingredient__amount">{{ this.amount }} {{ this.unit }}</div>
</div>
</template>

<script>
export default {
    props: ['amount', 'unit', 'name']
}
</script>

<style>

</style>