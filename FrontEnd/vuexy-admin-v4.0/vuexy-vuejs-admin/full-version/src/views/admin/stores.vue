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
                <b>Industry</b>
            </div>
            <div class="vx-col sm:w-4/12 w-full">
                <vs-select
                class="full-width"
                label=""
                v-model="search_categories"
                >
                    <vs-select-item :key="index" :value="item.Code" :text="item.Code + ' - ' + item.Name" v-for="item,index in lst_categories" />
                </vs-select>
            </div>
            <div class="vx-col sm:w-6/12 w-full">
                <div>
                    <vs-button color="success" class="mr-3" @click="">Import</vs-button>
                    <vs-button color="danger" class="" @click="">File mẫu</vs-button>
                </div>
            </div>
        </div>
        <div class="vx-row mb-6">
            <div class="vx-col sm:w-2/12 w-full align-center pull-right">
                <b>File Import</b>
            </div>
            <div class="vx-col sm:w-4/12 w-full">
                <vs-input class="full-width" v-model="search_city" placeholder="" />
            </div>
            <div class="vx-col sm:w-6/12 w-full align-center">
                <div>
                    <vs-button color="success" class="mr-3"  @click="RunStart()">Search</vs-button>
                    <vs-button color="success" class="" @click="OpenPopupAddStores()">Add</vs-button>
                </div>
            </div>
        </div>
        <div class="vx-row mb-6">
            <div class="vx-col sm:w-2/12 w-full align-center pull-right">
                <b>Tên cơ sở</b>
            </div>
            <div class="vx-col sm:w-4/12 w-full">
                <vs-input class="full-width" v-model="search_name" placeholder="" />
            </div>
        </div>
        <div class="vx-row mb-6">
            <div class="vx-col sm:w-2/12 w-full align-center pull-right">
                <b>Địa chỉ</b>
            </div>
            <div class="vx-col sm:w-4/12 w-full">
                <vs-input class="full-width" v-model="search_adress" placeholder="" />
            </div>
        </div>
        <div class="">
            <vs-table stripe :data="lst_stores">
                <template slot="thead">
                    <vs-th>
                        Mã
                    </vs-th>
                    <vs-th>
                        Tên cơ sở
                    </vs-th>
                    <vs-th>
                        Hình thức
                    </vs-th>
                    <vs-th>
                        Thông tin
                    </vs-th>
                    <vs-th>
                        Địa chỉ
                    </vs-th>
                    <vs-th>
                        Mã Phường/Xã
                    </vs-th>
                    <vs-th>
                        Mã Cat
                    </vs-th>
                    <vs-th>
                        Ghi chú
                    </vs-th>
                    <vs-th>
                    </vs-th>
                </template>
                <template slot-scope="">
                    <vs-tr :key="index" v-for="(item, index) in lst_stores">
                        <vs-td>
                            {{ item.Code }}
                        </vs-td>
                        <vs-td>
                            {{ item.Name }}
                        </vs-td>
                        <vs-td>
                            {{ item.Type }}
                        </vs-td>
                        <vs-td>
                            {{ item.Information }}
                        </vs-td>
                        <vs-td>
                            {{ item.Adress }}
                        </vs-td>
                        <vs-td>
                            {{ item.WardCode }}
                        </vs-td>
                        <vs-td>
                            {{ item.CategoryCode }}
                        </vs-td>
                        <vs-td>
                            {{ item.Note }}
                        </vs-td>
                        <vs-td >
                            <div class="d-flex table_edit">
                                <vs-button color="success" class="" @click="EditStores(item)">Edit</vs-button>
                                <vs-button color="danger" class="ml-3" @click="DeleteStores(item.ID)">Delete</vs-button>
                            </div>
                        </vs-td>
                    </vs-tr>
                </template>
            </vs-table>
            <vs-pagination v-if="total != 0" class="pt-3" color="success" :total="total" v-model="page" @change="RunStart()"></vs-pagination>
            <vs-popup title="Stores Detail" :active.sync="popup">
                <div title="Horizontal Form" code-toggler>
                    <div class="vx-row mb-6">
                        <div class="vx-col sm:w-2/12 w-full align-center pull-right">
                            <b>Mã</b>
                        </div>
                        <div class="vx-col sm:w-4/12 w-full">
                            <vs-input class="w-full" v-model="code" />
                        </div>
                        <div class="vx-col sm:w-2/12 w-full align-center pull-right">
                            <b>Mã Xã</b>
                        </div>
                        <div class="vx-col sm:w-4/12 w-full">
                            <vs-input class="w-full" type="email" v-model="ward_code" />
                        </div>
                    </div>
                    <div class="vx-row mb-6">
                        <div class="vx-col sm:w-2/12 w-full align-center pull-right">
                            <b>Tên cơ sở</b>
                        </div>
                        <div class="vx-col sm:w-4/12 w-full">
                            <vs-input class="w-full" v-model="name" />
                        </div>
                        <div class="vx-col sm:w-2/12 w-full align-center pull-right">
                            <b>Category</b>
                        </div>
                        <div class="vx-col sm:w-4/12 w-full">
                            <vs-select
                            class="full-width"
                            label=""
                            v-model="category_code"
                            >
                                <vs-select-item :key="index" :value="item.Code" :text="item.Code + ' - ' + item.Name" v-for="item,index in lst_categories" />
                            </vs-select>
                        </div>
                    </div>
                    <div class="vx-row mb-6">
                        <div class="vx-col sm:w-2/12 w-full align-center pull-right">
                            <b>Địa chỉ</b>
                        </div>
                        <div class="vx-col sm:w-4/12 w-full">
                            <vs-input class="w-full" v-model="adress" />
                        </div>
                        <div class="vx-col sm:w-2/12 w-full align-center pull-right">
                            <b>Type</b>
                        </div>
                        <div class="vx-col sm:w-4/12 w-full">
                            <vs-input class="w-full" v-model="type" />
                        </div>
                    </div>
                    <div class="vx-row mb-6">
                        <div class="vx-col sm:w-6/12">
                            <div class="vx-row">
                                <div class="vx-col sm:w-4/12 w-full align-center pull-right">
                                    <b>Thông tin</b>
                                </div>
                                <div class="vx-col sm:w-8/12 w-full">
                                    <vs-input class="w-full" v-model="information" />
                                </div>
                            </div>
                        </div>
                        <div class="vx-col sm:w-2/12 w-full align-center pull-right">
                            <b>Note</b>
                        </div>
                        <div class="vx-col sm:w-4/12 w-full">
                            <vs-textarea v-model="note" />
                        </div>
                    </div>
                    <div class="vx-row">
                        <div class="vx-col sm:w-2/3 w-full ml-auto">
                            <vs-button color="success" class="mr-3 mb-2" @click="AddStores()">Save</vs-button>
                            <vs-button color="success" class="mb-2" @click="ClosePopup()">Cancel</vs-button>
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
            lst_stores: [],
            lst_categories: [],
            popup: false,
            code: '',
            name: '',
            category_code: '',
            adress: '',
            ward_code: '',
            type: '',
            information: '',
            note: '',
            latitude: '',
            longitude: '',
            stores_id: "0",
            page: 1,
            total: 0,
            search_name: '',
            search_adress: '',
            search_category_code: '',
            search_categories: ''
        }
    },
    components: {
    },
    created() {
      this.RunStart();
      this.RunCategories();
    },
    methods: {
        RunCategories() {
            axios.get("http://admin.bobbylct.com/api/categories")
            .then((response) => {
                var data = response.data;
                this.lst_categories = data.Data;
            })
            .catch((error) => { console.log(error) })
        },
        RunStart() {
            var vm = this;
            var param = {};
            param = {
                params: {
                    page: vm.page
                }
            }
            if (vm.search_category_code) {
                Object.assign(param.params, { category_code: vm.search_category_code })
            } 
            if (vm.search_name) {
                Object.assign(param.params, { name: vm.search_name })
            }
            if (vm.search_adress) {
                Object.assign(param.params, { address: vm.search_adress })
            }
            if (vm.search_categories) {
                Object.assign(param.params, { category_code: vm.search_categories })
            }
            axios.get("http://admin.bobbylct.com/api/store", param)
            .then((response) => {
                var data = response.data;
                vm.lst_stores = data.Data;
                vm.total = Math.ceil(data.Error.Code / 12);
            })
            .catch((error) => { console.log(error) })
        },
        ClosePopup() {
            var vm = this;
            vm.popup = false;
        },
        OpenPopupAddStores() {
            var vm = this;
            vm.popup = true;
            vm.stores_id = '0';
            vm.code = '';
            vm.category_code = '';
            vm.information = '';
            vm.name = '';
            vm.note = '';
            vm.type = '';
            vm.ward_code = '';
            vm.adress = '';
            vm.stores_id = '';
            vm.latitude = '';
            vm.longitude = '';
        },
        AddStores() {
            var vm = this;
            var param = {
                code: vm.code,
                name: vm.name,
                adress: vm.adress,
                information: vm.information,
                ward_code: vm.ward_code,
                type: vm.type,
                category_code: vm.category_code,
                note: vm.note,
                latitude: vm.latitude,
                longitude: vm.longitude
            };
            var url = '';
            if(vm.stores_id != "0") {
                Object.assign(param, { id: vm.stores_id });
                url = 'http://admin.bobbylct.com/api/store/update';
            } else {
                url = 'http://admin.bobbylct.com/api/store/create';
            }
            axios.post(url, param)
            .then((response) => {
                vm.RunStart();
                vm.popup = false;
            })
            .catch((error) => { console.log(error) })
        },
        DeleteStores(id) {
            this.stores_id = id;
            this.$vs.dialog({
                type:'confirm',
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
            axios.post("http://admin.bobbylct.com/api/store/delete", null, { params: {
                id: vm.stores_id
            }})
            .then(function (response) {
                vm.RunStart();
            })
            .catch(function (error) {
                console.log(error)
            })
        },
        EditStores(item) {
            var vm = this;
            vm.popup = true;
            vm.code = item.Code;
            vm.category_code = item.CategoryCode;
            vm.information = item.Information;
            vm.name = item.Name;
            vm.note = item.Note;
            vm.type = item.Type;
            vm.ward_code = item.WardCode;
            vm.adress = item.Adress;
            vm.stores_id = item.ID;
            vm.latitude = item.Latitude;
            vm.longitude = item.Longitude;
        }
    }
}
</script>

<style lang="scss">
    .con-vs-popup .vs-popup {
        width: 70%;
    }
</style>
