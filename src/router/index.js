import Vue from 'vue'
import VueRouter from 'vue-router'
//Importar los Componentes
import store from '../store/index'
import Login from '../components/Login.vue';
import HelloWorld from '../components/HelloWorld.vue';
import Usuarios from '../components/Usuarios.vue';
import Tarjetas from '../components/Tarjetas.vue'
import TarjetasInteractivasJobs from '../components/TarjetasInteractivasJobs.vue'
import TarjetasInteractivasAnimals from '../components/TarjetasInteractivasAnimals.vue'
import TarjetasInteractivasColors from '../components/TarjetasInteractivasColors.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld,
    meta: {
      admin: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      libre: true
    }
  },
  {
    path: '/usuarios',
    name: 'Usuarios',
    component: Usuarios,
    meta: {
      admin: true
    }
  },
  {
    path: '/tarjetas',
    name: 'Tarjetas',
    component: Tarjetas,
    meta: {
      admin: true
    }
  },
  {
    path: '/tarjetasInteractivas/trabajos',
    name: 'TarjetasInteractivasJobs',
    component: TarjetasInteractivasJobs,
    meta: {
      libre: true
    }
  },
  {
    path: '/tarjetasInteractivas/animales',
    name: 'TarjetasInteractivasAnimals',
    component: TarjetasInteractivasAnimals,
    meta: {
      libre: true
    }
  },
  {
    path: '/tarjetasInteractivas/colores',
    name: 'TarjetasInteractivasColors',
    component: TarjetasInteractivasColors,
    meta: {
      libre: true
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.libre)){
    next();
  }
  else if(store.state.token){
    if(to.matched.some(record => record.meta.admin)){
      next();
    }
  }
})

export default router
