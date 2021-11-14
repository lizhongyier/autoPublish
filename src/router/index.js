import Vue from "vue";
import Router from 'vue-router'
import LHY from '../view/LHY.vue'
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
    name: 'LHY',
    component: LHY
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