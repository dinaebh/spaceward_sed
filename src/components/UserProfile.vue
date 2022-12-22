<template>
  hola

  {{ userStore.user.name }}
  
  <!-- <div class="task">
    <div class="task-general-buttons">
      <div class="edit-delete-buttons">
        <button
          type="button"
          @click="editUser(user.name, user.lastname, user.id)"
        >
          <i class="fas fa-pencil-alt"></i>
        </button>
        <button type="button" @click="deleteTask(task.id)">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
      
      </div>
    </div>

    <div v-if="!editing">
      <div>
        <h5>{{ task.title }}</h5>
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
      <div class="save-cancel-button">
        <button
          type="submit"
          @click.prevent="editUser()"
        >
          {{ editing ? "Save" : "edit" }}
        </button>
        <button type="button" @click="editing = false">Cancel</button>
      </div>
    </div> -->
 


</template>
<script>
import { mapStores } from "pinia";
import userStore from "../stores/user.js";


export default{
  

    data(){
        return{
          email:"",
          name:"",
          lastname:"",
          username:"",
          password:"",
          user: userStore.user,


        }
    },
    computed: {
    ...mapStores(userStore),
  },
  methods:{
  updateProfile(){
    this.userStore.updateProfile(this.first_name, this.last_name,)
  },
  editUser(){
   this.userStore.editUser(this.name)
   console.log(userStore.user)
  }
  },
}
</script>

<style scoped>
*{
  color: antiquewhite;
}

</style>