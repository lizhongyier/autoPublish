import Vue from "vue";
import Router from 'vue-router'
import LHY from '../view/LHY.vue'
import Seats from '../view/Seats.vue'
Vue.use(Router)
const routes = [
  {
    path: '/seat',
    component: Seats
  },
  {
    path: '/',
    component: LHY
  },
]
export default new Router({
  routes,
  mode: 'hash'
})