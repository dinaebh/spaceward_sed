<template>
<div class="wrapper">
    
    <div class="typing-demo">
      Come on! We're almost done!
    </div>
   <div class="animation">
    This is the end!
</div>
</div>
</template>
<script>


export default {
  components: {
    
  },
}
</script>

<style scoped>
.wrapper {
  height: 100vh;
  /*This part is important for centering*/
  display: grid;
  place-items: center;

}
.typing-demo {
  width: 27ch;
  animation: typing 2s steps(27), blink .5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-family: monospace;
  font-size: 2em;
  animation-delay: 1s;

}

.animation {
  width: 27ch;
  animation: fadeIn 0.25s, typing 2s steps(27), blink .5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-family: monospace;
  font-size: 2em;
  animation-delay: 3s;
  opacity: 0;
  animation-fill-mode: forwards;
 
 
}

@keyframes typing {
  from {
    width: 0
  }
}
    
@keyframes blink {
  50% {
    border-color: transparent
  }
}

  @keyframes fadeIn {
  0% { opacity: 0;}
  100% {opacity: 1;}

}
</style>