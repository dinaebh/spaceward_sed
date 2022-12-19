<template>
  <div class="new-task-form"><input type="text" placeholder="Enter task title" class="inputlabel" v-model="task.taskTitle" />
  <textarea
    type="text"
    placeholder="Enter task description" class="inputlabel"
    v-model="task.taskDescription"
  ></textarea>
  <br><button type="button" @click.prevent="createNewTask()" class="createtask">Create task</button>
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
      this.task.taskTitle ="";
      this.task.taskDescription ="";
    },
  },
};
</script>

<style scoped>
.new-task-form {
  padding: 10px;
  border-radius: 20px;
  background-color: #C5BBD9;
  
}
.inputlabel{
  border-radius: 10px;
  padding: auto;
  font-size: 1em;
  margin-bottom: 5px;
}
.createtask{ 
  padding: 10px;
  border-radius: 20px;
  background-color: white;
  color:12062F;
}
</style>
