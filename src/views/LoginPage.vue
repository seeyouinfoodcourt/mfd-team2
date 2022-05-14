<template>
  <div>
    <div class="">
      <div class="">
        <div class="">
          <form class="form__card" @submit="login">
            <!-- Email -->
            <div class="" :class="{ error: v$.form.email.$errors.length }">
              <label class="form__label">Email</label><br>
              <input class="form__input" type="email" v-model="v$.form.email.$model" />
              <div v-for="(error, index) of v$.form.email.$errors" :key="index">
                  <p class="form__error"> {{ error.$message }} </p>
              </div>
            </div><br>
            <!-- Password -->
            <div class="" :class="{ error: v$.form.password.$errors.length }">
              <label class="form__label">Password</label><br>
              <input class="form__input" type="password" v-model="v$.form.password.$model" />
              <div v-for="(error, index) of v$.form.password.$errors" :key="index">
                  <p class="form__error"> {{ error.$message }} </p>
              </div>
            </div>
            <p v-show="error" class="form__error">{{ errorMsg }}</p>
            <br>
            <button class="button button--green button--wide" type="submit" :disabled="v$.form.$invalid">Log in</button>
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
import useVuelidate from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'

export default {
  setup() {
    return { v$: useVuelidate() }
  },

  name: "LoginPage",

  data() {
    return {
      form: {
        email: '',
        password: '',
      },
      errorMsg: "Email or password was incorrect. Try again.",
      error: false
    }
  },

validations() {
  return {
    form: {
      email: {
        required, email
      },
      password: {
        required,
        min: minLength(7)
      },
    },
  }

},

  methods: {
    async login(e) {
      e.preventDefault();
      try {
        const res = await this.axios.post(
          `${process.env.VUE_APP_STRAPI}api/auth/local`,
          {
            identifier: this.form.email,
            password: this.form.password,
          }
        );

        const { jwt, user } = res.data;
        window.localStorage.setItem("jwt", jwt);
        window.localStorage.setItem("userData", JSON.stringify(user));
        this.$router.push("/");
        
      } catch (e) {
        this.error = true;
      }
    },
  },
};
</script>
    <style scoped>
</style>