import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/HomeComponent')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/Auth/LoginAuth')
  },
  {
    path: '/reg',
    name: 'reg',
    component: () => import('../components/Auth/RegAuth')
  },
  {
    path: '/listGospel',
    name: 'listGospel',
    component: () => import('../components/Gospel/ListGospel')
  },
  {
    path: '/mainGospel/:id',
    props: true,
    name: 'mainGospel',
    component: () => import('../components/Gospel/MainGospel')
  },
  {
    path: '/newGospel',
    name: 'newGospel',
    component: () => import('../components/Gospel/NewGospel')
  },
  {
    path: '/orders',
    name: 'orders',
    component: () => import('../components/User/OrderUser')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
