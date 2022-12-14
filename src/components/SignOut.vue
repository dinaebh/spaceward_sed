<template>
    <button type="button" @click.prevent="logOut()">Log Out</button>

</template>

<script>
import { mapStores } from "pinia";
import userStore from "../stores/user.js";

export default {
    computed: {
    ...mapStores(userStore),
  },

  methods: {
    logOut() {
      this.userStore.signOut();
    },
  },
}

</script>