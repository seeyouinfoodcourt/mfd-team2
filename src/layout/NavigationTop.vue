<template>
  <header>
    <div class="header">
      <div class="header__content">
        <div>
          <router-link to="/feed"
            ><img
              src="/mfd-team2/img/logo/cookingtime_new.svg"
              alt="Recipe"
              class="logo-img"
          /></router-link>
        </div>

        <div class="icon">
          <div class="item" v-if="user">
            <span class="material-icons-round">notifications</span>
          </div>

          <div class="user-container">
            <router-link to="/register" v-if="!user">
              <button class="button button--green button--small">
                Sign up
              </button>
            </router-link>

            <div class="login-cointer">
              <div class="profil">
                <router-link to="/profile" v-if="user"
                  ><img :src="profileImgUrl" alt="Profil" class="profil-img" />
                  <div class="user-loggin">
                    {{ user.username }}
                  </div></router-link
                >
              </div>
            </div>
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
      profileImgUrl: "/mfd-team2/img/profile/profile-placeholder.png",
    };
  },
  mounted() {
    this.user = JSON.parse(window.localStorage.getItem("userData"));
    if (this.user) {
      try {
        this.profileImgUrl = require("../../public/img/profile/person" +
          this.user.id +
          ".jpg");
      } catch (ex) {
        this.profileImgUrl = "/mfd-team2/img/profile/profile-placeholder.png";
      }
    }
  },
  methods: {
    logout() {
      window.localStorage.removeItem("jwt");
      window.localStorage.removeItem("userData");
      this.$router.go("/feed");
    },
    toggle() {
      this.active = !this.active;
    },
  },
};
</script>
<style>
</style>