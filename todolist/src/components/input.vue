<template>
	<div :class="ipt" id="commom">
		<input type="text" :placeholder="pleaseholder" @keydown.enter="addItem">
	</div>
</template>

<script>
export default {
	data() {
		return {
			ipt:"ipt-day",
			pleaseholder:"Please enter someting todo"
		}
	},
	props:["adddolist"],
	methods: {
		addItem(e){
			if (e.target.value == "") {
				alert("不允许输入空值哦!")				
			} else {
				const abcd = Math.floor(Math.random()*1000+1)
				const fna ={"uuid":abcd,"thing":e.target.value,"done":false}
				console.log(abcd);
				this.adddolist(fna)
				console.log(this);
				e.target.value = ""
			}
		}
	},
	watch:{
		ipt:{
			immediate:true,
			handler(){
				let ho = new Date().getHours()
				if (ho >= 7 && ho < 18) {
					this.ipt="ipt-day"
				} else {
					this.ipt="ipt-night"
				}
			}
		}
	}
}
</script>

<style scoped>
	#commom{
		width: 90%;
		text-align: center;
		margin-left: auto;
		margin-right: auto;
		border-radius: 4px;
		height: 80px;
		line-height: 80px;
	}
	#commom input{
		width: 90%;
		height:40px;
		line-height:40px;
		border-radius:5px;
		text-align: center;
		border: 1px solid #aaa;
		outline: none;
	}
	#commom input:focus{
		border: 1px solid #00718d;
		outline:none;
	}
	.ipt-day{
		background-color: #eee;
		color: #444;
		box-shadow: 1px 1px 5px #aaa,-1px -1px 5px #333;
	}
	.ipt-day input{
		background-color: #eee;
		border:3px solid #5c5c5c;
		color: #444;
		box-shadow: 1px 1px 5px #aaa,-1px -1px 5px #333;
	}
	.ipt-day input::-webkit-input-placeholder{
		color: #777;
	} 

	.ipt-night{
		background-color: #444;
		color: #eee;
		box-shadow: 1px 1px 5px #aaa,-1px -1px 5px #333;
	}
	.ipt-night input{
		background-color: #444;
		border:3px solid #e9e9e9;
		color:#eee;
		box-shadow: 1px 1px 5px #aaa,-1px -1px 5px #333;
	}
	.ipt-night input::-webkit-input-placeholder{
		color: #777;
	} 
</style>>