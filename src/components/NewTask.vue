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
  background-color: #43516c;
  padding-top:15px;
  width: 100%;
}

.inputlabel{
  font-family: 'Manrope';
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
  background-color: #dba531;
  color:#ffffff;
  border: 1px solid #e5e8c7;
  border-width:2px;
  
  /* background-color: #190c3d;
  color: #b92bdb;
  
  width:80%;  */
}
.createtask:hover{
  background-color: #750707;
  color:black;
  box-shadow: 0px 0px 4px #ff3a00;
}
input{
  
  background: #e5e8c7;
  box-shadow: 0px 0px 3px #dba531;
}
textarea{
  border-style: none;
  width:100%;
  background: #e5e8c7;
  box-shadow: 0px 0px 3px #dba531;
}
</style>
