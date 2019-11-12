<template>
    <div class="container">
        <div class="row">
            <div
                v-for="item in items"
                v-bind:key="item.title"
                v-bind:class="'col-lg-' + item.class +' col-md-6 col-12 small-padding'"
            >
                <nuxt-link to="/search">
                    <div class="box box-test">
                        <img class="cate_img" :src="item.imgUrl" :alt="item.title" />
                        <div class="title-box">
                            <span>{{item.title}}</span>
                        </div>
                    </div>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "category",

    data: function() {
        return {
            items: [
                {
                    title: "Xe",
                    imgUrl:
                        "https://assets.bobbylct.com/images/category/bike.jpg",
                    class: "6"
                },
                {
                    title: "Máy ảnh",
                    imgUrl:
                        "https://assets.bobbylct.com/images/category/camera.jpg",
                    class: "6"
                },
                {
                    title: "Trang phục",
                    imgUrl:
                        "https://assets.bobbylct.com/images/category/clothes.jpg",
                    class: "4"
                },
                {
                    title: "Đồ dùng cá nhân ",
                    imgUrl:
                        "https://assets.bobbylct.com/images/category/bike.jpg",
                    class: "4"
                },
                {
                    title: "Thiết bị âm thanh",
                    imgUrl:
                        "https://assets.bobbylct.com/images/category/music.jpeg",
                    class: "4"
                },
                {
                    title: "Đồ dùng gia đình",
                    imgUrl:
                        "https://assets.bobbylct.com/images/category/household.jpg",
                    class: "3"
                },
                {
                    title: "Thiết bị văn phòng",
                    imgUrl:
                        "https://assets.bobbylct.com/images/category/office.jpeg",
                    class: "3"
                },
                {
                    title: "Đồ điện tử",
                    imgUrl:
                        "https://assets.bobbylct.com/images/category/electronic.jpeg",
                    class: "3"
                },
                {
                    title: "Nhà",
                    imgUrl:
                        "https://assets.bobbylct.com/images/category/house.jpg",
                    class: "3"
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
.box-test {
    height: 240px;
    padding: 0;
    margin: 15px 0 0 0;
    background-color: #fff;
    overflow: hidden;
    .cate_img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        transition: all 0.3s;
    }
    .title-box {
        position: absolute;
        top: 1.5em;
        left: 1.5em;
        background-color: #fff;
        padding: 5px 10px;
        min-width: 50px;
        border-radius: 3px;
    }
}
a {
    &:hover {
        color: #000;
        .cate_img {
            transform: scale(1.1, 1.1);
        }
    }
}
</style>