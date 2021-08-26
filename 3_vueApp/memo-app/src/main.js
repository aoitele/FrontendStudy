import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import routes from "./routes"
import Vuex from 'vuex'
import _store from './store'

Vue.use(VueRouter)
Vue.use(Vuex)

const router= new VueRouter(routes)
const store= new Vuex.Store(_store)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
