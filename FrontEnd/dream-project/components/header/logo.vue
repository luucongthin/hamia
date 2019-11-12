<template>
    <div class="header-logo">
        <router-link to="/" tag="a">
            <img class="img-logo" src="~/assets/images/icon/logo.svg" alt="lending">
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'header-logo'
}
</script>

<style lang="scss" scoped>
    .header-logo{
        height: 50px;
        .img-logo{
            height: 40px;
        }
    }
</style>