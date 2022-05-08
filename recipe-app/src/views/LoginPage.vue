<template>
  <div>
    <div class="">
      <div class="">
        <div class="">
          <form class="form__card" @submit="login">
            <div class="">
              <label class="form__label">Email</label><br>
              <input class="form__input" type="email" v-model="email" />
            </div><br>
            <div class="">
              <label class="form__label">Password</label><br>
              <input class="form__input" type="password" v-model="password" />
            </div>
            <p v-show="error" class="form__error">{{ errorMsg }}</p>
            <br>
            <button class="button button--green button--wide" type="submit" :disabled="password.length < 3">Log in</button>
            <p class="form__link"><br>
              <router-link to="/forgotpassword">Forgot password?</router-link>
            </p><br>
            <p class="form__link">Don't have an account?
              <router-link to="/register">Sign up</router-link>
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
      errorMsg: "The email or password was incorrect",
    };
  },
  methods: {
    async login(e) {
      e.preventDefault();
      try {
        const res = await this.axios.post(
          `${process.env.VUE_APP_STRAPI}api/auth/local`,
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