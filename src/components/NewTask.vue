<template>
  <div class="new-task-form"><input type="text" placeholder="Enter task title" v-model="task.taskTitle" />
  <textarea
    type="text"
    placeholder="Enter task description"
    v-model="task.taskDescription"
  ></textarea>
  <br><button type="button" @click.prevent="createNewTask()">Create task</button>
 </div>
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
.new-task-form {
  padding: 10px;
  border-radius: 20px;
  background-color: #ec927f;
}
</style>
