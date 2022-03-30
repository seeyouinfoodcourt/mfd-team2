<template>
  <div>
    <h1>Profile Page</h1>
    <p>{{ user.username }}</p>
    <p>{{ user.email }}</p>

    <span @click="logout">
                <router-link to="/" v-if="user" class="logout"
                  >Logud</router-link
                >
              </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
       user: {}
    }
  },
  mounted() {
    this.user = JSON.parse(window.localStorage.getItem("userData"));
  },
  methods: {
    logout() {
      window.localStorage.removeItem("jwt");
      window.localStorage.removeItem("userData");
      this.$router.go("/feed");
    }
  }
}
</script>

<style>
</style>