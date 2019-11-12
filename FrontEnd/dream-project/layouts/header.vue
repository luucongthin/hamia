<template>
    <div class="page-header">
        <div class="container">
            <div class="row">
                <div class="col-lg-2 col-md-1 col-2">
                    <header-logo></header-logo>
                </div>
                <div class="col-lg-10 col-md-11 col-10 row-flex">
                    <nav class="navbar">
                        <search-header></search-header>
                        <message-header></message-header>
                        <notification-header></notification-header>
                        <account-header></account-header>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AccountHeader from '@/components/header/account';
import MessageHeader from '@/components/header/message';
import NotificationHeader from '@/components/header/notification';
import SearchHeader from '@/components/header/search';
import HeaderLogo from '@/components/header/logo';

export default {
    name: "page-header",
    components: {
        AccountHeader,
        SearchHeader,
        HeaderLogo,
        MessageHeader,
        NotificationHeader
    },
    data: function () {
        return {
            count: 0
        }
    }
    
}
</script>

<style lang="scss" scoped>
    $mainColor: #2dcbbb;

    .page-header{
        background-color: $mainColor;
        width: 100%;
        height: 50px;
        margin-bottom: 20px;
        position: fixed;
        z-index: 1000;
        top: 0px;
        .navbar{
            height: 50px;
        }
    }
</style>
