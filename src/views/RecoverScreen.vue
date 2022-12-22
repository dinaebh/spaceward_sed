<template>
  
  <div>
    <PasswordReset />
    
  </div>
  <div class="fixed-footer"><AppFooter /></div>
</template>

<script>
import PasswordReset from "../components/PasswordReset.vue";
import LogInForm from "../components/LogInForm.vue";
import AppFooter from "../components/AppFooter.vue";
export default {
  components: {
    PasswordReset,
    LogInForm,
    AppFooter,
  },
};
</script>

<style>

#right{
  display:block;

}

  

.fixed-footer{
  position: fixed;
  bottom:0; 
  width:100%;
}
  
</style>
