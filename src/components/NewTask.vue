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
*{
  font-family: Manrope;
}
.new-task-form {
  padding: 10px;
  margin-top: 0px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: #ffffff;
  border-top: 1px solid #ff3a00;
  padding-top:15px;
  width: 100%;
}

.inputlabel{
  font-family: 'Arial';
  border-radius: 5px;
  padding: auto;
  font-size: 0,5 em;
  font-weight: lighter;
  margin-bottom: 5px;
  
color: #04294f;
  border-style: none;
  width:100%;
}
.createtask{ 
  padding: 3px 10px 3px 10px;
  border-radius: 10px;
  background-color: #ffd8cc;
  color:#04294f;
  font-weight: 700;
  border: 1px solid #ff3a00;
}
/* .createtask:hover{
  background-color: #ffffff;
  color:ff3a00;
} */

input{
  padding: 5px;
  background: #ffd8cc;
  box-shadow: 0px 0px 3px #ffffff;
}

textarea{
  border-style: none;
  width:100%;
  background: #ffd8cc;
  box-shadow: 0px 0px 3px #ffffff;
  padding: 5px;
}
</style>
