<template>
    <body>
        <div class="error-message">
        <div class="error-404">ERROR 404</div>
        <div class="alien"><AppError/></div>
        <a class="landing" href="#" @click="toLanding()">LANDING PAGE</a>
        <div class="infinite">Space is not thaaaat infinite</div>
        <div class="much">YOU 
        <span class="wavy"> <i>
        <span style="--i:1">S</span>
        <span style="--i:2">P</span>
        <span style="--i:3">A</span>
        <span style="--i:4">C</span>
        <span style="--i:5">E</span>
        <span style="--i:6">D</span>
        <span style="--i:7">_ </span>
        <span style="--i:8">O</span>
        <span style="--i:9">U</span>
        <span style="--i:10">T</span></i></span>
        TOO MUCH</div>
        <a class="dashboard" href="#" @click="toDashboard()">Dash<br><span>board</span></a>
        
        
    
</div>



</body>
</template>
<script>
import AppError from "../components/AppError.vue"

export default{
    components: {
        AppError,
    },
    methods:{
    toLanding(){
    this.$router.push('/landingpage')
  },
   toDashboard(){
    this.$router.push('/')
  },
    }
}
</script>
<style scoped>
a{
    text-decoration: none;
    text-shadow:1px 1px #ff3a00;
    font-family: 'Poppins';
    font-weight: 800; 
    font-size: 23px;
    color: #04294f;
}
a span{
    margin-left: 30px;
    margin-bottom: 10px;
}

body{
    background-color:#04294f;
    padding:50px;
    width: 100vw;
    height: 100vh;
    display: block;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    margin: -10px;

}
.landing{
    position: absolute;
    top:26%;
    left: 26.5%;
}

.dashboard{
    position: absolute;
    top:76%;
    left: 65%;
    line-height: 18px;
}
.error-404{
    font-family: 'Poppins';
    font-weight: 800; 
    color: #ffb400;
    text-shadow: 5px 5px #00aee0;
    font-size: 5vw;
    margin-left: 35%;
    margin-bottom: -20%;
    text-align: center;
    margin-top: 5%;
    z-index: 1;
   position: absolute;
}
.alien{
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 0;
  top: 0;
  margin-top: 5%;
  
  
} 
.infinite{
    position: absolute;
    color: #04294f;
    text-shadow: 2px 2px #ffb400;
    z-index: 1;
    font-family: 'Poppins';
    font-weight: 600; 
    font-size: 30px;
    top: 62%;
    left: 33%;
}
.much{
    position: absolute;
    color: #fff;
    text-shadow:2px 2px #00aee0;
    z-index: 1;
    font-family: 'Poppins';
    font-weight: 600; 
    font-size: 40px;
    top: 65%;
    left: 40%;
}

.wavy i{
    color: #ff3a00;
    text-shadow: 2px 2px #00aee0;
}
  
.wavy span {
display: inline-block;
text-transform: uppercase;
animation: animate 2s ease-in-out infinite;
animation-delay: calc(0.1s * var(--i));
}
  
@keyframes animate {
 0% {
transform: translateY(0px);
    }
  
20% {
transform: translateY(-20px);
    }
  
40%,
100% {
    transform: translateY(0px);
    }
}
</style>