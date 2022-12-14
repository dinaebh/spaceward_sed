<template>
    <h1>To Do List</h1>
    
    <div v-for="task of tasksStore.tasks"> {{task.title}}</div>
</template>


<script>
  import { mapStores } from "pinia";
  import tasksStore from "../stores/task.js";

export default {
    computed: {
    ...mapStores(tasksStore),
  },

  methods: {
    showTasks() {
    this.tasksStore.fetchTasks();
   
}
  }
}
</script>


<style scoped>
* {
    background-color:aquamarine;
}

</style>