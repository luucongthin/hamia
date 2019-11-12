<template>
    <div class="page-detail">
        <div class="container">
            <div class="row">
                <bread-crumb></bread-crumb>
                <div class="col-lg-9 col-md-9 col-12 small-padding">
                    <div class=" box box-test">
                        <p>okina</p>
                        
                    </div>
                </div>
                <div class="col-lg-3 col-md-3 col-12 small-padding">
                    <div class=" box box-test">
                        <p>okina</p>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BreadCrumb from '@/components/util/bread-crumb';

export default {
    name: 'page-detail',

    components: {
        BreadCrumb
    },

    data: function () {
        return {
            
        }
    },

    head: function () {
        return {
            title: this.title,
            meta: [
                { hid: 'title', name: 'title', content: 'detail Page' },
                { hid: 'description', name: 'description', content: 'My custom description' },
                { hid: 'og:image', property: 'og:image', content: "~/assets/images/The_Sleek.jpg" }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
$mainColor: #2dcbbb;

    .box-test{
        height: 240px;
        margin: 15px 0 0 0;
        padding: 0 8px;
        background-color: #fff
    }
</style>