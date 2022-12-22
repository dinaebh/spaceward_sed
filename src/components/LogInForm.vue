<template>
  <body>
 
    <img class="form-space" src="../assets/img/login-image.png" alt="login-astronaut-image" />
    <div class="form-background">
    <form @submit.prevent="logInCall()">
        <div class="form">
          <input
            type="email"
            id="email"
            class="form__input"
            placeholder=" "
            v-model="email"
          />
          <label for="email" class="form__label">Email</label>
        </div>
        <div class="form">
          <input
            type="password"
            id="password"
            class="form__input"
            placeholder=" "
            v-model="password"
          />
          <label for="email" class="form__label">Password</label>
        </div>
        <div class="check-box-remember-me">
          <input type="checkbox" class="check-box" />
          <label class="txt-remember-me">Remember Me</label>
        </div>
        <br />
        <div class="login-button-and-singup">
          <button type="submit" class="login-button">Log In</button>
          <a class="sign-up-link" href="/signupscreen">Sign Up</a>
          <RouterLink to="/recoverpassword" class="forgot-password-link">
            Forgot your password?
          </RouterLink>
        </div>
      </form>
    </div>
 
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
    <button type="submit" class="btn btn-primary">Log In</button>

    <div class="forgotpassword"><RouterLink to="/recoverpassword" class="text-decoration-none" >
    Forgot your password?</RouterLink>
    </div>
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
  font-family: "Poppins", sans-serif;
  height: 1vh;
  display: grid;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
}


.form-space {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  border-radius: 15px 15px 0px 0px;
  margin-top: 20px;
}

.form-background {
  background-color: #00aee0;
  width: 90vw;
  border-radius: 0px 0px 15px 15px;
  margin-left: auto;
  margin-right: auto;
  border-bottom: 3px solid #ff3a00;
  box-shadow: 0px 5px 1px #ffb400;
}


.form {
  position: relative;
  width: 15rem;
  height: 2.8rem;
  margin: 10px;
}

.form__input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 2px solid #00aee0;
  border-radius: 0.5rem;
  font-family: inherit;
  font-size: 13px;
  color: #ff3a00;
  outline: none;
  padding: 1.25rem;
  background: none;
  transition: 1s;
}

.form__input:hover {
  border-color: #ffb400;
}

/* Change border when input focus*/

.form__input:focus {
  border-color: #ffb400;
  color: rgba(0, 225, 255, 0.342);
}

.form__label {
  position: absolute;
  left: 1rem;
  top: 0.6rem;
  padding: 0 0.5rem;
  color: #ffb400;
  cursor: text;
  transition: top 200ms ease-in, left 200ms ease-in, font-size 200ms ease-in;
  background-color: #ffffff;
  border-radius: 50px;
}

.form__input:focus ~ .form__label,
.form__input:not(:placeholder-shown):not(:focus) ~ .form__label {
  top: -0.5rem;
  font-size: 0.8rem;
  left: 0.8rem;
  color: #ff3a00;
}

.we-never-share-txt {
  color: white;
  font-size: 10px;
  margin-bottom: 10px;
  margin-left: 5px;
}

.forgot-password-link {
  font-size: 12px;
  text-decoration: none;
  color: #ffb400;
}

.check-box-remember-me {
  display: flex;
  align-items: center;
  justify-content: end;
  padding-right: 10px;
}

.txt-remember-me {
  color: black;
  font-size: 10px;
  margin-left: 2px;
  text-transform: uppercase;
  transition: 1s;
}

.txt-remember-me:hover {
  color: rgb(201, 4, 142);
}

.check-box {
  width: 15px;
}

.login-button {
  border: 0 solid;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
  outline: 1px solid;
  outline-color: rgba(255, 255, 255, 0.5);
  outline-offset: 0px;
  text-shadow: none;
  transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
}

.login-button:hover {
  border: 1px solid;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5),
    0 0 20px rgba(255, 255, 255, 0.2);
  outline-color: rgba(255, 255, 255, 0);
  outline-offset: 15px;
  text-shadow: 1px 1px 2px #427388;
}


</style>
