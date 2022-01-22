<template>
	<div>
		<h2 @click="sch">OS_Creator: {{creator}} </h2>
		<h2>OS_Series: {{series}} </h2>
	</div>
</template>

<script>
import whereisvc from "../mixin"
export default {
	name:"Linux",
	data(){
		return{
			creator:"Linux Open Source Foundation && Linus Trovalods",
			series:"Red Hat,Ubuntu,CentOS,Debian,ArchLinux"
		}
	},
	mixins:[whereisvc]
}
</script>
