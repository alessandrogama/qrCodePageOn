import { createRouter, createWebHistory } from 'vue-router'
import QrCode from '../views/QrCode.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: QrCode
    },
  ]
})

export default router
