<template>
<div class="step__card">
    <h4 class="step__title">
        Step {{ this.number }} - {{ this.title }}
    </h4>
    <p class="step__instructions">
        {{ this.instruction }}
    </p>

</div>
  
</template>

<script>
export default {
    props: ['number', 'title', 'instruction']

}
</script>

<style>

</style>