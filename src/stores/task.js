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

    async showTasks() {
      const { data, error} = await supabase

      .from("tasks")

      .select("*")

      if (error) throw error;
      if (data) this.task = data.task; 
      console.log(data);
    },
  },
});
