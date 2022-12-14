<template>

  <RouterView />

  <NavbarPhone />
  
</template>

<script>
import NavbarPhone from "./components/NavbarPhone.vue"
export default {
  components:{
    NavbarPhone,
  },
data(){
  return{

  }
}
}

</script>