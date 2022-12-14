import { defineStore } from "pinia";

import { supabase } from "../supabase";

export default defineStore("tasks", {
  state() {
    return {
      tasks: null,
    };
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
      .insert({title: title, description: description, user_id: user_id})
      this.fetchTasks();
    },

    async editTask (title, description, id) {
      const { data: tasks } = await supabase

      .from("tasks")
      .update({title: title, description: description})
      .eq("id", id)
      this.fetchTasks();
    }
  },
});
