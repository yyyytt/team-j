import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false

const VueTouch = require('vue-touch')
Vue.use(VueTouch, {name: 'v-touch'})

Vue.prototype.$axios = axios;

import Firebase from './firebase'
Firebase.init()
Firebase.onAuth()

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
