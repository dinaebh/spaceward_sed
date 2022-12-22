<template>
 <div class="dash-body">
  <Sidebar class="sidebar" />
  <UserProfile/>
</div>
<div class="navbar">
<Navbar/>
</div>
</template>

<script>

import Sidebar from "../components/Sidebar.vue"
import UserProfile from "../components/UserProfile.vue"
import Navbar from "../components/Navbar.vue"
export default{
    components:{
    Sidebar,
    Navbar,
    UserProfile,
  },

    data(){
        return{

        }
    }
}
</script>

<style scoped>
.navbar{
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: -10px;
  left: 0px;
}
.sidebar{
  display:none;
}



@media (min-width: 765px) { 

.sidebar{
  display: flex;
}

.dash-body{
  display: flex;
  flex-direction: row;
  gap: 50px;

  
}
.navbar{
  display: none;
}

}
</style>