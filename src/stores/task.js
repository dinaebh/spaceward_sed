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
      console.log("Tareas del JS", this.tasks);
    },
    // async showTasks() {
    //   const { data, error } = await supabase

    //   .from("tasks")

    //   .select("*")

    //   if (data.task) 
    //     this.task = data.task;
    //   if (error) 
    //     throw error;
      
    //   console.log(data);
    // }
  },
});
