<template>
    <div class="col-md-12 small-padding">
        <client-only>
            <carousel
                :items="1"
                :nav="false"
                :autoplay="false"
                :dots="true"
                class="box home-slider"
            >
                <img src="https://assets.bobbylct.com/images/category/bike.jpg" alt="bike"/>

                <img src="https://assets.bobbylct.com/images/category/camera.jpg" alt="camera"/>

                <img src="https://assets.bobbylct.com/images/category/household.jpg" alt="gia dình"/>

                <img src="https://assets.bobbylct.com/images/category/house.jpg" alt="nhà"/>
            </carousel>
        </client-only>
    </div>
</template>

<script>
export default {
    name: "slide",
    data: function() {
        return {
            option: {
                items: 1
            }
        };
    }
};
</script>

<style lang="scss" scoped>
.home-slider {
    max-height: 300px;
    overflow: hidden;
    padding: 0;
    .owl-carousel {
        max-height: inherit;
        .owl-stage-outer {
            max-height: inherit;
            .owl-stage {
                max-height: inherit;
                .owl-item {
                    height: 100%;
                    img {
                        height: 300px;
                        object-fit: cover;
                    }
                }
            }
        }
    }
}
</style>