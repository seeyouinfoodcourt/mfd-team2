<template>
  <div>
    <h1>Sign up for the app</h1>
    <p v-show="error">{{ errorMsg }}</p>
    <form @submit="register">
      <div>
        <h4>Name</h4>
        <input type="text" v-model="name" />
      </div>
      <div>
        <h4>Email</h4>
        <input type="email" v-model="email" />
      </div>
      <div>
        <h4>Password</h4>
        <input type="password" v-model="password" />
      </div>
      <div>
        <h4>Username</h4>
        <input type="text" v-model="username" />
      </div>
      <br>
      <button type="submit" :disabled="name.length < 6 || password.length < 6 || username.length < 3">
        Sign Up
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "RegisterPage",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      username: "",
      error: false,
      errorMsg: `An error occurred.`
    }
  },
  methods: {
    async register(e) {
      try {
        e.preventDefault();
        await this.axios.post("http://localhost:1337/api/auth/local/register", {
          name: this.name,
          password: this.password,
          email: this.email,
          username: this.username
        })
        this.$router.push("/login")
      } catch (e) {
        this.error = true
      }
    }
  }
}
</script>

<style scoped>
</style>