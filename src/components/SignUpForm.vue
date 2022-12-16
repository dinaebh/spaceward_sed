<template>
  <form class="container" @submit.prevent="signUpCall()">
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Name or Nickname</label>
      <input
        type="text"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        v-model="name"
      />
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        v-model="email"
      />
      <div id="emailHelp" class="form-text">
        We'll never share your email with anyone else.
      </div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input
        type="password"
        class="form-control"
        id="exampleInputPassword1"
        v-model="password"
      />
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1" />
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary">Sign Up</button>
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
      name:"",
    };
  },

  computed: {
    ...mapStores(userStore),
  },

  methods: {
    signUpCall() {
      this.userStore.signUp(this.name, this.email, this.password);
    },
  },
};
</script>

<style scoped>
*{
  background-color: #10052B;

}

label{
  color: antiquewhite;
}
</style>
