<template>
	<div>
		<!-- <Windows ref="xx" giveup="No" :version="19043.1466" ></Windows>
		<Linux ref="xxb" ></Linux>
		<button @click="lsref">lsref</button> -->
		<sttest />
		
	</div>
</template>

<script>
// import Windows from "./components/Windows"
// import Linux from "./components/Linux"
import sttest from "./components/storetest"

export default {
	name: "App",
	components:{
		sttest
		// Windows,
		// Linux
	},
	methods:{
		lsref(){
			console.log(this.$refs.xx.creator)
		}
	},
	
}
</script>
