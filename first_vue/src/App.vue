<template>
    <div>
        <Windows></Windows>
        <Linux></Linux>
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
    }
}
</script>
