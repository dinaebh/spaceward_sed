import { createRouter, createWebHistory } from 'vue-router';
import DashBoard from '../views/Dashboard.vue';
import VerifyMail from '../components/VerifyMail.vue';
import LogInForm from '../components/LogInForm.vue';

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
  path: "/loginform", 
  component: LogInForm,
},
  ],
});

export default router;
