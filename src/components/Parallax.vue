<template>

<div class="all-cards">

   <div class="card1 card">
    <img src="../assets/img/card1.png" alt="comunication">
    <div class="container">
        <h4>Comunicate</h4>
        <p>Connect with your friends and organize your projects together</p>
    </div>
   </div>

   <div class="card2 card">
    <img src="../assets/img/card2.png" alt="comunication">
    <div class="container">
        <h4>Comunicate</h4>
        <p>Connect with your friends and organize your projects together</p>
    </div>
   </div>

   <div class="card3 card">
    <img src="../assets/img/card3.png" alt="comunication">
    <div class="container">
        <h4>Comunicate</h4>
        <p>Connect with your friends and organize your projects together</p>
    </div>
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
.card1 {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 0px 20px 20px 0px;
  width: 80vw;
  background-color: #fff0cc;
  margin: 20px;
  display: flex;
  flex-direction: row;
  border-left: 10px solid #ffb400;
  padding: 20px;
}
.card2 {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 0px 20px 20px 0px;
  width: 80vw;
  background-color: #cceff9;
  margin: 20px;
  display: flex;
  flex-direction: row;
  border-left: 10px solid #00aee0;
  padding: 20px;
}
.card3 {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 0px 20px 20px 0px;
  width: 80vw;
  background-color: #ffd8cc;
  margin: 20px;
  display: flex;
  flex-direction: row;
  border-left: 10px solid #ff3a00;
  padding: 20px;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.container {
  padding: 2px 16px;
}

.card img {
  width: 30%;
  object-fit: cover;
}

.embed-responsive .card > img {
  object-fit: cover;
}

h4 {
  font-size: 30px;
  font-weight: 700;
  line-height: 90px;
  color: #292e47;
}
.container p {
  color: #6b708d;
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
}

.container a {
  text-decoration: none;
  color: #072ac8;
  font-weight: 500;
  font-size: 15px;
  line-height: 60px;
}

</style>