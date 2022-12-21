<template>
    <LandingNav />
   
    <header class="header-background">
      <img
        class="astronaut-img"
        src="../assets/img/astronautmain.png"
        alt="astronaut-img"
      />
    </header>
    <br>


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

  
  <div class="astronaut-img-and-description-desktop">
    <img
      class="astronaut-img"
      src="../assets/img/astronautmain.png"
      alt="astronaut-img"
    />
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
  width: 60vw;
  font-size: 40px;
  line-height: 80%;
  letter-spacing: 5px;
  margin-left: 10%;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
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
}

.astronaut-img-and-description-desktop {
  display: none;
}

.spaceward-description {
  color: white;
  width: 80vw;
  font-size: 11px;
  text-align: justify;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
}

.space-footer {
  margin-top: 300px;
}

.header-background {
  background-color: none;
  width: 100vw;
  height: 300px;
}

.header-image {
  width: 300px;
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
