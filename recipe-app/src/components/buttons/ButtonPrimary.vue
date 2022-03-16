<!--Button component
Import it and use it like this: <ButtonGreen text="Your costum test" color="Color name or color code"/> 
Add more props if needed -->

<template>
  <button type="button" :style="{background:color}" class="btn buttonGreen">{{ text }}</button>
</template>

<script>
export default {
    name: 'ButtonGreen ',
    props: {
        text: String, 
        color: String, 
    }
}
</script>

<style>

</style>