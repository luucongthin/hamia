<!-- =========================================================================================
  File Name: DashboardAnalytics.vue
  Description: Dashboard Analytics
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
    <div id="admin-categories" class="admin-class">
        <div class="vx-row mb-6">
            <div class="vx-col sm:w-2/12 w-full align-center pull-right">
                <span>Industry Name</span>
            </div>
            <div class="vx-col sm:w-4/12 w-full">
                <vx-input-group class="">
                    <template slot="prepend">
                        <div class="prepend-text bg-success">
                            <span>i</span>
                        </div>
                    </template>
                    <vs-input v-model="txt_search" placeholder="" />
                </vx-input-group>
            </div>
            <div class="vx-col sm:w-6/12">
                <vs-button color="success" @click="RunStart()">Search</vs-button>
            </div>
        </div>
        <div class="">
            <vs-table stripe :data="lst_categories">
                <template slot="thead">
                    <vs-th>
                        Code
                    </vs-th>
                    <vs-th>
                        Industry Name
                    </vs-th>
                    <vs-th>
                        Title
                    </vs-th>
                    <vs-th class="table_edit">
                        <vs-button color="success" @click="OpenPopupAddCategories()">Add</vs-button>
                    </vs-th>
                </template>
                <template slot-scope="">
                    <vs-tr :key="index" v-for="(item, index) in lst_categories">
                        <vs-td>
                            {{ item.Code }}
                        </vs-td>

                        <vs-td>
                            {{ item.Name }}
                        </vs-td>

                        <vs-td>
                            {{ item.Title }}
                        </vs-td>

                        <vs-td>
                            <div class="d-flex table_edit">
                                <vs-button color="success" @click="EditCategories(item)">Edit</vs-button>
                                <vs-button color="danger" class="ml-3" @click="DeleteCategories(item.ID, item.Code)">Delete</vs-button>
                            </div>
                        </vs-td>
                    </vs-tr>
                </template>
            </vs-table>
            <vs-popup title="Industry Detail" :active.sync="popup">
                <div title="Horizontal Form" code-toggler>
                    <div class="vx-row mb-3">
                        <div class="vx-col sm:w-2/12 w-full">
                            <span>Code</span>
                        </div>
                        <div class="vx-col sm:w-4/12 w-full">
                            <vs-input class="w-full" v-model="categories_code" />
                        </div>
                        <div class="vx-col sm:w-2/12 w-full">
                            <span>Name</span>
                        </div>
                        <div class="vx-col sm:w-4/12 w-full">
                            <vs-input class="w-full" type="email" v-model="categories_name" />
                        </div>
                    </div>
                    <div class="vx-row mb-6">
                        <div class="vx-col sm:w-2/12 w-full">
                            <span>Title</span>
                        </div>
                        <div class="vx-col sm:w-10/12 w-full">
                            <vs-input class="w-full" v-model="categories_title" />
                        </div>
                    </div>
                    <div class="vx-row">
                        <div class="vx-col sm:w-2/3 w-full ml-auto">
                            <vs-button class="mr-3 mb-2" @click="AddCategories()">Save</vs-button>
                            <vs-button color="warning" type="border" class="mb-2" @click="ClosePopup()">Cancel
                            </vs-button>
                        </div>
                    </div>
                </div>
            </vs-popup>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                txt_search: '',
                lst_categories: [],
                popup: false,
                title_popup: 'Industry Detail',
                categories_code: '',
                categories_name: '',
                categories_title: '',
                categories_id: 0
            }
        },
        components: {
        },
        created() {
            this.RunStart();
        },
        methods: {
            RunStart() {
                var vm = this;
                var param = {};
                if (vm.txt_search != '') {
                    param = {
                        params: {
                            name: vm.txt_search
                        }
                    }
                }

                axios.get("http://admin.bobbylct.com/api/categories", param)
                    .then((response) => {
                        var data = response.data;
                        this.lst_categories = data.Data;
                    })
                    .catch((error) => { console.log(error) })
            },
            ClosePopup() {
                var vm = this;
                vm.popup = false;
            },
            OpenPopupAddCategories() {
                var vm = this;
                vm.popup = true;
                vm.categories_id = 0;
                vm.categories_name = '';
                vm.categories_code = '';
                vm.categories_title = '';
            },
            AddCategories() {
                var vm = this;
                let params = new URLSearchParams()
                params.append('id', vm.categories_id)
                params.append('code', vm.categories_code)
                params.append('title', vm.categories_title)
                params.append('name', vm.categories_name)
                var url = '';
                if (vm.categories_id != 0) {
                    url = 'http://admin.bobbylct.com/api/categories/update';
                } else {
                    url = 'http://admin.bobbylct.com/api/categories/create';
                }
                axios.post(url, params)
                    .then((response) => {
                        vm.RunStart();
                        vm.popup = false;
                    })
                    .catch((error) => { console.log(error) })
            },
            DeleteCategories(id, code) {
                this.categories_id = id;
                this.categories_code = code;
                this.$vs.dialog({
                    type: 'confirm',
                    color: 'danger',
                    title: 'Confirm',
                    text: 'Bạn có muốn xóa không?',
                    acceptText: 'Delete',
                    cancelText: 'Cancel',
                    accept: this.Delete
                })
            },
            Delete() {
                var vm = this;
                axios.post("http://admin.bobbylct.com/api/categories/delete", null, {
                    params: {
                        id: vm.categories_id,
                        category_code: vm.categories_code
                    }
                })
                    .then(function (response) {
                        vm.RunStart();
                    })
                    .catch(function (error) {
                        console.log(error)
                    })
            },
            EditCategories(item) {
                var vm = this;
                vm.popup = true;
                vm.categories_name = item.Name;
                vm.categories_code = item.Code;
                vm.categories_title = item.Title;
                vm.categories_id = item.ID;
            }
        }
    }
</script>

<style lang="scss">
</style>