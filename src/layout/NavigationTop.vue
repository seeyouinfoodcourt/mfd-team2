<template>
    <header>
      <a href="/"><img src="/img/logo/cookingtime2.svg" alt="Recipe" class="logo-img"></a>
      <div class="icon">
        <div class="plus-item"><i class='fas fa-plus plus-icon'></i></div>
        <div class="item"><i class='far fa-heart heart-icon'></i></div>
        <div class="item"><div class="notification">
          <span><i class='far fa-bell'></i></span>
          <span class="sign">!</span>
        </div>
      </div>

         <!-- <router-link to="/">Home</router-link> | -->
        <!-- <router-link :to="{ name: 'Search' }">Search</router-link> | -->


  <div class="user-container">
      <span v-if="isLoggedIn">
        <a @click="logout">Logout</a>
      </span>
      <span v-else>
        <router-link to="/register" class="user-icon"><i class='fas fa-user-plus'></i></router-link>
        <router-link to="/login" class="user-icon"><i class='fas fa-user-alt'></i></router-link>
    </span>
  </div>
      <router-link to="/profile" v-if="user">{{ user.username }}</router-link>
        <span @click="logout">
          <router-link to="/" v-if="user">LOGOUT</router-link>
        </span>

        <!-- <router-link to="/register" v-if="!user">Sign Up</router-link>  -->
        <!-- <router-link to="/login" v-if="!user">Login</router-link>  -->
        <!-- <router-link to="/profile" v-if="user">{{ user.username }}</router-link>
        <span @click="logout">
          <router-link to="/" v-if="user">LOGOUT</router-link>
        </span> -->
      </div>
    </header>
</template>

<script>
export default {
  name: "NavigationTop",
  data() {
    return {
      user: {},
      active: false,
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
    },
     toggle () {
        this.active = !this.active
      }
  },
    async logout() {
      await this.$store.dispatch('LogOut')
      this.$router.push('/login')
    } 
}
</script>
<style>
</style>