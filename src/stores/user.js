// /store/user.js
import { defineStore } from "pinia";
import { supabase } from "../supabase";

export default defineStore("user", {
  state() {
    return {
      user: null,
     
    };
  },

  getters: {
    isLoggedIn() {
      return this.user !== null;
    },
    userName() {
      const name = this.user.filter((user) => 
      user.name)
      return name;
    },
  },

  actions: {
    async fetchUser() {
      const user = await supabase.auth.user();
      this.user = user;
    },

    async signUp(name, lastname, username, email, password) {
      const response = await supabase.auth.signUp({
        email: email,
        password: password,
        options:{
          data:{
            first_name: name,
            last_name: lastname,
            username: username,
          }
        }
        
      });
      const data = response.data;
      const error = response.error;
      if (error) {
        
        return alert(error);
      };
      if (data.user) {
        console.log(data);
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
        console.log("hola", data)
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
        this.$router.push ("/landingpage")
      }
      
    },

    async updateProfile(first_name, last_name, avatar_url){
      const {error} = await supabase.from("profiles").upsert(first_name, last_name, avatar_url, {returning: "minimal"});
    if(error) throw error
  },

    async handleImageUpload(path){
      avatar_url.value = path;
      await updateProfile({first_name, last_name, avatar_url: path})
    },

    async editUser(name, lastname, username, email, password, id) {
      const { data: error } = await supabase

        .from("tasks")
        .update({ first_name: name, last_name: lastname, username: username, email: email, password:password })
        .eq("id", id);

        if (error) {
          return alert(error);
          }
         if (data) {
         this.user = data.user
         this.fetchUser();
           };
      
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
