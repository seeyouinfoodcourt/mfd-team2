<template>
  <div>
    <div>
      <div>
        <router-link to="/">Home</router-link> |
        <router-link :to="{ name: 'Search' }">Search</router-link> |
        <router-link to="/register" v-if="!user">Sign Up</router-link> |
        <router-link to="/login" v-if="!user">Log In</router-link> |
        <router-link to="/profile" v-if="user">{{ user.username }}</router-link>
        <span @click="logout">
          <router-link to="/" v-if="user">LOGOUT</router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavigationTop",
  data() {
    return {
      user: {},
    }
  },
  mounted() {
    this.user = JSON.parse(window.localStorage.getItem("userData"))
  },
  methods: {
    logout() {
      window.localStorage.removeItem("jwt")
      window.localStorage.removeItem("userData")
      this.$router.go('/feed')
    }
  }
}
</script>
<style>
</style>