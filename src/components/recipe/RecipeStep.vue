<template>
<div class="step">
    <h4 class="step__title">
        Step: {{ this.title }}
    </h4>
    <p class="step__instructions">
        {{ this.instruction }}
    </p>

</div>
  
</template>

<script>
export default {
    props: ['title', 'instruction']

}
</script>

<style>

</style>