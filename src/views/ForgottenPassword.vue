<template>
  <div>
    <form class="form__card" @submit="forgotPassword">
      <div>
        <label class="form__label">Email</label>
        <input class="form__input" type="email" v-model="email" />
      </div><br>
      <p class="form__error" v-show="error">An error occurred</p>
      <button class="button button--green" type="submit">Reset Password</button><br>
      <p v-show="done">Password reset link has been sent to {{ email }}</p>
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