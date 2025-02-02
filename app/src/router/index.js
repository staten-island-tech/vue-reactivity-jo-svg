import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/BaseView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'base',
      component: () => import('../views/BaseView.vue'),
    },
    {
      path: '/frosting',
      name: 'frosting',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/FrostingView.vue'),
    },
    {
      path: '/candles',
      name: 'candles',
      component: () => import('../views/CandlesView.vue'),
    },
    {
      path: '/decor',
      name: 'decor',
      component: () => import('../views/DecorView.vue'),
    },
  ],
})

export default router
