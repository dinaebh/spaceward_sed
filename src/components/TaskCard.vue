<template>
  <div class="task">
    <div class="task-general-buttons">
      <div class="edit-delete-buttons">
        <button
          type="button"
          @click="editTask(task.title, task.description, task.id)"
        >
          <i class="fas fa-pencil-alt"></i>
        </button>
        <button type="button" @click="deleteTask(task.id)">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
      <div class="movetoButtons">
        <div class="move-to-icon"><i class="fa fa-angle-double-right"></i></div>

        <button
          v-show="task.status !== 1"
          type="button"
          @click="changeStatus(1, task.id)"
        >
          <i class="fa fa-spinner"></i>
        </button>
        <button
          v-show="task.status !== 2"
          type="button"
          @click="changeStatus(2, task.id)"
        >
          <i class="fas fa-rocket"></i>
        </button>
        <button
          v-show="task.status !== 3"
          type="button"
          @click="changeStatus(3, task.id)"
        >
          <i class="fa fa-flag"></i>
        </button>
      </div>
    </div>

    <div v-if="!editing">
      <div>
        <h5>{{ task.title }}</h5>
      </div>
      <div>
        <h6>{{ task.description }}</h6>
      </div>
    </div>
    <div v-else="editing">
      <input type="text" v-model="task.title" :disabled="!editing" />
      <textarea
        type="text"
        v-model="task.description"
        :disabled="!editing"
      ></textarea>
      <div class="save-cancel-button">
        <button
          type="submit"
          @click.prevent="editTask(task.title, task.description, task.id)"
        >
          {{ editing ? "Save" : "edit" }}
        </button>
        <button type="button" @click="editing = false">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapStores } from "pinia";
import tasksStore from "../stores/task.js";
import userStore from "../stores/user";

export default {
  props: ["task"],
  components: {},

  data() {
    return {
      editing: false,
      status: 1,
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

    changeStatus(taskstatus, taskid) {
      this.tasksStore.changeStatus(taskstatus, taskid);
    },
  },

  mounted() {
    this.showTasks();
  },
};
</script>

<style scoped>
/* *{
  font-family: Manrope;
} */

h5 {
  color: #395a6b;
  margin-top: 10px;
}

h6 {
  color: #395a6b;
  font-weight: 100;
}

.task-general-buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
  height: 30px;
}
.edit-delete-buttons {
  display: flex;
  justify-content: space-around;
  gap: 10px;
}
.movetoButtons {
  display: flex;
  justify-content: space-around;
  gap: 10px;
}
.movetoButtons button {
  color: #395a6b;
  border-color: #395a6b;
  background-color: white;
}

button {
  border-radius: 10px;
  /* background-color: #d1a657; */
  color: #758494;
  width: 100%;
  border: none;
  background-color: #ffffff;
}

.move-to-icon {
  border-radius: 25px;
  /* background-color: #ffffff; */
  color: #ff3a00;
  width: 100%;
}

.task {
  background-color: #ffffff;
  color: white;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 0px 10px 10px 0px;
  /* border-bottom: 10px solid #23173e; */
  flex-wrap: wrap;
  box-sizing: border-box;
}

textarea {
  border-style: none;
  color: white;
  border: 2px;
  border-radius: 3px;
  width: 100%;
  background: #190c3d;
  /* box-shadow:0px 00px 3px #b92bdb; */
  /* box-sizing: border-box; */
}

input {
  border-style: none;
  background-color: #190c3d;
  color: white;
  margin-top: 10px;
  margin-bottom: 4px;
  /* box-shadow:0px 00px 3px #b92bdb; */
  border-radius: 3px;
  width: 100%;
}
.save-cancel-button {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 50%;
  gap: 10px;
}
/** DESKTOP VERSION STARTS HERE */
@media (min-width: 765px) {
  .movetoButtons {
    display: none;
  }
  .task:hover {
    /* box-shadow: 0px 0px 10px #9e75d0; */
  }
}
</style>
