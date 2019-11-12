<template>
    <div>
        <page-header/>
        <nuxt class="page-content"/>
        <page-footer/>
    </div>
</template>

<script>
import PageHeader from '@/layouts/header';
import PageFooter from '@/layouts/footer';

export default {
    components:{
        PageHeader,
        PageFooter
    }
}
</script>

<style scoped>
.page-content{
    margin-top: calc(50px + 15px);
}
</style>