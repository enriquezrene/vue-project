import { createRouter, createWebHistory } from 'vue-router'
import User from '@/routing/User.vue'
import Profile from '@/routing/user-profile/Profile.vue'
import One from '@/named-views/One.vue'
import Two from '@/named-views/Two.vue'
import Three from '@/named-views/Three.vue'

const routes = [
  // /:chapters -> matches /one, /one/two, /one/two/three, etc
  { path: '/:chapters+' },
  // /:chapters -> matches /, /one, /one/two, /one/two/three, etc
  { path: '/:chapters*' },
  {
    path: '/users/:id',
    name: 'User',
    component: User,
    children: [
      {
        path: 'profile',
        component: Profile,
      },
    ],
  },
  {
    path: '/',
    name: 'Home',
    component: import('../01-template-syntax-and-expressions.vue'),
  },
  {
    path: '/about',
    name: 'About',
    // Lazy loading component
    component: () => import('../02-list-rendering.vue'),
  },
  {
    path: '/nv-one',
    // a single route can define multiple named components
    // which will be rendered into <router-view>s with corresponding names.
    components: {
      default: One,
      a: Two,
      b: Three,
    },
  },
  {
    path: '/nv-two',
    components: {
      default: Three,
      a: Two,
      b: One,
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
