<template>

<div class="all-cards">

   <div class="card1 card">
    <img src="../assets/img/card1.png" alt="comunication">
    <div class="container">
        <h4>Comunicate</h4>
        <p>Connect and engage with your friends throught one unique space where you can organize your projects, activities or even your leisure time.</p>
    </div>
   </div>

   <div class="card2 card">
    <img src="../assets/img/card2.png" alt="comunication">
    <div class="container">
        <h4>Organize</h4>
        <p>Forget about the endless notebooks and lists scatered arround your workplace, now you can have everything in one place so organizing will result in a much easier work.</p>
    </div>
   </div>

   <div class="card3 card">
    <img src="../assets/img/card3.png" alt="comunication">
    <div class="container">
        <h4>Enjoy</h4>
        <p>Now that you organize everything more efficiently, you can enjoy the free time you'll have doing what you love the most.</p>
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
  width: 90vw;
  background-color: #fff0cc;
  margin: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-left: 10px solid #ffb400;
  padding: 20px;
}
.card2 {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 0px 20px 20px 0px;
  width: 90vw;
  background-color: #cceff9;
  margin: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-left: 10px solid #00aee0;
  padding: 20px;
}
.card3 {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 0px 20px 20px 0px;
  width: 90vw;
  background-color: #ffd8cc;
  margin: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
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
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  /* object-fit: cover; */
}

h4 {
  font-size: 30px;
  font-weight: 700;
  line-height: 90px;
  color: #292e47;
  text-align: center;
}
.container p {
  color: #6b708d;
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  text-align: center;
}

@media (min-width: 765px) {

  .all-cards {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
  }

  .card1 {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 0px 20px 20px 0px;
  width: 25vw;
  background-color: #fff0cc;
  margin: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-left: 10px solid #ffb400;
  padding: 20px;
}
.card2 {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 0px 20px 20px 0px;
  width: 25vw;
  background-color: #cceff9;
  margin: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-left: 10px solid #00aee0;
  padding: 20px;
}
.card3 {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 0px 20px 20px 0px;
  width: 25vw;
  background-color: #ffd8cc;
  margin: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
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
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  /* object-fit: cover; */
}

h4 {
  font-size: 30px;
  font-weight: 700;
  line-height: 90px;
  color: #292e47;
  text-align: center;
}
.container p {
  color: #6b708d;
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  text-align: center;
}

}

</style>