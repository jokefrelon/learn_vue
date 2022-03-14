import Vue from 'vue'
import App from './App.vue'
import VR from 'vue-router'
import router from './router'

Vue.config.productionTip = false

Vue.use(VR)

new Vue({
  render: h => h(App),
	router: router
}).$mount('#app')
