import Vue from "vue";
import Router from 'vue-router'
import LHY from '../view/LHY.vue'
import Seats from '../view/Seats.vue'
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
]
export default new Router({
  routes,
  mode: 'hash'
})