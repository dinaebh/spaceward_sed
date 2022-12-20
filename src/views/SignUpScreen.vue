<template>
<SignOutForm />


  <div>
  <p>Already registered?</p>
    <RouterLink to="/loginscreen"> <button type="button" class="btn btn-outline-primary">Log In</button></RouterLink>
  </div>
  
  <!-- <button @click="$router.push()"></button> -->
  <AppFooter />
</template>


<script>
import SignOutForm from '../components/SignUpForm.vue'
import AppFooter from "../components/AppFooter.vue";

export default {
    components: {
        SignOutForm,
        AppFooter,
    }    
}
</script>