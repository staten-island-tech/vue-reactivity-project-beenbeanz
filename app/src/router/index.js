import { createRouter, createWebHistory } from 'vue-router'
import OrderSushi from '@/views/OrderSushi.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: OrderSushi
    }
  ],
})

export default router
