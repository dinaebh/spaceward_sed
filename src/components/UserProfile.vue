<template>
  <Sidebar/>

<div>
  <avatar :url="avatar_url" @onUpload="handleImageUpload"/>
</div>
</template>
<script>
import { mapStores } from "pinia";
import userStore from "../stores/user.js";
import Sidebar from "../components/Sidebar.vue"

export default{
  components:{
    Sidebar,
  },

    data(){
        return{
          email:"",
          first_name:"",
          last_name:"",


        }
    },
    computed: {
    ...mapStores(userStore),
  },
  methods:{
  updateProfile(){
    this.userStore.updateProfile(this.first_name, this.last_name,)
  }
  },
}
</script>

<style scoped>
*{
  color: antiquewhite;
}

</style>