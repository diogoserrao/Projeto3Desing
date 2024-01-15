import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegistarView from '../views/RegistarView.vue'
import ErrorView from '../views/ErrorView.vue'
import PesquisaView from '../views/PesquisaView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/registar',
      name: 'registar',
      component: RegistarView
    },
    {
      path: '/pesquisa',
      name: 'pesquisa',
      component: PesquisaView
    },
    {
      path: '/:pathMatch(.*)*', name: 'Error', component: ErrorView ,
    }
  ]
})

export default router
