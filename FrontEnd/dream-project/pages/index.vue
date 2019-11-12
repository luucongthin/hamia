<template>
    <div>
        <!-- BEGIN - Category list -->
        <div class="container">
            <div class="row">
                <!-- <div class="col-md-12">
                    <nuxt-link to="/about" class="btn btn-success" tag="button">
                        <span>About</span>
                    </nuxt-link>
                </div> -->
                
                <slide></slide>
            </div>
        </div>

        <category></category>
        <!-- END - Category list -->

        <!-- BEGIN - About this app -->
        <div class="home-content">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 get-app">
                        <p class="title">Lend and borrow on the go</p>

                        <p>List, lend and borrow items at the tap of a button. The Fat Llama app is the easiest way to manage your rentals and get instant updates. Download now on Android and iOS.</p>

                        <ul>
                            <li>
                                <img
                                    src="~/assets/images/icon/get-app-appstore.png"
                                    alt="app-store"
                                />
                            </li>
                            <li>
                                <img
                                    src="~/assets/images/icon/get-app-playstore.png"
                                    alt="play-store"
                                />
                            </li>
                        </ul>
                    </div>

                    <div class="col-md-5 offset-md-1">
                        <img
                            class="img-app-preview"
                            src="~/assets/images/app-preview.png"
                            alt="app-preview"
                        />
                    </div>
                </div>
            </div>
        </div>
        <!-- END - About this app -->
    </div>
</template>

<script>
import Category from "@/components/home/category";
import Slide from "@/components/home/slide";

export default {
    components: {
        Category,
        Slide
    },

    data: function() {
        return {
        };
    },

    head: function() {
        return {
            title: this.title,
            meta: [
                { hid: "title", name: "title", content: "Home Page" },
                {
                    hid: "description",
                    name: "Description",
                    content: "My custom description"
                },
                {
                    hid: "og:image",
                    property: "og:image",
                    content: "~/assets/images/noimage.jpg"
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
$mainColor: #2dcbbb;

.home-content {
    height: initial;
    background-color: $mainColor;
    color: #fff;
    padding: 50px 15px;
    width: 100%;
    margin-top: 15px;
    .img-app-preview {
        width: 100%;
        margin-top: 20px;
    }
    .get-app {
        display: flex;
        flex-direction: column;
        justify-content: center;
        .title {
            margin: 0 0 30px 0;
            font-size: 3em;
            font-weight: 800;
        }
        ul {
            margin-top: 40px;
            li {
                float: left;
                margin: 15px 20px 0 0;
                img {
                    width: 150px;
                }
            }
        }
    }
}
</style>
