<template>
	<div class="surface">
		<ipt :adddolist="adddolist"></ipt>
		<!-- <item></item> -->
		<!-- <status></status> -->
	</div>
</template>

<script>
import ipt from './components/input'
// import status from './components/status'
// import item from './components/todoitem'

export default {
	name: 'App',
	components: {
	ipt,
	// item,
	// status
	},
	data(){
		return {
			dolist: [
				{"uuid":"001","thing":"Eat","done":false}
			]
		}
	},
	methods: {
		adddolist(e){
			console.log(this.dolist)
			this.dolist.unshift(e)
		}
	}
}
</script>

<style>
	.surface{
		margin-top: 30px;
		width: 80%;
		height: 60px;
		margin-left: auto;
		margin-right: auto;
		line-height: 60px;
	}
</style>
