<template>
    <h1>To Do List</h1>
    <button type="button" @click.prevent="tasksStore.fetchTasks()">Fetch</button>
    <!-- <div v-for="task of tasksStore.fetchTasks()"> {{task}}</div> -->
</template>


<script>
  import { mapStores } from "pinia";
  import tasksStore from "../stores/task.js";

export default {
    computed: {
    ...mapStores(tasksStore),
  },

  methods: {
    fetchTasks() {
    const tasks = this.tasksStore.fetchTasks();
    for (let task of tasks) {
        console.log(task);
    }
}
  }
}
</script>


<style scoped>
* {
    background-color:aquamarine;
}

</style>