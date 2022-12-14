<template>
    <h1>To Do List</h1>
    <button type="button" @click.prevent="showTasks()">Update Tasks</button>
    <!-- <div v-for="task of tasksStore"> {{task}}</div> -->
</template>


<script>
  import { mapStores } from "pinia";
  import tasksStore from "../stores/task.js";

export default {
    computed: {
    ...mapStores(tasksStore),
  },

  methods: {
    async showTasks() {
    const fetchTasks = await this.tasksStore.fetchTasks();
    console.log(fetchTasks);
}
  }
}
</script>


<style scoped>
* {
    background-color:aquamarine;
}

</style>