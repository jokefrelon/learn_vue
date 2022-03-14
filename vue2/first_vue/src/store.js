import Vue from 'vue'
import vuex from 'vuex'

// 使用vuex
Vue.use(vuex)


// 创建actions{} 响应动作
const actions = {
	destroyPlant(context){
		context.commit('realDestory')
	}
}
// 创建mutations{} 操作数据
const mutations = {
	realDestory(){
		alert("想好了哈！没后悔药！摧毁后就真的没有了")
		this.state.sta = []
		console.log("已经删除所有的小星星了！江湖再见！");
	}
}
// 创建state 存储数据
const state = {
	sta:["SHNK-78-098-UUFMGS","SJUIO-44-89-SJHGKJ","JKYSDU-45-06-UGSLSS","GSKAZ-80-21-GOADU","UIOSAP-89-08-UUSIPO"],
	nw:0
}

const store = new vuex.Store({
	actions,
	mutations,
	state
})

export default store