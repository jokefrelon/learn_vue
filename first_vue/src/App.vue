<template>
	<div>
		<Windows ref="xx" giveup="No" version="19043.1466" ></Windows>
		<Linux ref="xxb" ></Linux>
		<button @click="lsref">lsref</button>
	</div>
</template>

<script>
import Windows from "./components/Windows"
import Linux from "./components/Linux"

export default {
	name: "App",
	components:{
		Windows,
		Linux
	},
	methods:{
		lsref(){
			console.log(this.$refs.xx.creator)
		}
	},
	
}
</script>
