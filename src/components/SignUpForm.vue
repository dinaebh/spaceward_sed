<template>
  <body>
    <div class="background-form"> 
  <h2 id="#txt" class="signup">Sign Up</h2>
 
    <form class="container" @submit.prevent="signUpCall()">
      <div class="form">
    <input type="text" id="name" class="form__input" placeholder=" " v-model="name">
    <label for="exampleInputEmail1" class="form__label">Name</label>
  </div> 
  <div class="form">
    <input type="text" id="lastname" class="form__input" placeholder=" " v-model="lastname">
    <label for="exampleInputEmail1" class="form__label">Lastname</label>
  </div> 
  <div class="form">
    <input type="text" id="username" class="form__input" placeholder=" " v-model="username">
    <label for="exampleInputEmail1" class="form__label">User name</label>
  </div> 
      <div class="form">
    <input type="email" id="email" class="form__input" placeholder=" " v-model="email">
    <label for="email" class="form__label">Email</label>
  </div>
  <div class="form">
    <input type="password" id="password" class="form__input" placeholder=" " v-model="password">
    <label for="email" class="form__label">Password</label>
  </div> 
  <div class="check-box-remember-me"><input type="checkbox" class="check-box" />
  <label class="txt-remember-me">Remember Me</label></div>
  <br>
  <div class="signup-button-and-password">
    <button type="submit" class="signup-button">Sign Up</button>
  <RouterLink to="/landingpage" class="forgot-password-link">
  Already registered?
  </RouterLink>
</div>
    </form>
  </div>

  
  <!-- <form class="container" @submit.prevent="signUpCall()">
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Name</label>
      <input
        type="text"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        v-model="name"
      />
      <label for="exampleInputEmail1" class="form-label">Lastname</label>
      <input
        type="text"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        v-model="lastname"
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
  </form> -->
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
      name:"",
      lastname:"",
      username:"",
    };
  },

  computed: {
    ...mapStores(userStore),
  },

  methods: {
    signUpCall() {
      this.userStore.signUp(this.name, this.lastname, this.email, this.password);
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
  font-family: 'Poppins', sans-serif;
  height: 1vh;
  display: grid;
  justify-content: center;
  align-items: center;
  
  background: none;
}
.background-form{
  position: relative;
  background-color: #190c3d;
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap:20px
}
#txt .signup {
  color: white;
  width: fit-content;
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
    border: 2px solid #e1e5ee;
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
      border-color: rgb(120, 216, 211);
    }

    /* Change border when input focus*/

    .form__input:focus {
      border-color: #00cccc;
      color: rgba(0, 225, 255, 0.342);
    }

    .form__label {
    position: absolute;
    left: 1rem;
    top: 0.6rem;
    padding: 0 0.5rem;
    color: white;
    cursor: text;
    transition: top 200ms ease-in, left 200ms ease-in, font-size 200ms ease-in;
    background-color: #190c3d;
    border-radius: 50px;
  }


.form__input:focus ~ .form__label,
.form__input:not(:placeholder-shown):not(:focus) ~ .form__label {
  top: -0.5rem;
  font-size: 0.8rem;
  left: 0.8rem;
  color: rgb(201, 4, 142);
}



.forgot-password-link {
  font-size: 12px;
  text-decoration: none;
  color: white;
  margin-left: 20px;
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

.cool-form {
  padding: 20px;
}

.singup-button {
  border: 0 solid;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
  outline: 1px solid;
  outline-color: rgba(255, 255, 255, .5);
  outline-offset: 0px;
  text-shadow: none;
  transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
} 

.singup-button:hover {
  border: 1px solid;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, .5), 0 0 20px rgba(255, 255, 255, .2);
  outline-color: rgba(255, 255, 255, 0);
  outline-offset: 15px;
  text-shadow: 1px 1px 2px #427388; 
}

.singup-button-and-signup {
display: flex;
flex-direction: column;
align-items: flex-start;
margin-bottom: 20px;
gap:20px;


}
.singup-button-and-signup password{
  margin-bottom: 10px;
} 

/* DESKTOP STARTS HERE*/

@media (min-width: 765px){
#txt .signup{
  color: white;
  box-sizing: border-box;
  width: auto;
}
.background-form{
  position: relative;
  background-color: #190c3d;
  padding: 50px;
  width: 400px;
  align-self:baseline;
  padding-top: 100px;
 
}
}
</style>
