<template>
  <div>
    <PasswordReset />
    <RouterLink to="/loginscreen" class="text-decoration-none">
      Return to log in</RouterLink>
  </div>
  <AppFooter />
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

<style></style>
