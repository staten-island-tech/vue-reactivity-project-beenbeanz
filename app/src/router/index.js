import { createRouter, createWebHistory } from 'vue-router'
import OrderSushi from '@/views/OrderSushi.vue'
import MakeSushi from '@/views/MakeSushi.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: OrderSushi
    },
    {
      path: '/make-sushi',
      name: 'make-sushi',
      component: MakeSushi
    }
  ],
})

export default router
