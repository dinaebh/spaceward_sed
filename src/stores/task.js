import { defineStore } from "pinia";

import { supabase } from "../supabase";

export default defineStore("tasks", {
  state() {
    return {
      tasks: [],
    };
  },

  getters: {
    toDoTasks() {
      const filtered1 = this.tasks.filter((task) => 
      task.status == 1)
      console.log(filtered1);
      return filtered1;
    },

    doingTasks() {
      const filtered2 = this.tasks.filter((task) => 
      task.status == 2)
      return filtered2;
    },

    doneTasks() {
      const filtered3 = this.tasks.filter((task) => 
      task.status == 3)
      return filtered3;
    },

  },

  actions: {
    async fetchTasks() {
      const { data: tasks } = await supabase

        .from("tasks")

        .select("*")

        .order("id", { ascending: false });

      this.tasks = tasks;
    },

    async createNewTask(title, description, user_id) {
      const { data: tasks } = await supabase

        .from("tasks")
        .insert({ title: title, description: description, user_id: user_id });
      this.fetchTasks();
    },

    async editTask(title, description, id) {
      const { data: tasks } = await supabase

        .from("tasks")
        .update({ title: title, description: description })
        .eq("id", id);
      this.fetchTasks();
    },

    async deleteTask(id) {
      const { data: tasks } = await supabase

        .from("tasks")
        .delete("*")
        .eq("id", id);
      this.fetchTasks();
    },

    async changeStatus(status, id) {
      const { data: tasks } = await supabase

        .from("tasks")
        .update({status: status})
        .eq("id", id);
      this.fetchTasks();
    },
  },
});
