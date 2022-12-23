<template>
  <img class="dashboard-stain" src="../assets/img/top-stain.png" alt="galaxy-stain">
<div class="dash-body">
  <Sidebar class="sidebar" />
  <TaskColumn class="task-column"/>
</div>
<div class="navbar">
<Navbar/>
</div>

</template>

<script>
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
.sidebar{
  display:none;
}

.dashboard-stain {
  display: none;
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

.task-column {
  display: flex;
  justify-content: center;
  margin: auto;
}

.dashboard-stain {
  display: inline;
  width: 40%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: -7;
}

}
</style>