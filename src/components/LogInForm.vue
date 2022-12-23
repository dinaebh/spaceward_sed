<template>
  <body>
    <div id="form-desktop">
      <img
        class="form-space"
        src="../assets/img/login-image.png"
        alt="login-astronaut-image"
      />
      <div class="form-background">
        <div class="login-title">Log In <i class="or">or</i> Join Us!</div>
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
            <a @click="toSignUp()" class="sign-up-link" href="#">Sign Up</a>
          </div>
          <div class="recover-password-box">
            <RouterLink to="/recoverpassword" class="forgot-password-link">
              Forgot your password?
            </RouterLink>
          </div>
        </form>
        <br />
      </div>
    </div>
  </body>
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
    toSignUp(){
    this.$router.push('/signupscreen')
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
  margin-left: 20px;
  margin-right: auto;
  border-radius: 30px 30px 0px 0px;
  margin-top: 20px;
}

.form-background {
  background-color: #04294f;
  width: 90vw;
  border-radius: 0px 0px 30px 30px;
  margin-left: auto;
  margin-right: auto;
  border-bottom: 3px solid #ff3a00;
  box-shadow: 0px 5px 1px #00aee0;
  border-top: 5px solid #ffb400;
}

.form {
  position: relative;
  width: 15rem;
  height: 2.8rem;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
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
  color: #ffb400;
  outline: none;
  padding: 1.25rem;
  background: none;
  transition: 1s;
}

.form__input:hover {
  border-color: white;
}

/* Change border when input focus*/

.form__input:focus {
  border-color: #ffb400;
  color: white;
}

.form__label {
  position: absolute;
  left: 1rem;
  top: 0.6rem;
  padding: 0 0.5rem;
  color: white;
  cursor: text;
  transition: top 200ms ease-in, left 200ms ease-in, font-size 200ms ease-in;
  background-color: #04294f;
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

.recover-password-box {
  display: block;
  text-align: center;
}

.forgot-password-link {
  font-size: 12px;
  text-decoration: none;
  color: #00aee0;
  width: 100vw;
  text-align: center;
}

.check-box-remember-me {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
}

.txt-remember-me {
  color: #00aee0;
  font-size: 10px;
  margin-left: 2px;
  text-transform: uppercase;
  transition: 1s;
}

.txt-remember-me:hover {
  color: #ff3a00;
}

.check-box {
  width: 15px;
}

.login-button {
  border: 0 solid;
  box-shadow: inset 0 0 60px #ffb400;
  outline: 1px solid;
  outline-color: #04294f;
  outline-offset: 0px;
  text-shadow: none;
  padding: 5px 10px;
  transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
  color: white;
  font-weight: 500;
  background-color: #04294f;
}

.login-button:hover {
  border: 0px solid;
  box-shadow: inset 0 0 20px #00aee0, 0 0 20px rgba(255, 255, 255, 0.2);
  outline-color: #00aee0;
  outline-offset: 5px;
  text-shadow: 1px 1px 2px #00aee0;
}

.login-button-and-singup {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.sign-up-link {
  text-decoration: none;
  color: white;
  padding: 5px 10px;
}

.login-title {
    color: white;
    text-align: center;
    font-size: 25px;
    font-weight: 500;
    margin-top: 10px;
  }

  .or {
    color: #ffb400;
  }

@media (min-width: 765px) {
  #form-desktop {
    display: flex;
    margin-top: 50px;
  }

  .form-space {
    width: 30vw;
    border-radius: 30px 0px 0px 30px;
    border-bottom: 3px solid #ff3a00;
    box-shadow: 0px 5px 1px #00aee0;
    margin-top: 0px;
    margin-left: 0px;
  }

  .form-background {
    background-color: #04294f;
    width: 50vw;
    border-radius: 0px 30px 30px 0px;
    border-bottom: 3px solid #ff3a00;
    box-shadow: 0px 5px 1px #00aee0;
    border-left: 10px solid #ffb400;
    border-top: 0px solid #ffb400;
    margin-bottom: 0px;
    padding-top: 200px;
  }

  .login-title {
    color: white;
    text-align: center;
    font-size: 25px;
    font-weight: 500;
  }

  .or {
    color: #ffb400;
  }
}
</style>
