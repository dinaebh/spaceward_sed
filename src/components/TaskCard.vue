<template>

    <div class="task">

        <div class="edit-delete-buttons">
            <button type="button" @click="editTask(task.title, task.description, task.id)">
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button type="button" @click="deleteTask(task.id)">
              <i class="fa-solid fa-trash"></i>
            </button>
            <div>Move:</div>
            <button v-show="task.status !== 1" type="button" @click="changeStatus(1, task.id)">To-do</button>
            <button v-show="task.status !== 2" type="button" @click="changeStatus(2, task.id)">Doing</button>
            <button v-show="task.status !== 3" type="button" @click="changeStatus(3, task.id)">Done</button>
          </div>

          <div v-if="!editing">
            <div>
              <h4>{{ task.title }}</h4>
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

</template>


<script>

import { mapStores } from "pinia";
import tasksStore from "../stores/task.js";
import userStore from "../stores/user";

export default {

    props: [
        "task",
],
  components: {
  },

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
        this.tasksStore.changeStatus(taskstatus, taskid)

    }

  },

  mounted() {
    this.showTasks();
  },
};

</script>

<style scoped>

h4 {
  color: #ffffff;
  
}

h6 {
  color: #ffffff;
}

.edit-delete-buttons {
  display: flex;
  justify-content: space-around;
  gap: 10px;
}

button {
  border-radius: 25px;
  background-color: #dacff5;
  color: #4a2b6f;
}

.task {
  background-color: #12062F;
  color: white;
  padding: 15px;
  margin: 5px;
  border-radius: 20px;
  border-bottom: 10px solid #23173e;
  flex-wrap: wrap;
}

</style>