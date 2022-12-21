<template>
  <div>
    <div class="waves-header">
      <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fff"
          fill-opacity="1"
          d="M0,320L48,309.3C96,299,192,277,288,224C384,171,480,85,576,85.3C672,85,768,171,864,186.7C960,203,1056,149,1152,160C1248,171,1344,245,1392,282.7L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg> -->
    </div>
    <h1>SPACEWARD</h1>

    <div>
      <div class="tasks-columns">
        <!--columna uno-->
        <div
          class="column"
          @drop="onDrop($event, 1)"
          @dragover.prevent
          @dragenter.prevent
        >
          <h2>TO DO</h2>
          <!-- <div class="floated-galaxy">
            <img src="../assets/img/00_balls.png" alt="galaxy_img" />
          </div> -->
          <div
            class="task"
            v-for="(task, index) of tasksStore.toDoTasks"
            :key="index"
            draggable
            @dragstart="startDrag($event, task)"
          >
            <TaskCard :task="task" />
          </div>

          <button :class="{ active: newTask }" @click="newTask = !newTask" class="newtaskbutton">+</button>
          <NewTask v-show="newTask" />
        </div>

        <!--columna dos-->
        <div
          class="column"
          @drop="onDrop($event, 2)"
          @dragover.prevent
          @dragenter.prevent
        >
          <h2>DOING</h2>
          <!-- <div class="floated-rocket">
            <img src="../assets/img/00_rocket.png" alt="rocket_img" />
          </div> -->
          <div
            class="task"
            v-for="(task, index) of tasksStore.doingTasks"
            :key="index"
            draggable
            @dragstart="startDrag($event, task)"
          >
            <TaskCard :task="task" />
          </div>
        </div>

        <!--columna tres-->
        <div
          class="column"
          @drop="onDrop($event, 3)"
          @dragover.prevent
          @dragenter.prevent
        >
          <h2>DONE</h2>
          <!-- <div class="floated-flag">
            <img src="../assets/img/00_flag.png" alt="flag_img" />
          </div> -->
          <div
            class="task"
            v-for="(task, index) of tasksStore.doneTasks"
            :key="index"
            draggable
            @dragstart="startDrag($event, task)"
          >
            <TaskCard :task="task" />
          </div>
        </div>
      </div>
      <div class="waves-bottom">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,0L48,21.3C96,43,192,85,288,112C384,139,480,149,576,176C672,203,768,245,864,256C960,267,1056,245,1152,197.3C1248,149,1344,75,1392,37.3L1440,0L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg> -->
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
      evt.dataTransfer.dropEffect = "move";
      evt.dataTransfer.effectAllowed = "move";
      console.log("se mueve", task.id);
      evt.dataTransfer.setData("taskID", task.id);
    },
    onDrop(evt, status) {
      const taskID = evt.dataTransfer.getData("taskID");
      console.log("llega", taskID);
      this.tasksStore.changeStatus(status, taskID);
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
body {
  background-color: black;
}

.floated-galaxy {
  display: flex;
  align-self: flex-end;
  margin-top: -40px;
}
.floated-galaxy img {
  width: 50px;
}
.floated-rocket {
  display: flex;
  align-self: flex-end;
  margin-top: -40px;
}
.floated-rocket img {
  width: 50px;
}
.floated-flag img {
  width: 50px;
}
.floated-flag {
  display: flex;
  align-self: flex-end;
  margin-top: -40px;
}
.tasks-columns {
  display: block;
  justify-content: center;
  background-color: #ce7656;
  border-radius: 30px;
  /* background-image: -webkit-linear-gradient(180deg, #f0f 20%, #f66 40%); */
  padding: 10px;
  margin-top: 10px;
}

.waves-header {
  margin-bottom: -70px;
}
.waves-bottom {
  height: 50px;
}
h1 {
  /* background-color: white; */
  /* background-color: #613CAB; */
  text-align: center;
  font-weight: 800;
  color: #43516c;
  padding: 10px;
  /* border-top-left-radius: 25px;
  border-top-right-radius: 25px; */
  margin-bottom: 0px;
  margin-top: 15px;
}

h2 {
  text-align: center;
  color: #dca531;
  text-shadow: 3px 0px #d85426;
  text-decoration: none;
  border-bottom: 10px;
  /* background-color:#C5BBD9 ; */
  /* border-radius: 20px; */
  font-size: 30px;
  padding: 4px;
  /* font-weight: lighter; */
  /* width:100%; */

  margin-left: 0;
}

/* #b274ff .float-flag i {
  color: aqua;
  width: 30%;
} */

.column {
  /* width: 100%; */
  background-color: #e5e8c7;
  padding: 10px;
  border-radius: 25px;
  margin-bottom: 20px;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: center;
  /* box-shadow: -1px -1px 5px #190c3d; */
}

.draggable {
  cursor: move;
}
.newtaskbutton {
  border-style: none;
  color: #e5e8c7;
  border-radius: 20px;
  font-weight: bold;
  width: 100%;
  font-size: 1.5em;
  background-color: #dba531;
}
.newtaskbutton.active {
  border-radius: 20px 20px 0px 0px;
}
.newtaskbutton:hover {
  /* box-shadow: 0px 0px 8px #c8c8c8; */
}
.task {
  width: 100%;
  margin-right: auto ;
  margin-left: auto;
}

/** DESKTOP STARTS HERE **/
@media (min-width: 765px) {
  .tasks-columns {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
  .column {
    width: 100%;
    margin: 5px;
  }
  .waves-header {
    margin-bottom: -83px;
  }
}
</style>
