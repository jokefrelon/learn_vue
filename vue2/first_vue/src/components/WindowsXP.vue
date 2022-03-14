<template>
	<div>
		<h3>OS_Creator: {{creator}} </h3>
		<h3>OS_Series: {{series}} </h3>
		<h4> {{on}} {{off}} </h4>
	</div>
</template>

<script>
export default {
	name: "WindowsXP",
	data(){
		return{
			creator:"MicroSoft",
			series:"Windows XP"
		}
	},
	props:['on','off']//简单接收,不校验数据类型
}
</script>

<style>

</style>