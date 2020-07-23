import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HomeA from '../views/Administration/Home.vue'

import Login from '../views/Client/Autentificacion/Login.vue'
import Register from '../views/Client/Autentificacion/Register.vue'
import Dashboard from '../views/Client/Dashboard.vue'
import Detalles from '../views/Client/Detalles.vue'
import Carrito from '../views/Client/Carrito.vue'

import LoginA from '../views/Administration/Authentication/Login.vue'
import RegisterA from '../views/Administration/Authentication/Register.vue'
import DashboardA from '../views/Administration/Dashboard/Dashboard.vue'

import firebase from 'firebase'

Vue.use(VueRouter)
const router = new VueRouter({
  routes : [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      requiresAuth:true
    }
  },
  {
    path: '/detalles',
    name: 'Detalles',
    component: Detalles
  },
  {
    path: '/carrito',
    name: 'Carrito',
    component: Carrito
  },
  {
    path: '/home/administration',
    name: 'HomeA',
    component: HomeA
  },
  {
    path: '/login/administration',
    name: 'LoginA',
    component: LoginA
  },
  {
    path: '/register/administration',
    name: 'RegisterA',
    component: RegisterA
  },
  {
    path: '/dashboard/administration',
    name: 'DashboardA',
    component: DashboardA,
    meta: {
      requiresAuth:true
    }
  }
]
});

router.beforeEach((to, from, next) => {
  if(to.matched.some(ruta => ruta.meta.requiresAuth)){
    const user = firebase.auth().currentUser;
    if(user){
      next();
    }else{
      next({
        name:'Login'
      })
    }
  }else{
      next();
    }
})

export default router;