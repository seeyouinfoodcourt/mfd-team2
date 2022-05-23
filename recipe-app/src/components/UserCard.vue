<template>
    <router-link class="link" :to="{ name: 'userPage', params: {id: 1} }">
        <div class="user-card">
            <img class="user-card__img" :src="profileImgUrl" :alt="profileImgAlt">
            <p class="user-card__name">{{ user.username }}</p>
        </div>
    </router-link>

</template>

<script>
export default {
    props: [ 'user' ],
    data() {
        return {
            profileImgUrl: '',
            profileImgAlt: '',
            users: ''
        }
    },
    mounted () {
        try {
            this.profileImgUrl = require("../../public/img/profile/person" +
            this.user.id +
            ".jpg");
            } catch (ex) {
                this.profileImgUrl = "/mfd-team2/img/profile/profile-placeholder.png";
            }
    }

}
</script>

<style>

</style>