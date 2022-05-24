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
    <span v-if="myProfile" @click="logout"
      ><router-link to="/" v-if="user" class="profile__logout">
        - Log out</router-link
      ></span
    >
    <p class="profile__text">
      Hi there! I am {{ user.username }}.
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
      loggedIn: false,
      myProfile: false
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
    } else {
      this.loggedIn = false
    }
    if(this.loggedIn){
      if(this.id === JSON.parse(localStorage.getItem("userData")).id){
        this.myProfile = true
      } else if(!this.id){
        this.myProfile = true
      } else {
        this.myProfile = false
      }
    }


    if(this.loggedIn){
      if(this.myProfile){
        this.user = JSON.parse(window.localStorage.getItem("userData"));
        this.updateProfileImg(this.user.id)

      } else {
        this.fetchPublicProfile()
      }
    } else {
        this.fetchPublicProfile()
    }
      

    // If ID prop has a number show public profile

    // If ID prop has a number that matches loggin user ID, show logged in user

    // if(window.localStorage.getItem("jwt")){
    //   this.loggedIn = true
    //   this.user = JSON.parse(window.localStorage.getItem("userData"));
    // } else {
    //   this.loggedIn = false
    //   fetch(
    //   `${process.env.VUE_APP_STRAPI}api/users/${this.id}`
    //   )
    //   .then((response) => response.json())
    //   .then((data) => (this.user = data))
  

    // }
    // console.log('Logged In', this.loggedIn, this.user)
    
    
    

    // this.imgAlt = this.user.username;
    // console.log(this.user);
  },
  methods: {
    logout() {
      window.localStorage.removeItem("jwt");
      window.localStorage.removeItem("userData");
      this.$router.go("/feed");
    },
    updateProfileImg(userId){
      try {
      this.profileImgUrl = require("../../public/img/profile/person" +
        userId +
        ".jpg");
    } catch (ex) {
      this.profileImgUrl = "/mfd-team2/img/profile/profile-placeholder.png";
    }
    },
    fetchPublicProfile(){
      fetch(
      `${process.env.VUE_APP_STRAPI}api/users/${this.id}`
      )
      .then((response) => response.json())
      .then((data) => (this.user = data))

      this.updateProfileImg(this.id)
    }
  },
};
</script>

<style lang="scss">
</style>