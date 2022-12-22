<template>
  
<ul >
  
      <li class="list" :class="{ active: isActive }">
        <a href="#" style="--clr : #ff3a00" @click="IsActive(1), toLanding()">
          <span class="icon" ><i class="fa-solid fa-rocket" ></i
            ></span>
          <span class="text">Landing Page</span>
        </a>
      </li>
      <li class="list" :class="{ active: isActive2 }">
        <a href="#" style="--clr: #ffb400" @click="IsActive(2), toDashboard()">
          <span class="icon"><i class="fa-solid fa-house"></i></span>
          <span class="text">Dashboard</span>
        </a>
      </li>
      <li class="list" :class="{ active: isActive3 }">
        <a href="#" style="--clr: #00aee0" @click="IsActive(3) ">
          <span class="icon"><i class="fa-regular fa-user"></i></span>
          <span class="text" >Profile</span>
        </a>
      </li>
      <li class="list" :class="{ active: isActive4 }">
        <a href="#" style="--clr: #00e0a3" @click="IsActive(4)">
          <span class="icon"><i class="fa-solid fa-gear"></i></span>
          <span class="text" >Settings</span>
        </a>
      </li>
      <li class="list" :class="{ active: isActive5 }">
        <a href="#" style="--clr: #04294f" @click="IsActive(5), logOut()">
          <span class="icon"><i class="fa-solid fa-right-from-bracket"></i></span>
          <span class="text" >Logout</span>
        </a>
      </li>
    </ul>
    
 
</template>
<script>

import { mapStores } from "pinia";
import userStore from "../stores/user.js";
export default{
    data(){
        return{
            isActive: false,
            isActive2: false,
            isActive3: false,
            isActive4: false,
            isActive5: false,
            
          
    }
},
computed: {
    ...mapStores(userStore),
  },

    methods:{
        IsActive(num) {
      if(num == 1){
        this.isActive = !this.isActive;
        this.isActive2 = false;
        this.isActive3 = false;
        this.isActive4 = false;
        this.isActive5 = false;

      } if(num == 2) {
        this.isActive2 = !this.isActive2
        this.isActive = false;
        this.isActive3 = false;
        this.isActive4 = false;
        this.isActive5 = false;
      } if(num == 3) {
        this.isActive3 = !this.isActive3
        this.isActive2 = false;
        this.isActive = false;
        this.isActive4 = false;
        this.isActive5 = false;
      } if(num == 4) {
        this.isActive4 = !this.isActive3
        this.isActive2 = false;
        this.isActive = false;
        this.isActive3 = false;
        this.isActive5 = false;
      } if(num == 5) {
        this.isActive5 = !this.isActive3
        this.isActive2 = false;
        this.isActive = false;
        this.isActive4 = false;
        this.isActive3 = false;
      } 
    },
    toLanding(){
    this.$router.push('/landingpage')
  },
  toDashboard(){
    this.$router.push('/')
  },
  toUser(){
    this.$router.push('/userscreen')
  },
  logOut() {
      this.userStore.signOut();
    },
  

  

    
      
    }
}
</script>
<style scoped>
ul{
display: flex;
flex-direction: column;
width: 100%;
}
ul li{
    list-style: none;
    position: relative;
    width: 100%;
    height: 76px;
    border-radius: 12px;
    border: 8px solid transparent;
    transition: 0.5s;
}
ul li.active{
    transform: translateX(30px);
    background: var(--bg);
}


ul li::before{
    content:'';
    position: absolute;
    top: -28px;
    right: -10px;
    width: 20px;
    height: 20px;
    background: transparent;
    border-bottom-right-radius: 20px;
    box-shadow: 6px 5px 0 5px var(--bg);
    transform: scale(0);
    transform-origin: bottom right;
    transition: 0.5s;
}

ul li.active::before{
    right: 21.5px;
    transform: scale(1);
}

ul li::after{
    content:'';
    position: absolute;
    bottom: -28px;
    right: -10px;
    width: 20px;
    height: 20px;
    background: transparent;
    border-top-right-radius: 20px;
    box-shadow: 6px -3px 0 3px var(--bg);
    transform: scale(0);
    transform-origin: bottom right;
    transition: 0.5s;
}

ul li.active::after{
    right: 21.5px;
    transform: scale(1);
}

ul li a{
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    text-align: center;
    text-decoration: none;
    z-index: 1000;

}

ul li a .icon{
    position: relative;
    display: block;
    min-width: 60px;
    height: 60px;
    border-radius: 10px;
    font-size: 1.75em;
    line-height: 50px;
    border: 6px solid transparent;
    transition: 0.5s;
    color:#04294f;
}

ul li.active a .icon{
    background: var(--clr);
    color: #fff;
    
}

ul li a .icon::before{
    content:'';
    position: absolute;
    top: 12px;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr);
    opacity: 0;
    transition: 0.5s;
}

/* ul li.active a .icon::before{
    opacity: 0.5;
} */

ul li a .icon::after{
    content:'';
    position: absolute;
    top: 15px;
    left: -55px;
    width: 22px;
    height: 22px;
    background: var(--clr);
    border: 6px solid var(--bg);
    border-radius: 50%;
}

ul li a .text{
    position: relative;
    padding: 0 15px;
    color: #04294f;
    display: flex;
    align-items: center;
    height: 60px;
    opacity: 0;
    visibility: hidden;
    transition: 0.15s;

}
.navigation.active ul li a .text{
  visibility: visible;
  opacity: 1;
}
ul li.active a .text{
  color: #04294f;

}
</style>