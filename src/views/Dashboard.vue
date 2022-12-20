<template>
<SignOut />
<div class="dash-body">
  <Sidebar/>
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

<style>

</style>