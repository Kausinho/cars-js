import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ModelosView from '../views/ModelosView.vue';
import MarcasView from '../views/MarcasView.vue';
import CarrosView from '../views/CarrosView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/modelos',
    name: 'modelos',
    component: ModelosView
  },
  {
    path: '/marcas',
    name: 'marcas',
    component: MarcasView
  },
  {
    path: '/carros',
    name: 'carros',
    component: CarrosView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
