<template>
  <LandingNav />
  <img class="top-stain" src="../assets/img/top-stain.png" alt="top-stain" />
  <header class="header-background">
    <img
      class="astronaut-header"
      src="../assets/img/astronaut-top.png"
      alt="astronaut-header"
    />
    <div class="header-text-and-title">
      <p class="text-header">We know it's easy to get lost in <i class="space-color">space</i>, so we created...
    </p>
    <div class="wrapper">
    <div class="typing-demo">
      Spaceward
    </div>
</div>
</div>
  </header>
  <br />

  <div class="two-cards-desktop">
  <div class="astronaut-img-and-description">
    <div class="what-is-spaceward">
      <div class="photo-desciption-desktop">
      <img
        class="astronaut-tasks-img"
        src="../assets/img/what-is-spaceward.png"
        alt="astronaut-img"
      />
      <div class="description-and-title">
        <h2>
          What is
          <p>Spaceward?</p>
        </h2>
      
      
      <div class="spaceward-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Aliquet risus
        feugiat in ante metus dictum at tempor. Tortor vitae purus faucibus
        ornare suspendisse sed nisi lacus. Fames ac turpis egestas maecenas
        pharetra convallis. Massa enim nec dui nunc mattis enim ut. Consequat
        interdum varius sit amet mattis vulputate enim nulla aliquet.
      </div>
    </div>
    </div>
  </div>
</div>

  <!-- <div class="astronaut-img-and-description-desktop">
    <div class="what-is-spaceward">
      <div>
        <h2>
          What is
          <p>Spaceward?</p>
        </h2>
      </div>
      <div class="spaceward-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Aliquet risus
        feugiat in ante metus dictum at tempor. Tortor vitae purus faucibus
        ornare suspendisse sed nisi lacus. Fames ac turpis egestas maecenas
        pharetra convallis. Massa enim nec dui nunc mattis enim ut. Consequat
        interdum varius sit amet mattis vulputate enim nulla aliquet. Convallis
        posuere morbi leo urna molestie at elementum eu. In iaculis nunc sed
        augue lacus viverra vitae congue eu. Donec enim diam vulputate ut
        pharetra sit amet aliquam id. Curabitur gravida arcu ac tortor. Diam
        maecenas ultricies mi eget mauris pharetra et ultrices. Gravida in
        fermentum et sollicitudin ac orci phasellus egestas. Eu mi bibendum
        neque egestas congue quisque. Aliquet porttitor lacus luctus accumsan
        tortor. Vel eros donec ac odio. Gravida arcu ac tortor dignissim.
      </div>
    </div>
  </div> -->

  <div class="all-brands">
    <img class="logo-1" src="../assets/img/AMAZON-LOGO.png" alt="amazon-logo">
    <img class="logo-2" src="../assets/img/DISCORD-LOGO.png" alt="discord-logo">
    <img class="logo-3" src="../assets/img/FACEBOOK-LOGO.png" alt="facebook-logo">
    <img class="logo-4" src="../assets/img/GOOGLE-LOGO.png" alt="google-logo">
    <img class="logo-5" src="../assets/img/SAMSUNG-LOGO.png" alt="samsung-logo">
    <img class="logo-6" src="../assets/img/SPOTIFY-LOGO.png" alt="spotify-logo">
  </div>
</div>

  <Parallax />

  <div id="log-in">
    <LogInForm />
  </div>

  <div class="space-footer">
    <AppFooter />
  </div>

</template>

<script>
import AppFooter from "../components/AppFooter.vue";
import LogInForm from "../components/LogInForm.vue";
import LandingNav from "../components/LandingNav.vue";
import Parallax from "../components/Parallax.vue";

export default {
  components: {
    AppFooter,
    LogInForm,
    LandingNav,
    Parallax,
  },
};
</script>

<style>
h2 {
  color: white;
  border-bottom: 1px solid white;
  width: 72vw;
  font-size: 35px;
  line-height: 80%;
  letter-spacing: 5px;
  margin-left: 5%;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  margin-top: 10px;
  margin-bottom: 15px;
}

.astronaut-img {
  width: 95vw;
  margin: auto;
}

.astronaut-tasks-img {
  width: 80vw;
  margin: auto;
  border-radius: 30px;
  border: 5px solid white;
  margin-bottom: 5px;
}

