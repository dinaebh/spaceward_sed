<template>

<header><span class="wave-background">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#fff" fill-opacity="1" d="M0,160L48,181.3C96,203,192,245,288,261.3C384,277,480,267,576,224C672,181,768,107,864,96C960,85,1056,139,1152,154.7C1248,171,1344,149,1392,138.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
</svg> </span></header>
 
<div class="dash-body">
  <Sidebar class="sidebar" />
  <TaskColumn />
</div>
<div class="navbar">
<Navbar/>
</div>
</template>

<script>
import SignOut from '../components/SignOut.vue';
import TaskColumn from '../components/TaskColumn.vue';
import { mapStores } from "pinia";
import tasksStore from "../stores/task.js";
import Sidebar from "../components/Sidebar.vue"
import Navbar from "../components/Navbar.vue"

 

export default {

  data(){
    return{
    
    }
  },
    computed: {
    ...mapStores(tasksStore),
  },
 
 
    components: {
        SignOut,
        TaskColumn,
        Sidebar,
        Navbar,
    },
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
.dash-body{
  display: flex;
  flex-direction: row;
  gap: 50px;
  
}
.sidebar{
  display:none;
}
.wave-background{
  margin-bottom: o;
}
.wave-background svg{
  margin-bottom: o;
}
@media (min-width: 765px) { 

.sidebar{
  display: flex;
}

}
</style>