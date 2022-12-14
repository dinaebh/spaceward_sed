<template>
    Dashboard
    <button @click="login">Log In!</button>
    <SignInForm />
</template>

<script>
// import { mapStore } from 'pinia'
import SignInForm from '../components/SignUpForm.vue'
// import userStore from '../stores/user.js'

export default {
    components: {
        SignInForm,
    },
    computed: {
        // ...mapStore(userStore),
    },
    methods: {
        login() {
            this.userStore.signUp()
        }
    }
}
</script>