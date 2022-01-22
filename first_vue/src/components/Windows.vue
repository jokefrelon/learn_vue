<template>
	<div>
		<h2 @click.once="sch">OS_Creator: {{creator}} </h2>
		<h2>OS_Series: {{series}} </h2>
		<h3> {{giveup}}.{{version}} </h3>
		<hr>
		<WindowsXP on="365Buy" off="365NotBuy" ></WindowsXP>
		<hr>
	</div>
</template>

<script>
import WindowsXP from "./WindowsXP"
import whereisvc from "../mixin"

export default {
	name: 'Windows',
	data(){
		return{
			creator:"MicroSoft",
			series:"Windows 10 , Windows 8 , Windows 7 , Windows Vista , Windows XP , Windows 98 , Windows 95"
		}
	},
	components:{
		WindowsXP
	},
	props:{
		giveup:String,
		version:Number,
	},
	
	//带有数据校验的接收
	// props:{
	// 	giveup:{
	// 		type:String,
	// 		required:true,
	// 		default:'111'
	// 	}
	// }
	// 这种方式就可以更详细的约定那些是需要的,那些不需要,默认值等等...
	
	mixins:[whereisvc]
}
</script>
