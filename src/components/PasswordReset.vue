<template>

</template>
<script>

import { mapStores } from "pinia";
  import userStore from "../stores/user.js";

  export default {
    data() {
      return {
        password: "",
        email: "",
      };
      
    },
    computed: {
      ...mapStores(userStore),
    },

    methods: {
      logInCall() {
        this.userStore.logIn(this.email, this.password);
      },
    },
}
</script>

<style>
</style>