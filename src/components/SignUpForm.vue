<template>
  <header>
  <div class="nav-header">
  <img src="../assets/img/logo-rojo.png" alt="spaceward-logo" class="spaceward-logo">
 <img src="../assets/img/top-stain.png" alt="top-stain" class="header-background">
</div></header>
  <body>
    <div class="background-form">
      <h2 id="#txt" class="signup">Sign Up</h2>

      <form class="container" @submit.prevent="signUpCall()">
        <div class="form">
          <input
            type="text"
            id="name"
            class="form__input"
            placeholder=" "
            v-model="name"
          />
          <label for="exampleInputEmail1" class="form__label">Name</label>
        </div>
        <div class="form">
          <input
            type="text"
            id="lastname"
            class="form__input"
            placeholder=" "
            v-model="lastname"
          />
          <label for="email" class="form__label">Lastname</label>
        </div>
        <div class="form">
          <input
            type="text"
            id="username"
            class="form__input"
            placeholder=" "
            v-model="username"
          />
          <label for="email" class="form__label">User name</label>
        </div>
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
          <label class="txt-remember-me">Accept Conditions</label>
        </div>
        <br />
        <div class="signup-button-and-password">
          <button type="submit" class="signup-button">Sign Up</button>
          <RouterLink to="/landingpage" class="forgot-password-link">
            Already registered?
          </RouterLink>
        </div>
      </form>
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
      name: "",
      lastname: "",
      username: "",
    };
  },

  computed: {
    ...mapStores(userStore),
  },

  methods: {
    signUpCall() {
      this.userStore.signUp(
        this.name,
        this.lastname,
        this.username,
        this.email,
        this.password
      );
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

.spaceward-logo{
  width:30px;
  padding: 5px;
  margin-left: 30px;
}
.nav-header{
  display: flex;
  margin-top:3px;
  flex-direction: column;
  align-items:flex-start;

}
.header-background{
display:none;
}

body {
  font-family: "Poppins", sans-serif;
  height: 1vh;
  display: grid;
  justify-content: center;
  align-items: center;

  background: none;
}

.background-form {
  
  position: relative;
  background-color: #04294f;
  padding: 50px;
  display: flex;
  flex-direction: column;
  border-radius: 30px;
  border-bottom:3px solid #ff3a00;
  box-shadow:0px 5px 1px #ffb400;
  gap: 20px;
  
}
h2 {
  color: white;
  line-height: 80%;
  font-size: 65px;
  border-bottom: 1px solid white;
  width: fit-content;
  font-family: "Poppins", sans-serif;
  letter-spacing: 0.11cm;
  padding-bottom: 10px;
}
#txt .signup {
  font-size: 50px;
  font-weight: bolder;
  margin-right: 0px;
}


.form {
  position: relative;
  width: 18rem;
  height: 2.8rem;
  margin-bottom: 10px;
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
  color: white;
  outline: none;
  padding: 1.25rem;
  background: none;
  transition: 1s;
}

.form__input:hover {
  border-color: #00aee0;
}

/* Change border when input focus*/

.form__input:focus {
  border-color: #ffb400;
  color: orange;
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
  color: #ffb400;
}

.forgot-password-link {
  font-size: 12px;
  text-decoration: none;
  color: white;
  margin-top: 5px;
  margin-right: 5px;;
}
.forgot-password-link:hover {
  font-size: 12px;
  text-decoration: none;
  color:#ffb400;
  
}
.check-box-remember-me {
  display: flex;
  align-items: center;
  justify-content: end;
  padding-right: 10px;
}

.txt-remember-me {
  color: white;
  font-size: 10px;
  margin-left: 6px;
  margin-right: 4px;
  text-transform: uppercase;
  transition: 1s;
}

.txt-remember-me:hover {
  color: #ffb400;
}

.check-box {
  width: 15px;
}

.cool-form {
  padding: 20px;
}

.signup-button {
  color:#fff;
  border: 1px solid #00aee0;
  outline: 1px solid #00aee0;
  text-shadow: none;
  background-color: #04294f;
  transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
  padding: 7px;
  margin-left: 2px;

}

.signup-button:hover {
  border: 1px solid #ffb400;
  outline: 1px solid #ffb400;
 
}

.signup-button-and-password {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
  align-content: center;
}

/* DESKTOP STARTS HERE*/

@media (min-width: 765px) {

  .nav-header{
  display:inline;
  flex-direction:row;
  justify-content: space-between;
  
}
  #txt .signup {
    color: white;
    box-sizing: border-box;
    width: auto;
  }
  .background-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    background-color: #04294f;
    padding: 50px;
    width: 400px;
    margin-top: 40%;
    padding-top: 100px;
  }

  .header-background {
  background-color: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 0px;
  width: 400px;
}
}
.header-background{
  position:absolute;
  top:0;
  right:0px;
}
.spaceward-logo{
  width:100px;

}
</style>
