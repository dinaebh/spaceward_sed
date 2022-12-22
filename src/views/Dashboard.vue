<template>

 <body>
  
 
<div class="dash-body">
  <Sidebar class="sidebar" />
  <TaskColumn />
</div>
<div class="navbar">
<Navbar/>
</div>
</body>
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
body {
  background-color: #f6f7f1;
}

.navbar{
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: -10px;
  left: 0px;
}
.dash-body{
  display: block;
  flex-direction: row;
  gap: 50px;
  
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