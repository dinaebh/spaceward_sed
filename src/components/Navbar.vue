<template>
  <div class="body">
    <div class="navigation">
      <ul>
        <li class="list" style="--clr:#ff3a00" :class="{ active: isActive }"  @click="IsActive(1)">
          <a href="#" >
            <span class="icon"><i class="fa-solid fa-house"></i></span>
          </a>
        </li>
        <li class="list" style="--clr:#ffb400" :class="{ active: isActive2 }" @click="IsActive(2)">
          <a href="#" >
            <span class="icon"><i class="fa-regular fa-user"></i></span>
          </a>
        </li>
        <li class="list" style="--clr:#00aee0" :class="{ active: isActive3 }" @click="IsActive(3)">
          <a href="#" >
            <span class="icon"><i class="fa-solid fa-gear"></i></span>
          </a>
        </li>
        <li class="list" style="--clr:#00e0a3" :class="{ active: isActive4 }" @click="IsActive(4)">
          <a href="#" >
            <span class="icon"
              ><i class="fa-solid fa-rocket"></i
            ></span>
          </a>
        </li>
        <li class="list" style="--clr:#fff" :class="{ active: isActive5 }" @click="IsActive(5)">
          <a href="#" >
            <span class="icon"
              ><i class="fa-solid fa-right-from-bracket"></i>
            </span>
          </a>
        </li>
        <div class="indicator"></div>
      </ul>
    </div>
  </div>
</template>

<script>
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
    methods:{
        IsActive(num) {
      if(num == 1){
        this.isActive = !this.isActive;
        this.isActive2 = false;
        this.isActive3 = false;
        this.isActive4 = false;
        this.isActive5 = false;

      } if(num == 2) {
        this.isActive2 = !this.isActive2;
        this.isActive = false;
        this.isActive3 = false;
        this.isActive4 = false;
        this.isActive5 = false;
      } if(num == 3) {
        this.isActive3 = !this.isActive3;
        this.isActive2 = false;
        this.isActive = false;
        this.isActive4 = false;
        this.isActive5 = false;
      } if(num == 4) {
        this.isActive4 = !this.isActive4;
        this.isActive2 = false;
        this.isActive = false;
        this.isActive3 = false;
        this.isActive5 = false;
      } if(num == 5) {
        this.isActive5 = !this.isActive5;
        this.isActive2 = false;
        this.isActive = false;
        this.isActive3 = false;
        this.isActive4 = false;
      }
    },
    }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.navigation{
    position: relative;
    width: 100vw;
    height: 60px;
    background: #04294f;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px 10px 0px 0px;
}

.navigation ul{
    display: flex;
    width: 350px;

}

.navigation ul li{
    list-style: none;
    position: relative;
    width: 70px;
    height: 60px;
    z-index: 2;
}

.navigation ul li a{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
}

.navigation ul li a .icon{
    position: relative;
    display: block;
    width: 50px;
    height: 50px;
    /* background: red; */
    text-align: center;
    line-height: 50px;
    border-radius: 50%;
    color: #ffffff;
    font-size: 1.4em;
    transition: 0.20s;
    transition-delay: 0s;
}
.navigation ul li.active a .icon{
    background: var(--clr);
    color: #04294f;
    transform: translateY(-25px);
    transition-delay: 0.10s;
}
.indicator{
    position: absolute;
    top: -28px;
    width: 70px;
    height: 70px;
    background: #04294f;
    border-radius: 50%;
    z-index: 1;
    transition: 0.5s;
}

.indicator::before{
    content: '';
    position: absolute;
    top: 8px;
    left: -16.5px;
    width: 20px;
    height: 20px;
    background: transparent;
    border-radius: 50%;
    box-shadow: 10px 14px #04294f;
}

.indicator::after{
    content: '';
    position: absolute;
    top: 8px;
    right: -16.5px;
    width: 20px;
    height: 20px;
    background: transparent;
    border-radius: 50%;
    box-shadow: -10px 14px #04294f;
}

.navigation ul li:nth-child(1).active ~ .indicator{
    transform: translateX(calc(70px* 0));
}
.navigation ul li:nth-child(2).active ~ .indicator{
    transform: translateX(calc(70px* 1));
}
.navigation ul li:nth-child(3).active ~ .indicator{
    transform: translateX(calc(70px* 2));
}
.navigation ul li:nth-child(4).active ~ .indicator{
    transform: translateX(calc(70px* 3));
}

.navigation ul li:nth-child(5).active ~ .indicator{
    transform: translateX(calc(70px* 4));
}
</style>
