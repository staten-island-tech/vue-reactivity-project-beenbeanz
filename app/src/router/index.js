import { createRouter, createWebHistory } from 'vue-router'
import OrderSushi from '@/views/OrderSushi.vue'
import MakeSushi from '@/views/MakeSushi.vue'
import ChooseCustomer from '@/views/ChooseCustomer.vue'
import ServeSushi from '@/views/ServeSushi.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ChooseCustomer
    },
    {
      path: '/order-sushi',
      name: 'order-sushi',
      component: OrderSushi
    },
    {
      path: '/make-sushi',
      name: 'make-sushi',
      component: MakeSushi
    },
    {
      path: '/serve-sushi',
      name: 'serve-sushi',
      component: ServeSushi
    }
  ],
})

export default router
