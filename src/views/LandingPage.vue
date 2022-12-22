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

  <div class="astronaut-img-and-description">
    <div class="what-is-spaceward">
      <div>
        <h2>
          What is
          <p>Spaceward?</p>
        </h2>
      </div>
      <img
        class="astronaut-tasks-img"
        src="../assets/img/astronaut-tasks.png"
        alt="astronaut-img"
      />
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

  <div class="astronaut-img-and-description-desktop">
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
  </div>

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

export default {
  components: {
    AppFooter,
    LogInForm,
    LandingNav,
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
}

.astronaut-img-and-description {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.what-is-spaceward {
  background-color: #04294f;
  width: 90vw;
  padding: 20px;
  border-radius: 30px;
  border-bottom: 3px solid #ff3a00;
  box-shadow: 0px 5px 1px #ffb400;
}

.astronaut-img-and-description-desktop {
  display: none;
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
  margin-top: 600px;
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

.space-color {
  color: #ff3a00;
}


/** DESKTOP VERSION STARTS HERE **/

@media (min-width: 765px) {
  h2 {
    color: white;
    line-height: 80%;
    font-size: 65px;
    border-bottom: 1px solid white;
    width: 30vw;
    font-family: "Poppins", sans-serif;
    letter-spacing: 0.3cm;
    padding-bottom: 10px;
  }

  .spaceward-description {
    color: white;
    text-align: justify;
    width: 35vw;
    font-family: "Manrope", sans-serif;
    line-height: 98%;
  }

  .astronaut-img-and-description-desktop {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
  }

  .astronaut-img-and-description {
    display: none;
  }

  .astronaut-img {
    width: 45vw;
  }

  .astronaut-tasks-img {
    width: 45vw;
  }

  .what-is-spaceward {
    display: block;
    justify-content: center;
    align-items: center;
  }
}
</style>
