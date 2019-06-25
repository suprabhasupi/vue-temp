import Vue from 'vue'
import Vuex from 'vuex'
import App from './app.vue'
// import store from '~/store'
import router from '../router'

Vue.config.productionTip = false
Vue.performance = true

Vue.use(Vuex)

/* eslint-disable no-new */
Promise.resolve(window.fetch).then(() => {
  new Vue({
    el: '#app',
    // store,
    router,
    render: h => h(App)
  })
})