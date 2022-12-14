<template>

<SignOut />
<TaskColumn />
</template>

<script>
import SignOut from '../components/SignOut.vue';
import TaskColumn from '../components/TaskColumn.vue';
import NewTask from '../components/NewTask.vue';

export default {
    components: {
        SignOut,
        TaskColumn,
        NewTask,
    },
    computed: {
        // ...mapStore(userStore),
    },
}
</script>

<style>
</style>