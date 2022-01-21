<template>
	<div>
		<h2>OS_Creator: {{creator}} </h2>
		<h2>OS_Series: {{series}} </h2>
	</div>
</template>

<script>
export default {
	name:"Linux",
	data(){
		return{
			creator:"Linux Open Source Foundation && Linus Trovalods",
			series:"Red Hat,Ubuntu,CentOS,Debian,ArchLinux"
		}
	}
}
</script>
