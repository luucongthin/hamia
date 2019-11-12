<template>
    <div class="page-search">
        <div class="container">
            <div class="row">
                <div class="col-md-12 small-padding">
                    <search-box></search-box>   
                </div>

                <div class="col-lg-3 col-md-6 col-12 small-padding" v-for="item in items" v-bind:key="item.message" >
                    <div class="box box-test">
                        <p>{{item.message}}</p>
                        <nuxt-link to="/detail" tag="button" class="btn btn-success">Detail</nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SearchBox from '@/components/util/search-box'

export default {
    name: 'page-search',

    components: {
        SearchBox
    },

    data: function () {
        return {
            items: [
                    { message: 'Foo' },
                    { message: 'Bar' },
                    { message: '123' },
                    { message: '23' },
                    { message: '34' }

                ]
        }
    },

    head: function () {
        return {
            title: this.title,
            meta: [
                { hid: 'title', name: 'title', content: 'Search Page' },
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
        background-color: #fff
    }

</style>