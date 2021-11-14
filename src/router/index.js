import Vue from "vue";
import Router from 'vue-router'
import Lhy from '../view/LHY.vue'
import Seats from '../view/Seats.vue'
import Why from '../view/Why.vue'
Vue.use(Router)
const routes = [
  {
    path: '/',
    name: 'Seats',
    component: Seats
  },
  {
    path: '/lhy',
    name: 'Lhy',
    component: Lhy
  },
  {
    path: '/why',
    name: 'Why',
    component: Why
  },
]
export default new Router({
  routes,
  mode: 'hash'
})