<template>
  <div>
    <div class="">
      <div class="">
        <div class="">
          <h1>Log In</h1>
          <p v-show="error" class="">{{ errorMsg }}</p>
          <form @submit="login">
            <div class="">
              <h1 class="">Email</h1>
              <input type="email" v-model="email" />
            </div>
            <div class="">
              <h1 class="">Password</h1>
              <input type="password" v-model="password" />
            </div>
            <br />
            <button type="submit" :disabled="password.length < 3">Login</button>
            <p class="">
              <router-link to="/forgotpassword">Forgot Password?</router-link>
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
    <script>
export default {
  name: "LoginPage",

  data() {
    return {
      email: "",
      password: "",
      error: false,
      errorMsg: `An error occurred, please try again`,
    };
  },
  methods: {
    async login(e) {
      e.preventDefault();
      try {
        const res = await this.axios.post(
          `http://localhost:1337/api/auth/local`,
          {
            identifier: this.email,
            password: this.password,
          }
        );

        const { jwt, user } = res.data;
        window.localStorage.setItem("jwt", jwt);
        window.localStorage.setItem("userData", JSON.stringify(user));
        this.$router.push("/");
        
      } catch (error) {
        this.error = true;
        this.password = "";
      }
    },
  },
};
</script>
    <style scoped>
</style>