<template>
<p><h1> type here your new password,
a forms with pasword introduction is missing</h1> </p> 
</template>
<script>

</script>

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
      passwordReset(){
        this.userStore.passwordReset(this.email);
        console.log(this.email);
      }
    },
}
<style>
</style>