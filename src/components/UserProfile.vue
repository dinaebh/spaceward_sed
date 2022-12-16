<template>Hola

{{userStore.user.email}}
</template>
<script>
import { mapStores } from "pinia";
import userStore from "../stores/user.js";

export default{

    data(){
        return{

        }
    },
    computed: {
    ...mapStores(userStore),
  },
}
</script>