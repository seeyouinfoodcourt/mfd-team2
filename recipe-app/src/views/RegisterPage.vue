<template>
  <div>
    <form class="form__card" @submit="register">
      <h2>Sign up for the app</h2>
      <!-- Username -->
      <div>
        <label class="form__label">Username</label>
        <input class="form__input" type="text" v-model="v$.form.username.$model" />
        <div v-for="(error, index) of v$.form.username.$errors" :key="index">
                  <p class="form__error"> {{ error.$message }} </p>
              </div>
      </div><br>
      <!-- Email -->
      <div>
        <label class="form__label">Email</label>
        <input class="form__input" type="email" v-model="v$.form.email.$model" />
        <div v-for="(error, index) of v$.form.email.$errors" :key="index">
                  <p class="form__error"> {{ error.$message }} </p>
              </div>
      </div><br>
       <!-- <div class="form_upload_image">
         <label class="form__label">Upload profile picture</label>
          <input type="file" @change="onFileSelected">
          <button @click="onUpload">Upload</button>
      </div><br> -->
      <!-- Password -->
       <div>
        <label class="form__label">Password</label>
        <input class="form__input" type="password" v-model="v$.form.password.$model" />
        <div v-for="(error, index) of v$.form.password.$errors" :key="index">
                  <p class="form__error"> {{ error.$message }} </p>
              </div>
      </div><br>
      <!-- Confirm Password -->
      <div>
        <label class="form__label">Confirm Password</label>
        <input class="form__input" type="password" v-model="v$.form.confirmPassword.$model" />
        <div v-for="(error, index) of v$.form.confirmPassword.$errors" :key="index">
                  <p class="form__error"> {{ error.$message }} </p>
              </div>
      </div>
      <!-- Form Error Message -->
      <p class="form__error" v-show="error">{{ errorMsg }}</p>
      <br>
      <button class="button button--green button--wide" type="submit" :disabled="v$.form.$invalid">
        Sign Up
      </button><br><br>
      <p class="form__link">Already have an account?
              <router-link to="/login">Log in</router-link>
            </p>
    </form>
  </div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, email, minLength, sameAs } from '@vuelidate/validators'

export default {
  name: "RegisterPage",

  setup () {
    return { v$: useVuelidate() }
  },

  data() {
    return {
      form: {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      },
      errorMsg: "An error occurred. Please try again later.",
      error: false
    }
  },

  validations() {
    return {
      form: {
        username: {
          required, min: minLength(7)
        },
        email: { required, email },
        password: { required, min: minLength(7) },
        confirmPassword: { required, sameAsPassword: sameAs(this.form.password)}
      }
    }
  },


  methods: {
    async register(e) {
      try {
        e.preventDefault();
        await this.axios.post(`${process.env.VUE_APP_STRAPI}api/auth/local/register`, {
          password: this.form.password,
          email: this.form.email,
          username: this.form.username
        })
        this.$router.push("/login")
      } catch (e) {
        this.error = true
      }
    }, /* onFileSelected(event){
      this.selectedFile = event.target.files[0]
    },
    onUpload(){

    } */
  }
}
</script>

<style scoped>
</style>