<template>
	<div class="outbox">
		<byhead></byhead>
		<!-- <byfooter></byfooter> -->
	</div>
</template>

<script>
import byhead from "./components/byhead"
// import byfooter from "components/footer"

export default {
  name: 'App',
  components: {
    byhead,
		// byfooter,
  }
}
</script>

<style>
	* {
		padding: 0;
		margin: 0;
	}
	Body {
		min-width: 360px;
		background-color: #444;
	}
</style>
