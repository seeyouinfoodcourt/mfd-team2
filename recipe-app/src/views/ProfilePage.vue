<template>
  <div>
    <!-- <h1>Profile Page</h1> -->
    <img src="/mfd-team2/img/profile/person8.jpg" class="profil__img">
    <p>{{ user.username }}</p>
    <p class="profil__text">Hello world I’m Alessandra Blair, I’m from Italy 🇮🇹 I love cooking so much!</p>
    <!-- <p>{{ user.email }}</p> -->

    <p>Opskrifter</p>

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
.profil__img{
  border-radius: 50%;
  margin-top: 5%;
  width: 100px;
  border: 7px solid #FF5F5F;
}

.profil__text{
  width: 80%;
}
</style>