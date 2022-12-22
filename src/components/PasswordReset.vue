// user type and email in order to change password link
<template>
 <header>
  <div class="nav-header">
  <img src="../assets/img/logo-rojo.png" alt="spaceward-logo" class="spaceward-logo">
 <img src="../assets/img/top-stain.png" alt="top-stain" class="header-background">
</div></header>
  <body>
    <div class="background-form">
      <h2 id="#txt" class="signup">Can't Log In?</h2>
<p id="forgot-password-link" class="recover-text"> <h4 class="recover-text"> We'll send a recovery link to:</h4></p>
      <form class="container" @submit.prevent="passwordReset()">
       
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
       
         
        
        
        <div class="signup-button-and-password">
        
          <button type="submit" class="signup-button form-text">Send recovery link</button>
          <RouterLink to="/landingpage" class="forgot-password-link">
            Return to Log in
          </RouterLink>
        </div>
      </form>
    </div>

  
  </body>

  <!-- <h1>Can't log in?</h1>
  <form @submit.prevent="passwordReset">
    <div class="row g-3 align-items-center">
      <div class="col-auto">
        <label for="inputPassword6" class="col-form-label"
          >We'll send a recovery link to:</label
        >
      </div>
      <div class="col-auto">
        <input
          v-model="email"
          type="email"
          id="inputPassword6"
          class="form-control"
          aria-describedby="passwordHelpInline"
          placeholder="Enter your email"
        />
      </div>
      <div class="col-auto">
        <span id="passwordHelpInline" class="form-text"> </span>
        <button type="submit">Send recovery link</button>
      </div>
      <div></div>
    </div>
  </form>-->
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
    passwordReset() {
      this.userStore.passwordReset(this.email);
      console.log(this.email);
    },
  },
};
</script>

<style scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
 
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
/* color:white; */
  background: none;
}
.recover-text {
  color:white !important;
  font-size: 15px !important;
}
.background-form {
  
  position: relative;
  background-color: #04294f;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 30px;
  border-bottom:3px solid #ff3a00;
  box-shadow:0px 5px 1px #ffb400;
  gap: 20px;
  margin-top: 50px !important;
  
  
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
.recover-text{
  color:white !important;
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



.check-box {
  width: 15px;
}

.cool-form {
  padding: 20px;
}

.signup-button {
  color:#fff;
  border: 2px solid #00aee0;
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
h4 {
  color:white;
}
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
