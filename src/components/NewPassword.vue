// NEW PASSWORD FORM
<template>
<p><h1> Reset your Password</h1> </p> 
<form class="containter" @submit.prevent="logInCallWithNewPassword(this.email, this.passwordUpdated)">
<div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        v-model="email"
        placeholder=""
      />
      <div id="emailHelp" class="form-text">
        Remember, we'll never share your email with anyone else.
      </div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Choose your new Password*</label>
      <input
        type="password"
        class="form-control"
        id="exampleInputPassword1"
        v-model="password"
      />
    </div>
  <div class="col-auto">
    <span id="passwordHelpInline" class="form-text">
      
    </span>
    <button type="submit"> Change Password and Log In </button>
  </div>

</form>
</template>
<script>
import { mapStores } from "pinia";
  import userStore from "../stores/user.js";

  export default {
    data() {
      return {
        passwordUpdated: "",
        email: "",
      };

    },
    computed: {
      ...mapStores(userStore),
    },

    methods: {
        logInCallWithNewPassword() {
      this.userStore.logInWithNewPassword(this.email, this.passwordUpdated);
    },

    },
}
</script>


<style>
</style>