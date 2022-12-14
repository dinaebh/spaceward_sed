<template>
  <input type="text" placeholder="Enter task title" v-model="task.taskTitle" />
  <input
    type="text"
    placeholder="Enter task description"
    v-model="task.taskDescription"
  />
  <button type="button" @click.prevent="createNewTask()">Create task</button>
</template>

<script>
import { mapStores } from "pinia";
import tasksStore from "../stores/task.js";
import userStore from "../stores/user.js";

export default {
  data() {
    return {
      task: {
        taskTitle: "",
        taskDescription: "",
      },
    };
  },
  computed: {
    ...mapStores(tasksStore, userStore),
  },

  methods: {
    createNewTask() {
      this.tasksStore.createNewTask(this.task.taskTitle, this.task.taskDescription, this.userStore.user.id);
    },
  },
};
</script>

<style scoped>

</style>
