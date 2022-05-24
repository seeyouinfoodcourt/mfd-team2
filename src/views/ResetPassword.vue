<template>
  <div>
    <form class="form__card" @submit="resetPassword">
      <h2>Reset Password</h2><br>
      <div>
        <label class="form__label">Password</label>
        <input class="form__input" type="password" v-model="password" />
      </div><br>
      <div>
        <label class="form__label" >Confirm Password</label>
        <input class="form__input" type="password" v-model="confirmPassword" />
      </div>
      <p class="form__error" v-show="error">An error occurred. Please try again.</p>
      <br>
      <button class="button button--green"
        type="submit"
        :disabled="password.length < 3 || password !== confirmPassword">
        Reset Password
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "ResetPassword",
  data() {
    return {
      password: "",
      confirmPassword: "",
      done: false,
      error: false
    }
  },
  methods: {
    async resetPassword(e) {
      e.preventDefault()
      this.axios
        .post(`${process.env.VUE_APP_STRAPI}api/auth/reset-password`, {
          code: this.$route.query.code,
          password: this.password,
          passwordConfirmation: this.confirmPassword
        })
        .then(() => {
          this.done = true
          this.$router.push("login")
        })
        .catch((e) => {
          e
          this.error = true
        })
    }
  }
}
</script>

<style scoped>
</style>