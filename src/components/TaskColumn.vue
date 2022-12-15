<template>
  <link href="/your-path-to-fontawesome/css/fontawesome.css" rel="stylesheet" />
  <link href="/your-path-to-fontawesome/css/brands.css" rel="stylesheet" />
  <link href="/your-path-to-fontawesome/css/solid.css" rel="stylesheet" />
  <h1>To Do List</h1>
  <!-- <button type="button" @click.prevent="showTasks()">Update Tasks</button> -->

  <!--columna uno-->
  <div class="tasks-columns">
    <div class="column">
      <h2>TO DO</h2>

      <div class="task" v-for="(task, index) of tasksStore.toDoTasks" :key="index">
          <div class="edit-delete-buttons">
            <button type="button" @click="editTask(task.title, task.description, task.id)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-pencil-square"
                viewBox="0 0 16 16"
              >
                <path
                  d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                />
                <path
                  fill-rule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                />
              </svg>
            </button>
            <button type="button" @click="deleteTask(task.id)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-trash-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"
                />
              </svg>
            </button>
          </div>

          <div v-if="!editing">
            <div>
              <h3>{{ task.title }}</h3>
            </div>
            <div>
              <h4>{{ task.description }}</h4>
            </div>
          </div>
          <div v-else="editing">
            <input type="text" v-model="task.title" :disabled="!editing" />
            <textarea
              type="text"
              v-model="task.description"
              :disabled="!editing"
            ></textarea>
            <div>
              <button
                type="submit"
                @click.prevent="editTask(task.title, task.description, task.id)"
              >
                {{ editing ? "save" : "edit" }}
              </button>
              <button type="button" @click="editing = false">Cancel</button>
            </div>
          </div>

      </div>
      <!-- <div><button v-on:click="showNewTask()">+</button></div>
        <div v-show="!newTask"></div> -->
      <button @click="newTask = !newTask">New Task</button>
      <NewTask v-show="newTask" />
    </div>

    <!--columna dos-->
    <div class="column">
      <h2>DOING</h2>
      <div class="task" v-for="(task, index) of tasksStore.doingTasks" :key="index">

          <div v-if="!editing">
            <h3>{{ task.title }}</h3>
          </div>
          <div>
            <h4>{{ task.description }}</h4>
          </div>

      </div>
    </div>

    <!--columna tres-->
    <div class="column">
      <h2>DONE</h2>
      <div class="task" v-for="(task, index) of tasksStore.doneTasks" :key="index">

          <div v-if="!editing">
            <h3>{{ task.title }}</h3>
          </div>
          <div>
            <h4>{{ task.description }}</h4>
          </div>

      </div>
    </div>
  </div>
</template>

<script>
import { mapStores } from "pinia";
import tasksStore from "../stores/task.js";
import NewTask from "./NewTask.vue";
import userStore from "../stores/user";

export default {
  components: {
    NewTask,
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

    // editTask(taskid) {
    //   this.editing = !this.editing;
    //   this.tasksStore.editTask(this.task.taskTitle, this.task.taskDescription, taskid);
    // },

    deleteTask(taskid) {
      this.tasksStore.deleteTask(taskid);
    },

    startDrag(item, task) {
      
    }
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
}

h2 {
  text-align: center;
  font-weight: 700;
  color: #174e78;
}

h3 {
  color: #ebb0a2;
}

h4 {
  color: #dacff5;
}

.edit-delete-buttons {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

button {
  border-radius: 25px;
  background-color: #dacff5;
  color: #4a2b6f;
}

.column {
  width: 30%;
  background-color: #dacff5;
  padding: 10px;
  border-radius: 25px;
}
.task {
  background-color: #4a2b6f;
  color: white;
  padding: 15px;
  margin: 5px;
  border-radius: 20px;
}
</style>
