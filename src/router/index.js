import Vue from 'vue'
// import Vuex from 'vuex'
import Router from 'vue-router'
import Home from '@/pages/home/Home'

Vue.use(Router)
// Vue.use(Vuex)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
