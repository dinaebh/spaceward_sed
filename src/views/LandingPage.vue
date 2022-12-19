<template>
  <div class="astronaut-img-and-description">
    <div class="what-is-spaceward">
      <div>
        <h2>
          What is
          <p>Spaceward?</p>
        </h2>
      </div>
      <img
        class="astronaut-img"
        src="../assets/img/astronautmain.png"
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
  <!-- <Footer /> -->
</template>

<script>
import Footer from "../components/Footer.vue";

export default {
  components: {
    Footer,
  },
};
</script>

<style>
h2 {
  color: white;
  border-bottom: 1px solid white;
  width: 30vw;
}

.astronaut-img {
  width: 95vw;
  margin: auto;
}

.astronaut-img-and-description {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.astronaut-img-and-description-desktop {
  display: none;
}

.spaceward-description {
  color: white;
  width: 80vw;
  font-size: 10px;
  text-align: justify;
}

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

  .what-is-spaceward {
    /* float: left; */
  }
}
</style>
