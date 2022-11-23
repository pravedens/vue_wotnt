import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeComponent'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Auth/LoginAuth')
  },
  {
    path: '/reg',
    name: 'reg',
    component: () => import('../views/Auth/RegAuth')
  },
  {
    path: '/listGospel',
    name: 'listGospel',
    component: () => import('../views/Gospel/ListGospel'),
  },
  {
    path: '/mainGospel/:id',
    props: true,
    name: 'mainGospel',
    component: () => import('../views/Gospel/MainGospel'),
  },
  {
    path: '/newGospel',
    name: 'newGospel',
    component: () => import('../views/Gospel/NewGospel'),
  },
  {
    path: '/orders',
    name: 'orders',
    component: () => import('../views/User/OrderUser'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
