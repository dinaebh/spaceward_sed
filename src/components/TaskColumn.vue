<template>
  <link href="/your-path-to-fontawesome/css/fontawesome.css" rel="stylesheet" />
  <link href="/your-path-to-fontawesome/css/brands.css" rel="stylesheet" />
  <link href="/your-path-to-fontawesome/css/solid.css" rel="stylesheet" />
  <h1>To Do List</h1>
  

  <!--columna uno-->
  <div class="tasks-columns">
    <div class="column" @drop="onDrop($event, 1)" @dragover.prevent @dragenter.prevent>
      <h2>TO DO</h2>

      <div class="task" v-for="(task, index) of tasksStore.toDoTasks" :key="index" draggable @dragstart="startDrag($event, task)">
        
        <TaskCard :task=task />
     
      </div>
  

      <button @click="newTask = !newTask">New Task</button>
      <NewTask v-show="newTask" />
    </div>

    <!--columna dos-->
    <div class="column" @drop="onDrop($event, 2)" @dragover.prevent @dragenter.prevent>
      <h2>DOING</h2>
      <div class="task" v-for="(task, index) of tasksStore.doingTasks" :key="index" draggable @dragstart="startDrag($event, task)">

<TaskCard :task=task />

</div>
      </div>


    <!--columna tres-->
    <div class="column"  @drop="onDrop($event, 3)" @dragover.prevent @dragenter.prevent>
      <h2>DONE</h2>
      <div class="task" v-for="(task, index) of tasksStore.doneTasks" :key="index" draggable @dragstart="startDrag($event, task)">

<TaskCard :task=task />

</div>
    </div>
  </div>
</template>

<script>
import { mapStores } from "pinia";
import tasksStore from "../stores/task.js";
import NewTask from "./NewTask.vue";
import userStore from "../stores/user";
import TaskCard from "./TaskCard.vue";



export default {
  components: {
    NewTask,
    TaskCard,
 
   
  },

  data() {
    return {
      task: {
        taskTitle: "",
        taskDescription: "",
      },
      editing: false,
      value: "",
      newTask: true,
     
     
    };
  },
  computed: {
    ...mapStores(tasksStore, userStore),
  },

  methods: {
    showTasks() {
      this.tasksStore.fetchTasks();
    },

    editTask(tasktitle, taskdescription, taskid) {
      this.editing = !this.editing;
      this.tasksStore.editTask(tasktitle, taskdescription, taskid);
    },
    deleteTask(taskid) {
      this.tasksStore.deleteTask(taskid);
    },

    startDrag(evt, task) {
      evt.dataTransfer.dropEffect = 'move'
      evt.dataTransfer.effectAllowed = 'move'
      console.log('se mueve', task.id)
      evt.dataTransfer.setData('taskID', task.id)
    },
    onDrop(evt, status) {
      
      const taskID = evt.dataTransfer.getData('taskID')
      console.log('llega', taskID)
      this.tasksStore.changeStatus(status, taskID)
    
      
    },
  },

  mounted() {
    this.showTasks();
  },
};
</script>

<style scoped>
.tasks-columns {
  display: flex;
  justify-content: space-around;
  background-color:#031d36;
  padding: 20px;
  flex-wrap: wrap;
}

h1 {
  background-color: #ebb0a2;
  text-align: center;
  font-weight: 800;
  color: #174e78;
  padding: 10px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

h2 {
  text-align: center;
  font-weight: 700;
  color: #174e78;
}

.column {
  width: 30%;
  background-color: #ebb0a2;
  padding: 10px;
  border-radius: 25px;
}

.draggable{
  cursor: move;
}
</style>
