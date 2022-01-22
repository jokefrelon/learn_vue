import Vue from 'vue'
import App from './App'
import pg from './plugins'

Vue.config.productionTip = false
Vue.config.devtools = false

Vue.use(pg)
// 让Vue使用插件

new Vue({ 
	components:{
		App
	},
	render: h =>h(App),
}).$mount("#point")