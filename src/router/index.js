import { createRouter, createWebHistory } from "vue-router";
import DashBoard from "../views/Dashboard.vue";
import LogInScreen from "../views/LogInScreen.vue";
import SignUpScreen from "../views/SignUpScreen.vue";
import useUserStore from "../stores/user";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: DashBoard,
    },
    {
      path: "/loginscreen",
      name: "login",
      component: LogInScreen,
    },
    {
      path: "/signupscreen",
      name: "signup",
      component: SignUpScreen,
    },

  ],
}
);

router.beforeEach(async function(param) {
  const store = useUserStore();
  const user = store.user;
  const isLoggedIn = user !== null;

  if (isLoggedIn && param.name === ("login" || "signup")) {
    return "/";
  }
  if (!isLoggedIn && param.name === "dashboard") {
    return "/loginscreen";
  }
})
export default router;
