<template>
<SignOutForm />


  <div>
  <p>Already registered?</p>
    <RouterLink to="/loginscreen"> <button type="button" class="btn btn-outline-primary">Log In</button></RouterLink>
  </div>
  
  <!-- <button @click="$router.push()"></button> -->
  <Footer/>
</template>


<script>
import SignOutForm from '../components/SignUpForm.vue'
import Footer from "../components/Footer.vue";

export default {
    components: {
        SignOutForm,
        Footer,
    }    
}
</script>