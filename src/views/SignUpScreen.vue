<template>
<SignOutForm />

<div id="right">
  <div id="alreadyregistered">
  <p>Already registered?</p>
    <RouterLink to="/loginscreen"> <button type="button" class="btn btn-outline-primary">Log In</button></RouterLink>
  </div></div>
  
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