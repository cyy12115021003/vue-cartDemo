import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import router from './router'


Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
