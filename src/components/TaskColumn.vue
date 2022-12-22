<template>
  <div>

    <h1>SPACEWARD</h1>

    <div>
      <div class="tasks-columns">
        <!--columna uno-->
        <div
          class="column-one"
          @drop="onDrop($event, 1)"
          @dragover.prevent
          @dragenter.prevent
        >
        <div class="todo-title">TO DO</div>
          <div
            class="task draggable"
            v-for="(task, index) of tasksStore.toDoTasks"
            :key="index"
            draggable
            @dragstart="startDrag($event, task)"
          >
            <TaskCard :task="task" class="card-one-column"/>
          </div>

          <button :class="{ active: newTask }" @click="newTask = !newTask" class="newtaskbutton">+</button>
          <NewTask v-show="newTask" />
        </div>

        <!--columna dos-->
        <div
          class="column-two"
          @drop="onDrop($event, 2)"
          @dragover.prevent
          @dragenter.prevent
        >
          <div class="doing-title">DOING</div>
          <div
            class="task draggable"
            v-for="(task, index) of tasksStore.doingTasks"
            :key="index"
            draggable
            @dragstart="startDrag($event, task)"
          >
            <TaskCard :task="task" class="card-two-column" />
          </div>
        </div>

        <!--columna tres-->
        <div
          class="column-three"
          @drop="onDrop($event, 3)"
          @dragover.prevent
          @dragenter.prevent
        >
        <div class="done-title">DONE</div>
          <div
            class="task draggable"
            v-for="(task, index) of tasksStore.doneTasks"
            :key="index"
            draggable
            @dragstart="startDrag($event, task)"
          >
            <TaskCard :task="task" class="card-three-column" />
          </div>
        </div>
      </div>
      <div class="waves-bottom">

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
      draggable: true,
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
.card-one-column {
  border-left: 10px solid #ff3a00;
}

.card-two-column {
  border-left: 10px solid #ffb400;
}

.card-three-column {
  border-left: 10px solid #00aee0;
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
  background-color: #04294f;
  border-radius: 30px;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 50px;
}

h1 {
  text-align: center;
  font-weight: 800;
  color: #273058;
  padding: 10px;
  margin-bottom: 0px;
  margin-top: 15px;
}

.todo-title {
  text-align: center;
  color: #ff3a00;
  text-shadow: 3px 0px #f6f7f1;
  text-decoration: none;
  border-bottom: 10px;
  font-size: 30px;
  padding: 4px;
  margin-left: 0;
  font-weight: 700;
}

.doing-title {
  text-align: center;
  color: #ffb400;
  text-shadow: 3px 0px #f6f7f1;
  text-decoration: none;
  border-bottom: 10px;
  font-size: 30px;
  padding: 4px;
  margin-left: 0;
  font-weight: 700;
}

.done-title {
  text-align: center;
  color: #00aee0;
  text-shadow: 3px 0px #f6f7f1;
  text-decoration: none;
  border-bottom: 10px;
  font-size: 30px;
  padding: 4px;
  margin-left: 0;
  font-weight: 700;
}

.column-one {
  width: 100%;
  background-color: #ffd8cc;
  padding: 10px;
  border-radius: 25px;
  margin-bottom: 20px;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: center;

}

.column-two {
  width: 100%;
  background-color: #fff0cc;
  padding: 10px;
  border-radius: 25px;
  margin-bottom: 20px;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: center;

}

.column-three {
  width: 100%;
  background-color: #cceff9;
  padding: 10px;
  border-radius: 25px;
  margin-bottom: 20px;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: center;

}


.newtaskbutton {
  border-style: none;
  color: #ff3a00;
  border-radius: 20px;
  font-weight: bold;
  width: 100%;
  font-size: 1.5em;
  background-color: #ffffff;
}
.newtaskbutton.active {
  border-radius: 20px 20px 0px 0px;
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

  .column-one{
  width : 32%
  }

  .column-two{
    width : 32%
  }

  .column-three{
    width : 32%
  }

  .draggable {
  cursor: move;
}
}
</style>
