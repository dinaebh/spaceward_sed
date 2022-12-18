<template>
  <div>
    <PasswordReset />
    <RouterLink to="/loginscreen" class="text-decoration-none">
      Return to log in</RouterLink>
  </div>
  <Footer />
</template>

<script>
import PasswordReset from "../components/PasswordReset.vue";
import LogInForm from "../components/LogInForm.vue";
import Footer from "../components/Footer.vue";
export default {
  components: {
    PasswordReset,
    LogInForm,
    Footer,
  },
};
</script>

<style></style>
