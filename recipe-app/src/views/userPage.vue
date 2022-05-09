<template>
  <div>
    <h1>Public Profile Page</h1>
    <p>User id: {{ user.id }}</p>
    <p>Username: {{ user.username }} </p>
  </div>
</template>

<script>

export default {
name: 'userPage',
props: ['id'],
  data() {
    return {
       user: '',
    }
  },
 created() {
    fetch(
      `${process.env.VUE_APP_STRAPI}api/users/${this.id}`
    )
      .then((response) => response.json())
      .then((data) => (this.user = data));
  },

  methods: {

  }
}
</script>

<style>
</style>