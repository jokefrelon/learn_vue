<template>
	<div>
		<h2>OS_Creator: {{creator}} </h2>
		<h2>OS_Series: {{series}} </h2>
		<hr>
		<WindowsXP></WindowsXP>
		<hr>
	</div>
</template>

<script>
import WindowsXP from "./WindowsXP"

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
	}
}
</script>
