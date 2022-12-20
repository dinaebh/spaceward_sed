<template>
    <button type="button" @click.prevent="logOut()" class="effectLogout" >Log Out</button>

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
<style scoped>
button{
  color:#e96879;
  border-style: double;
  background-color: transparent;
  box-shadow: 0px 0px 20px #e96879;
  border-color: #e96879;
  border-radius: 1px;
  padding:7px;
  margin-top: 10px;
  

  

}
.effectLogout:hover{
  background-color: #e96879;
  color:#12062F;
  backdrop-filter: blur(8px);
  box-shadow: -1px -1px 5px #e96879;
  
}
</style>