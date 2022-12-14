<template>

<SignOut />
<TaskColumn />
</template>

<script>
import SignOut from '../components/SignOut.vue';
import TaskColumn from '../components/TaskColumn.vue';
import NewTask from '../components/NewTask.vue';
import { mapStores } from "pinia";
import tasksStore from "../stores/task.js";

export default {
    computed: {
    ...mapStores(tasksStore),
  },
    components: {
        SignOut,
        TaskColumn,
        NewTask,
    },
}
</script>

<style>
</style>