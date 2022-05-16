<template>
<div class="step">
    <h4 class="step__title">
        Step {{ this.number+1 }}: {{ this.title }}
    </h4>
    <p class="step__instructions">
        {{ this.instruction }}
    </p>

</div>
  
</template>

<script>
export default {
    props: ['title', 'instruction', 'number']

}
</script>

<style>

</style>