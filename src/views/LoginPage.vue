<template>
  <div>
    <div class="flex items-center justify-center h-screen">
      <div class="sm:w-1/2">
        <div class="p-5 w-4/5 mx-auto text-left font-raleway">
          <h1>Log In</h1>
          <p v-show="error" class="text-sm text-red-500">{{ errorMsg }}</p>
          <form @submit="login">
            <div class="my-5">
              <h1 class="text-left font-bold mb-5 font-montserrat">Email</h1>
              <input type="email" v-model="email" />
            </div>
            <div class="my-5">
              <h1 class="text-left font-bold mb-5 font-montserrat">Password</h1>
              <input type="password" v-model="password" />
            </div>
            <br />
            <button type="submit" :disabled="password.length < 3">Login</button>
            <p class="my-2">
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
        this.$router.go("/");
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