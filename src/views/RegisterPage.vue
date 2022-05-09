<template>
  <div>
    <form class="form__card" @submit="register">
      <h2>Sign up for the app</h2>
      <div>
        <label class="form__label">Username</label>
        <input class="form__input" type="text" v-model="username" />
      </div><br>
      <div>
        <label class="form__label">Email</label>
        <input class="form__input" type="email" v-model="email" />
      </div><br>
       <div class="form_upload_image">
         <label class="form__label">Upload profile picture</label>
          <input type="file" @change="onFileSelected">
          <button @click="onUpload">Upload</button>
      </div><br>
       <div>
        <label class="form__label">Password</label>
        <input class="form__input" type="password" v-model="password" />
      </div>
      <p class="form__error" v-show="error">{{ errorMsg }}</p>
      <br>
      <button class="button button--green button--wide" type="submit">
        Sign Up
      </button><br><br>
      <p class="form__link">Already have an account?
              <router-link to="/login">Log in</router-link>
            </p>
    </form>
  </div>
</template>

<script>
export default {
  name: "RegisterPage",
  data() {
    return {
      email: "",
      password: "",
      username: "",
      error: false,
      errorMsg: "An error occurred. Please try again later.",
      selectedFile: null
    }
  },
  methods: {
    async register(e) {
      try {
        e.preventDefault();
        await this.axios.post(`${process.env.VUE_APP_STRAPI}api/auth/local/register`, {
          password: this.password,
          email: this.email,
          username: this.username
        })
        this.$router.push("/login")
      } catch (e) {
        this.error = true
      }
    }, onFileSelected(event){
      this.selectedFile = event.target.files[0]
    },
    onUpload(){

    }
  }
}
</script>

<style scoped>
</style>