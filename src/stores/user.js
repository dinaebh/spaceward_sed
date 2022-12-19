// /store/user.js
import { defineStore } from "pinia";
import { supabase } from "../supabase";

export default defineStore("user", {
  state() {
    return {
      user: null,
      userm: null,
    };
  },

  getters: {
    isLoggedIn() {
      return this.user !== null;
    }
  },

  actions: {
    async fetchUser() {
      const user = await supabase.auth.user();
      this.user = user;
    },

    async fetchUserMeta() {
      const { data: users } = await supabase

        .from("")

        .select("*")

        .order("id", { ascending: false });

      this.userm = users;
    },

    async signUp(name, email, password) {
      const response = await supabase.auth.signUp({
        email: email,
        password: password,
        options:{
          data:{
            name_nickname: name,


          }
        }
        
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

    async passwordReset(email){

      const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: '/newpassword',
      })
      if (error)
      throw error;
      if (data)
        this.user=data.user;
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
    // com li dic que password d'abans es canvia per l'actual?
  
    async logInWithNewPassword(email, passwordUpdated) {
   const response = await supabase.auth.signInWithPassword({
   email: email,
    password:passwordUpdated,
        
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
        this.user = null;
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
