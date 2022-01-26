import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

new Vue({
  render: h => h(App),
	beforeCreate(){
		Vue.prototype.$bus = this
	}
}).$mount('#app')
