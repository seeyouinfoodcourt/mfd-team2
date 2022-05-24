<template>
<div class="equipment__card">
    <!-- <div class="equipment__img">
        <img src="" alt="">img
    </div> -->
    <div class="equipment__name">
        {{ this.name }}
    </div>
</div>
  
</template>

<script>
export default {
    props: ['name', 'img']

}
</script>

<style>

</style>