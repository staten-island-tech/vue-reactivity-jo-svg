import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HairView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/hair',
      name: 'hair',
      component: () => import('../views/HairView.vue'),
    },
    {
      path: '/nose',
      name: 'nose',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/NoseView.vue'),
    },
    {
      path: '/skinColor',
      name: 'skin color',
      component: () => import('../views/SkinColor.vue'),
    },
    {
      path: '/expression',
      name: 'expression',
      component: () => import('../views/ExpressionView.vue'),
    },
  ],
})

export default router
