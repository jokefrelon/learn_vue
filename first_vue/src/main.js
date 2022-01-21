import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
Vue.config.devtools = false

new Vue({ 
	components:{
		App
	},
	render: h =>h(App),
}).$mount("#point")