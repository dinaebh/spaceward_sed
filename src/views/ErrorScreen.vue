<template>
    <body>
        <div class="error-message">
        <h2 class="error-txt">ERROR 404</h2>
        <div class="alien"><AppError/></div>
    <h5>Ok..the Space is not thaaaat infinite</h5>
    <h2>YOU SPACEWARD TOO MUCH</h2>
</div>



</body>
</template>
<script>
import AppError from "../components/AppError.vue"

export default{
    components: {
        AppError,
    }
}
</script>
<style scoped>

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
h5{
    color:#ffd8cc;
}
.error-txt{
    color: #ffb400;
    

}
.alien{
  display: flex;
  justify-content: center;
} 
</style>