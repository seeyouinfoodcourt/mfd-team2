<template>
    <header>
      <div class="header">
        <div class="header__content">
          <div>
            <a href="/"><img src="/img/logo/cookingtime_new.svg" alt="Recipe" class="logo-img"></a>
          </div>
      
      <div class="icon">
        <div class="plus-item"><i class='fas fa-plus plus-icon'></i></div>
        <div class="item"><div class="notification">
          <span><i class='far fa-bell'></i></span>
          <span class="sign">
            <span class="signNumber">2</span>
          </span>

        </div>
      </div>

    <div class="user-container">
         <!-- <router-link to="/">Home</router-link> | -->
        <!-- <router-link :to="{ name: 'Search' }">Search</router-link> | -->
        <!-- <router-link to="/register" v-if="!user">Sign up</router-link>  -->
        <router-link to="/login" v-if="!user"><i class="icofont-user-alt-3 user-icon"></i></router-link>
        
        <div class="login-cointer">
        <div class="profil"><router-link to="/profile" v-if="user"><img src="/img/profil/profil2.png" alt="Profil" class="profil-img"><div class="user-loggin">{{ user.username }}</div></router-link></div>
        <span @click="logout">
          <router-link to="/" v-if="user" class="logout">Logud</router-link>
        </span></div>
    </div>
      </div>
      </div>
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
    
}
</script>
<style>
</style>