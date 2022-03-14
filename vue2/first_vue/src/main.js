import Vue from 'vue'
import App from './App'
import pg from './plugins'

import store from './store'

Vue.config.productionTip = false
Vue.config.devtools = false

Vue.use(pg)
// 让Vue使用插件

// Vue.use(vuex)
// // 使用vuex

new Vue({ 
	components:{
		App
	},
	render: h =>h(App),
	store,
	beforeCreate(){
		Vue.prototype.$bus = this
	}
}).$mount("#point")