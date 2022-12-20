<template>
  <link href="/your-path-to-fontawesome/css/fontawesome.css" rel="stylesheet" />
  <link href="/your-path-to-fontawesome/css/brands.css" rel="stylesheet" />
  <link href="/your-path-to-fontawesome/css/solid.css" rel="stylesheet" />
  <div id="floating-iconos">
  <div clas="float-space"></div>
 <div clas="float-rocket"><i class='fas fa-rocket'></i></div>
 <div clas="float-flag"><i class='fa fa-flag'></i><i class='fa fa-spinner'></i></div>
</div>
  <h1>Final Project</h1>
  

 
  <div class="tasks-columns">
   <!--columna uno-->
    <div class="column" @drop="onDrop($event, 1)" @dragover.prevent @dragenter.prevent>
      <h2>TO DO</h2>

      <div class="task" v-for="(task, index) of tasksStore.toDoTasks" :key="index" draggable @dragstart="startDrag($event, task)">
        
        <TaskCard :task=task />
     
      </div>
  

      <button @click="newTask = !newTask" class="newtaskbutton">+</button>
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
  display: block;

  justify-content: space-around;
  
  background-color:#C5BBD9 ;
  /* background-image: -webkit-linear-gradient(180deg, #f0f 20%, #f66 40%); */
  padding: 10px;
  
}
#floating-iconos{
  width:400px;
}
h1 {
  background-color: #613CAB;
  text-align: center;
  font-weight: 800;
  color: #ffffff;
  padding: 10px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  margin-bottom: 0px;
  margin-top:15px;
}

h2 {
  text-align: center;
  color: #190c3d;
  text-decoration: none;
  /* background-color:#C5BBD9 ; */
  /* border-radius: 20px; */
font-size:30px;
  padding:4px;
  /* font-weight: lighter; */
  /* width:100%; */
  margin-top:3px;
  margin-left:0;

}
.float-flag i{
  color:aqua;
  width:30%;
}
.column {
  /* width: 100%; */
  background-color: #613CAB;
  padding: 10px;
  border-radius: 25px;
  margin-bottom:20px;
  display:flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: center;
  box-shadow: -1px -1px 5px #190c3d;

}

.draggable{
  cursor: move;
}
.newtaskbutton{
  border-style: none;
  color: #b92bdb;
  border-radius: 20px;
  
  font-weight: bold;
  width:100%;
  font-size:1.5em;
  background-color: #190c3d;
}
.task{
  width:100%;


}

@media (min-width: 765px) { 
  .tasks-columns {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
  }
  .column {
  width: 100%;
  margin:5px;
  
}
}
</style>