.astronaut-img-and-description {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.two-cards-desktop {
  margin-top: 30px;
}

.what-is-spaceward {
  background-color: #04294f;
  width: 90vw;
  padding: 20px;
  border-radius: 30px;
  border-bottom: 3px solid #ff3a00;
  box-shadow: 0px 5px 1px #ffb400;
}

.spaceward-description {
  color: white;
  width: 70vw;
  font-size: 11px;
  text-align: justify;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 10px;
}

.space-footer {
  margin-top: 700px;
}

.header-image {
  width: 300px;
}

.astronaut-header {
  width: 45%;
  margin-top: 50px;
}

.header-background {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 20px;
}

.top-stain {
  width: 100vw;
  z-index: -7;
  position: absolute;
  top: 0px;
}

.text-header {
    font-size: 'Poppins';
    color:#04294f;
    font-weight: 600;
    font-size: 11px;
    width: 70%;
    margin-left: 25px;
    margin-top: 0px;
    line-height: 90%;
    margin-bottom: -11px;
  }

.header-text-and-title {
  width: 100%;
  display: block;
  /* line-height: 170%; */
}

.typing-demo {
  width: 190px;
  animation: typing 2s steps(9), blink .5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-size: 32px;
  font-family: 'Poppins';
  font-weight: 700;
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

.all-brands {
  display: flex;
  justify-content: center;
  width: 90vw;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 25px;
  margin-bottom: 10px;
  background-color: #ffd8cc;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  border-radius: 35px;
}

.logo-1,
.logo-2,
.logo-3,
.logo-4,
.logo-5,
.logo-6 {
  width: 10%;
  filter: grayscale(15%);
}



.space-color {
  color: #ff3a00;
}



/** DESKTOP VERSION STARTS HERE **/

@media (min-width: 765px) {

  .top-stain {
  width: 50vw;
  z-index: -7;
  position: absolute;
  top: 0px;
  right: 0px;
}


  h2 {
    color: white;
    line-height: 80%;
    font-size: 65px;
    border-bottom: 1px solid white;
    width: 30vw;
    font-family: "Poppins", sans-serif;
    letter-spacing: 0.3cm;
    padding-bottom: 10px;
    margin-left: 12px;
  }

  .header-background {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 20px;
  margin-left: 400px;
}

  .astronaut-header {
  width: 30%;
  margin-top: 50px;
}

.two-cards-desktop {
  display: flex;
  justify-content: space-around;
  margin-left: 10%;
  align-items: center;
  gap: 0px;
  margin-top: 150px;
}

/* STARTS WHAT IS SPACEWARD */

.photo-desciption-desktop {
  display: block;
  justify-content: center;
}

.astronaut-tasks-img {
  width: 19vw;
  margin: auto;
  border-radius: 35px;
  border: 5px solid white;
  margin-left: 0px;
}

.astronaut-img-and-description {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.what-is-spaceward {
  background-color: #04294f;
  width: 55vw;
  padding: 20px;
  border-radius: 35px;
  border-bottom: 3px solid #ff3a00;
  box-shadow: 0px 5px 1px #ffb400;
}

.spaceward-description {
  color: white;
  width: 30vw;
  font-size: 11px;
  text-align: justify;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 10px;
}

/*ENDS WHAT IS SPACEWARD*/

  .all-brands {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  /* gap: 20px; */
  background-color: #fff0cc;
  padding: 80px;
  border-radius: 35px;
  /* margin: 0; */
  width: 25%;
  margin-left: 50px;
  border-bottom: 3px solid #ff3a00;
  box-shadow: 0px 5px 1px #ffb400;
  height: 430px;
  margin-top: 0px;
}

.logo-1,
.logo-2,
.logo-3,
.logo-4,
.logo-5,
.logo-6 {
  width: 80px;
  height: 80px;
}


  .text-header {
    font-size: 'Poppins';
    color:#04294f;
    font-weight: 600;
    font-size: 30px;
    width: 40%;
    margin-left: 90px;
    margin-top: 0px;
    line-height: 80%;
    margin-bottom: -11px;
  }

.header-text-and-title {
  width: 100%;
  display: block;
  /* line-height: 170%; */
}

.typing-demo {
  width: 600px;
  animation: typing 2s steps(9), blink .5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-size: 100px;
  font-family: 'Poppins';
  font-weight: 700;
}

.description-and-title {
  display: block;
  flex-direction: column;
  width: 600px;
}

.photo-desciption-desktop {
  display: flex;

}

}
</style>
