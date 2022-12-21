<template>

 
<div class="dash-body">
  <Sidebar class="sidebar" />
  <TaskColumn />
</div>
 

</template>

<script>
import SignOut from '../components/SignOut.vue';
import TaskColumn from '../components/TaskColumn.vue';
import { mapStores } from "pinia";
import tasksStore from "../stores/task.js";
import Sidebar from "../components/Sidebar.vue"

 

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
    },
}
</script>

<style scoped>
.dash-body{
  display: flex;
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

}
</style>