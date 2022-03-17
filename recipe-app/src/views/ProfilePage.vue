<template>
  <div>
    <h1>Profile Page</h1>
    <p>{{ user.username }}</p>
    <p>{{ user.email }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: JSON.parse(window.localStorage.getItem("userData"))
    }
  }
}
</script>

<style>
</style>