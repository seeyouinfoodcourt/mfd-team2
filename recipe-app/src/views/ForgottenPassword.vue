<template>
  <div>
    <div>
      <router-link to="/login"> Login </router-link>
    </div>
    <h1>Recover your password</h1>
    <p v-show="done">Password reset link has been sent to {{ email }}</p>
    <p v-show="error">An error occurred</p>
    <form @submit="forgotPassword">
      <div>
        <h1>Email</h1>
        <input type="email" v-model="email" />
      </div>
      <button type="submit">Send Email link</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "ForgotPassword",
  data() {
    return {
      email: "",
      done: false,
      error: false
    }
  },
  methods: {
    async forgotPassword(e) {
      e.preventDefault()
      this.done = false
      this.error = false
      this.axios
        .post(`http://localhost:1337/auth/forgot-password`, {
          email: this.email
        })
        .then(() => {
          this.done = true
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