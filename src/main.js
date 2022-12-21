import "bootstrap/dist/css/bootstrap.min.css";
import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import piniaPersist from 'pinia-plugin-persist';
import "./assets/main.css";
import ScrollParallax from 'vue3-parallax/src/components/ScrollParallax.vue';


const app = createApp(App);
const pinia = createPinia();
pinia.use(({ store }) => {
  store.$router = markRaw(router);
});
pinia.use(piniaPersist)
app.use(pinia);
app.use(router);
app.mount("#app");
app.component('scroll-parallax', ScrollParallax);