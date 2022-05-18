import { defineAsyncComponent } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: defineAsyncComponent(() => import('../views/HomeView.vue')),
    },
    {
      path: '/products/:id',
      name: 'products',
      component: () => import('../views/ProductView.vue'),
    },
    {
      path: '/categories/:id',
      name: 'categories',
      component: () => import('../views/CategoryView.vue'),
    },
  ],
});

export default router;
