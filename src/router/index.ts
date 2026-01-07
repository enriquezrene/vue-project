import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: import('../01-template-syntax-and-expressions.vue')
  },
  {
    path: '/about',
    name: 'About',
    // Lazy loading component
    component: () => import('../02-list-rendering.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
