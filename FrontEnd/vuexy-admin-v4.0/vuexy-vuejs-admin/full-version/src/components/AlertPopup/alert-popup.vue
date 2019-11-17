<!-- =========================================================================================
    File Name: VxList.vue
    Description: list Component
    Component Name: VxList
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template functional>
    <vs-popup :title="title" :active.sync="popup">
        <div title="Horizontal Form" code-toggler>
          <div class="vx-row">
            <div class="vx-col sm:w-2/3 w-full ml-auto">
              <vs-button class="mr-3 mb-2" @click="AddCategories()">Delete</vs-button>
              <vs-button color="warning" type="border" class="mb-2" @click="ClosePopup()">Cancel</vs-button>
            </div>
          </div>
        </div>
    </vs-popup>
</template>

<script>
export default {
    name: "alert-popup",
    props: {
        list: {
            type: Array,
            required: true,
        },
        icon: {
            type: String,
            default: "ChevronsRightIcon",
        },
        title: {
            type: String,
            default: "",
        }
    },
}
</script>

<style lang="scss">
@import "@/assets/scss/vuexy/components/vxList.scss";
</style>
