import { createRouter, createWebHistory } from 'vue-router';
import DashBoard from '../views/Dashboard.vue';
import VerifyMail from '../components/VerifyMail.vue';
import LogInScreen from '../views/LogInScreen.vue';
import SignUpScreen from '../views/SignUpScreen.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/", 
      component: DashBoard,
  },
  {
    path: "/verifymail", 
    component: VerifyMail,
},
{
  path: "/loginscreen", 
  component: LogInScreen,
},
{
  path: "/signupscreen", 
  component: SignUpScreen,
},
  ],
});

export default router;
