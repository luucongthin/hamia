<template>
    <div class="container d-flex align-items-center justify-content-center flex-column">
        <img src="~/assets/images/loading.svg" alt="Loading..." width="80px" />
        Logging in...
    </div>
</template>

<script>
export default {
    mounted: function() {
        console.log("init callback");
    }
}
</script>

<style scoped>
.container {
    min-height: 70vh;
}
</style>
