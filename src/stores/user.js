// /store/user.js
import { defineStore } from "pinia";
import { supabase } from "../supabase";

export default defineStore("user", {
  state() {
    return {
      user: null,
    };
  },

  actions: {
    async fetchUser() {
      const user = await supabase.auth.user();
      this.user = user;
    },

    async signUp(email, password) {
      const response = await supabase.auth.signUp({
        email: email,
        password: password,
        
      });

      
      const data = response.data;
      const error = response.error;
      if (error) {
        console.log(error);
        return alert(error);
      };
      if (data.user) {
        this.user = data.user;
        return this.$router.push ("/loginscreen")
      };
      this.user_id = response.data.user.id;
    },

    async logIn(email, password) {
      const response = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
        
      });
    
      const data = response.data;
      const error = response.error;

      if (error) {
      return alert(error);
    }
      if (data) {
        this.user = data.user
      this.$router.push("/")
    };
      
    },

    async signOut() {
      const { error } = await supabase.auth.signOut()
      if (error) {
        throw error
      } else {
        this.$router.push ("/loginscreen")
      }
      
    },

  },

  persist: {
    enabled: true,
    strategies: [
      {
        key: "user",
        storage: localStorage,
      },
    ],
  },
});
