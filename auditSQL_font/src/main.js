import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'

Vue.use(ElementUI)
Vue.use(global)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({el: '#app', router, template: '<router-view/>'})
