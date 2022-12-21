<template>
<scroll-parallax :left="true" :down="true" direction="x" speed="0.4">
    <img class="astronaut" src="../assets/img/Astronaut suit-pana.png" alt="astronaut">
</scroll-parallax>
<scroll-parallax>
    <img src="../assets/img/mars-purple-space-landscape-with-large-planets-purple-starry-sky_7993-7257.webp" alt="">
</scroll-parallax>
</template>
<script>


export default {
  components: {
    
  },
}
</script>

<style scoped>
.astronaut{
    width: 600px;
    margin-left: 600px ;
    margin-top: 500px;
    

}
</style>