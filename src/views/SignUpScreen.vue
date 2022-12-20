<template>
<SignOutForm />

<div id="right">
  <div id="alreadyregistered">
  <p>Already registered?</p>
    <RouterLink to="/loginscreen"> <button type="button" class="btn btn-outline-primary">Log In</button></RouterLink>
  </div></div>
  
  <!-- <button @click="$router.push()"></button> -->
  <Footer />
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
<style scoped>
p{
  color:antiquewhite;
}
#right{
  display:block;

}
#alreadyregistered{
  display:flex;
  flex-direction: row;
  align-self: flex-end;
  
}
</style>