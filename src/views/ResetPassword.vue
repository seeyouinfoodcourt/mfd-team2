<template>
  <div>
    <div>
      <router-link to="/login"> Login </router-link>
    </div>
    <h1>Reset Password</h1>
    <p v-show="error">An error occurred</p>
    <form @submit="resetPassword">
      <div>
        <h4>Password</h4>
        <input type="password" v-model="password" />
      </div>
      <div>
        <h4>Confirm Password</h4>
        <input type="password" v-model="confirmPassword" />
      </div>
      <button
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
        .post(`http://localhost:1337/api/auth/reset-password`, {
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