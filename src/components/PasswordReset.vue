<template>
    <form @submit.prevent="passwordReset">
<div class="row g-3 align-items-center">
  <div class="col-auto">
    <label for="inputPassword6" class="col-form-label">Write your email too get pasword</label>
  </div>
  <div class="col-auto">
    <input v-model="email" type="email" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline">
  </div>
  <div class="col-auto">
    <span id="passwordHelpInline" class="form-text">
      
    </span>
    <button type="submit"> Send </button>
  </div>
</div>
</form>
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
      passwordReset(){
        this.userStore.passwordReset(this.email);
        console.log(this.email);
      }
    },
}
</script>

<style>
</style>