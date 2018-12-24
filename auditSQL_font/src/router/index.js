import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/login', name: '登陆', component: resolve => require(['@/pages/account/Login.vue'], resolve)}
  ]
})
