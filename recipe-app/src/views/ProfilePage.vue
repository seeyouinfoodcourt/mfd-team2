<template>
  <div class="profile">
    <!-- <h1>Profile Page</h1> -->
    <div class="profile__header">
      <img :src="profileImgUrl" :alt="profileImgAlt" class="profile__img" />
      <div class="profile__header__stats">
        <p>Recipes: {{ recipes.length }} | Likes: 0 | Followers: 0</p>
      </div>
    </div>
    <h1 class="profile__username">{{ user.username }}</h1>
    <span v-if="loggedIn" @click="logout"
      ><router-link to="/" v-if="user" class="profile__logout">
        - Log out</router-link
      ></span
    >
    <p class="profile__text">
      Hello world I’m {{ user.username }}, I’m from Italy. I love cooking so
      much!
    </p>
    <!-- <p>{{ user.email }}</p> -->

    <h3>Take a look at my recipes</h3>
    <div class="profile__recipes">
      <div
        class="profile__recipes__recipe"
        v-for="recipe in recipes"
        :key="recipe.id"
      >
        <RecipeCard :recipe="recipe" slideWidth="small" />
      </div>
    </div>
  </div>
</template>

<script>
import RecipeCard from "../components/recipe/RecipeCard.vue";

export default {
  components: {
    RecipeCard,
  },
  props: [ 'id' ],
  data() {
    return {
      user: {},
      profileImgUrl: "/mfd-team2/img/profile/profile-placeholder.png",
      profileImgAlt: "",
      loggedIn: false
    };
  },
  computed: {
    recipes() {
      // User ID is hardcoded for demo purposes
      return this.$store.state.recipes.filter(
        (x) => x.attributes.users_permissions_user.data.id === this.user.id
      );
    },
  },
  mounted() {
    if(window.localStorage.getItem("jwt")){
      this.loggedIn = true
      this.user = JSON.parse(window.localStorage.getItem("userData"));
    } else {
      this.loggedIn = false
      fetch(
      `${process.env.VUE_APP_STRAPI}api/users/${this.id}`
      )
      .then((response) => response.json())
      .then((data) => (this.user = data))
  

    }
    console.log('Logged In', this.loggedIn, this.user)
    

    try {
      this.profileImgUrl = require("../../public/img/profile/person" +
        this.user.id +
        ".jpg");
    } catch (ex) {
      this.profileImgUrl = "/mfd-team2/img/profile/profile-placeholder.png";
    }

    // this.imgAlt = this.user.username;
    // console.log(this.user);
  },
  methods: {
    logout() {
      window.localStorage.removeItem("jwt");
      window.localStorage.removeItem("userData");
      this.$router.go("/feed");
    },
  },
};
</script>

<style lang="scss">
</style>