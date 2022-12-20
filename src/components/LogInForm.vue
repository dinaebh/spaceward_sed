<template>
  <body>
    <form @submit.prevent="logInCall()">
  <div class="form">
    <input type="email" id="email" class="form__input" placeholder=" " v-model="email">
    <label for="email" class="form__label">Email</label>
  </div>
  <div class="we-never-share-txt">
        We'll never share your email with anyone else.
      </div>
  <div class="form">
    <input type="password" id="password" class="form__input" placeholder=" " v-model="password">
    <label for="email" class="form__label">Password</label>
  </div>
  <input type="checkbox" class="form-check-input" id="exampleCheck1" />
  <label class="form-check-label" for="exampleCheck1">Check me out</label>
  <br>
  <button type="submit" class="btn btn-primary">Log In</button>
</form>
  <RouterLink to="/recoverpassword" class="text-decoration-none">
    Forgot your password?
  </RouterLink>
  
  
</body>

  <!-- <form class="container" @submit.prevent="logInCall()">
    <div class="mb-3">
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        v-model="email"
      />
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      
      
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
    <button type="submit" class="btn btn-primary">SignIn</button>
  </form>
  <RouterLink to="/recoverpassword" class="text-decoration-none">
    Forgot your password?</RouterLink
  > -->
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
};
</script>

<style scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Convergence", sans-serif;
  height: 1vh;
  display: grid;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  background: none;
}

.form {
  position: relative;
  width: 20rem;
  height: 3rem;
}
  .form__input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid #e1e5ee;
    border-radius: 0.5rem;
    font-family: inherit;
    font-size: inherit;
    color: white;
    outline: none;
    padding: 1.25rem;
    background: none;
  }

  form:hover {
      border-color: #adffff;
    }

    /* Change border when input focus*/

    form:focus {
      border-color: #18ffff;
    }

    .form__label {
    position: absolute;
    left: 1rem;
    top: 0.6rem;
    padding: 0 0.5rem;
    color: white;
    cursor: text;
    transition: top 200ms ease-in, left 200ms ease-in, font-size 200ms ease-in;
    background-color: #190c3e;
  }


.form__input:focus ~ .form__label,
.form__input:not(:placeholder-shown):not(:focus) ~ .form__label {
  top: -0.5rem;
  font-size: 0.8rem;
  left: 0.8rem;
  color: teal;
}

.we-never-share-txt {
  color: white;
  font-size: 10px;
  margin-bottom: 10px;
  margin-left: 5px;
}

</style>