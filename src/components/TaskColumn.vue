<template>
  <link href="/your-path-to-fontawesome/css/fontawesome.css" rel="stylesheet" />
  <link href="/your-path-to-fontawesome/css/brands.css" rel="stylesheet" />
  <link href="/your-path-to-fontawesome/css/solid.css" rel="stylesheet" />
  
 
<div class="waves-header">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#ffffff" fill-opacity="1" d="M0,128L48,112C96,96,192,64,288,90.7C384,117,480,203,576,250.7C672,299,768,309,864,277.3C960,245,1056,171,1152,149.3C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
</svg> </div>
  <h1>SPACEWARD</h1>
  

 
  <div class="tasks-columns">
   <!--columna uno-->
    <div class="column" @drop="onDrop($event, 1)" @dragover.prevent @dragenter.prevent>
      <h2>TO DO</h2>
<div class="floated-galaxy"><img src="../assets/img/00_galaxy.png" alt="galaxy_img"></div>
      <div class="task" v-for="(task, index) of tasksStore.toDoTasks" :key="index" draggable @dragstart="startDrag($event, task)">
        
        <TaskCard :task=task />
     
      </div>
  

      <button @click="newTask = !newTask" class="newtaskbutton">+</button>
      <NewTask v-show="newTask" />
    </div>

    <!--columna dos-->
    <div class="column" @drop="onDrop($event, 2)" @dragover.prevent @dragenter.prevent>
      <h2>DOING</h2>
      <div class="floated-rocket"><img src="../assets/img/00_rocket.png" alt="rocket_img"></div>
      <div class="task" v-for="(task, index) of tasksStore.doingTasks" :key="index" draggable @dragstart="startDrag($event, task)">

<TaskCard :task=task />

</div>
      </div>


    <!--columna tres-->
    <div class="column"  @drop="onDrop($event, 3)" @dragover.prevent @dragenter.prevent>
      <h2>DONE</h2>
      <div class="floated-flag"><img src="../assets/img/00_flag.png" alt="flag_img"></div>
      <div class="task" v-for="(task, index) of tasksStore.doneTasks" :key="index" draggable @dragstart="startDrag($event, task)">

<TaskCard :task=task />

</div>
    </div>
  </div>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#ffffff" fill-opacity="1" d="M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,85.3C840,117,960,203,1080,218.7C1200,235,1320,181,1380,154.7L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
</svg>
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
/* .floated-galaxy{
  position:absolute;
  top:430px;
  left:350px;

  margin-top:-40px;
  background-image: 50px;
} */
.floated-galaxy{
  
  display:flex;
  align-self: flex-end;
margin-top:-40px;
  
}
.floated-galaxy img{
  width:50px;
}
.floated-rocket{
  display:flex;
  align-self: flex-end;
  margin-top:-40px;
}
.floated-rocket img{
  width:50px;
}
.floated-flag img{
  width:50px;
}
.floated-flag{
  display: flex;
  align-self: flex-end;
  margin-top:-40px;
}
.tasks-columns {
  display: block;

  justify-content: space-around;
  
  background-color:#C5BBD9 ;
  /* background-image: -webkit-linear-gradient(180deg, #f0f 20%, #f66 40%); */
  padding: 10px;
  
}

.waves-header{
  margin-bottom:-20px;
}
h1 {
  background-color: white;
  /* background-color: #613CAB; */
  text-align: center;
  font-weight: 800;
  color:#613CAB;
  padding: 10px;
  /* border-top-left-radius: 25px;
  border-top-right-radius: 25px; */
  margin-bottom: 0px;
  margin-top:15px;
}

h2 {
  text-align: center;
  color: #190c3d;
  text-decoration: none;
  border-bottom: 10px;
  /* background-color:#C5BBD9 ; */
  /* border-radius: 20px; */
font-size:30px;
  padding:4px;
  /* font-weight: lighter; */
  /* width:100%; */
  
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
  
/** DESKTOP STARTS HERE **/
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
