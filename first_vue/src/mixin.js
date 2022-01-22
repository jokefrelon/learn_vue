const wheseisvc = {
	data(){
		return {
			hell:"dashaz"
		}
	},
	methods:{
		sch(){
			console.log("i am here",this.hell);
			// alert("I am here")
		}
	}
}
// 在这个文件里可以定义data,methods,watch... vue允许的都可以
// 可以全局引入mixin方法就是在main.js 里面定义
// Vue.mixin(whereisvc)
// 单组件定义就在该组件里面import使用即可
export default wheseisvc;