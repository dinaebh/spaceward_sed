<template>
<!-- <Sidebar/>
<div :style="{'margin-left' : sidebarWidth}"></div> -->
<SignOut />
<TaskColumn />
</template>

<script>
import SignOut from '../components/SignOut.vue';
import TaskColumn from '../components/TaskColumn.vue';
import NewTask from '../components/NewTask.vue';
import { mapStores } from "pinia";
import tasksStore from "../stores/task.js";
import Sidebar from "../components/Sidebar.vue"

 

export default {

  data(){
    return{
      collapsed: false,
      SIDEBAR_WIDTH: 180,
      SIDEBAR_WIDTH_COLLAPSED: 58,
    }
  },
    computed: {
    ...mapStores(tasksStore),
  },
  sidebarWidth(){
    return `${this.collapsed? this.SIDEBAR_WIDTH_COLLAPSED : this.SIDEBAR_WIDTH}px`
  },
 
    components: {
        SignOut,
        TaskColumn,
        NewTask,
        Sidebar,
    },
}
</script>

<style>
</style>