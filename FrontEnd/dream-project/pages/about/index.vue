<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <nuxt-link to="/" class="btn btn-success" tag="button">
                    <span>Home</span>
                </nuxt-link>

                <button class="btn btn-danger" @click="getData">Load Data</button>
            </div>
        </div>
    </div>
</template>

<script>
//import SampleService from "@@/services/sample.sevices";

export default {
    head: function() {
        return {
            title: this.title,
            meta: [
                { hid: "title", name: "title", content: "About Page" },
                {
                    hid: "description",
                    name: "description",
                    content: "My custom description"
                },
                {
                    hid: "og:image",
                    property: "og:image",
                    content: "~/assets/images/The_Sleek.jpg"
                }
            ]
        };
    },

    methods: {
        async getData() {
            const requestData = {
                method: "get",
                url: "/api/categories",
                data: {
                    title: '',
                    name: '',
                    code: ''
                }
            };

            await this.$axios(requestData)
                .then(res => {
                    console.log("res", res);
                })
                .catch(e => {
                    this.error = true;
                    this.success = false;
                });
        }

    }
};
</script>

<style lang="scss">
</style>