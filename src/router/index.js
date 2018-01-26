import Vue from 'vue'
import Router from 'vue-router'

const routerOptions = [
  {
    path: '/',
    name: 'Hello',
    component: 'Hello'
  },
  {
    path: '/init',
    name: 'HelloWorld',
    component: 'HelloWorld'
  },
  {
    path: '/Login',
    name: 'Login Page',
    component: 'Login'
  },
  {
    path: '/Register',
    name: 'Register Page',
    component: 'Register'
  },
  {
    path: '*',
    component: 'NotFound'
  }
]

const routes = routerOptions.map(route => {
  return {
    ...route,
    component: () => import(`@/components/${route.component}.vue`)
  }
})

Vue.use(Router)

export default new Router({
  routes,
  mode: 'history'
})
