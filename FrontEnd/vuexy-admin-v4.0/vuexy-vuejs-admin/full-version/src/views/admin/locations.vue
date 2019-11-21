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
        <div class="vx-row mb-4">
            <div class="vx-col sm:w-2/12 w-full align-center pull-right">
                <b>File Import</b>
            </div>
            <div class="vx-col sm:w-4/12 w-full">
                <vx-input-group class="">
                    <template slot="prepend">
                        <div class="prepend-text bg-success">
                            <span>i</span>
                        </div>
                    </template>
                    <vs-input v-model="txt_search" placeholder="Email" />
                </vx-input-group>
            </div>
            <div class="vx-col sm:w-6/12 w-full">
                <div class="button-search">
                    <vs-button color="success" class="mr-3" @click="">Import</vs-button>
                    <vs-button color="danger" class="" @click="">File mẫu</vs-button>
                </div>
            </div>
        </div>
        <div class="vx-row mb-4">
            <div class="vx-col sm:w-2/12 w-full align-center pull-right">
                <b>Tỉnh/Thành phố</b>
            </div>
            <div class="vx-col sm:w-4/12 w-full">
                <vs-input class="full-width" v-model="search_city" placeholder="" />
            </div>
            <div class="vx-col sm:w-2/12 w-full align-center pull-right">
                <b>Quận/Huyện</b>
            </div>
            <div class="vx-col sm:w-4/12 w-full">
                <vs-input class="full-width" v-model="search_district" placeholder="" />
            </div>
        </div>
        <div class="vx-row mb-4">
            <div class="vx-col sm:w-2/12 w-full align-center pull-right">
                <b>Xã/Phường</b>
            </div>
            <div class="vx-col sm:w-4/12 w-full">
                <vs-input class="full-width" v-model="search_ward" placeholder="" />
            </div>
            <div class="vx-col sm:w-2/12 w-full align-center">
            </div>
            <div class="vx-col sm:w-4/12 w-full align-center">
                <div class="button-search">
                    <vs-button color="success" class="" @click="RunStart()">Search</vs-button>
                </div>
            </div>
        </div>
        <div class="border-search mb-4"></div>
        <div class="">
            <vs-table stripe :data="lst_locations">
                <template slot="thead">
                    <vs-th>
                        Mã xã
                    </vs-th>
                    <vs-th>
                        Tên Phường/Xã
                    </vs-th>
                    <vs-th>
                        Cấp
                    </vs-th>
                    <vs-th>
                        Mã QH
                    </vs-th>
                    <vs-th>
                        Quận Huyện
                    </vs-th>
                    <vs-th>
                        Mã TP
                    </vs-th>
                    <vs-th>
                        Tỉnh/Thành Phố
                    </vs-th>
                    <vs-th>
                        Dân số
                    </vs-th>
                    <vs-th>
                        Diện tích
                    </vs-th>
                    <vs-th>
                        <div class="table_edit">
                            <vs-button color="success" @click="OpenPopupAddLocations()">Add</vs-button>
                        </div>
                    </vs-th>
                </template>
                <template slot-scope="">
                    <vs-tr :key="index" v-for="(item, index) in lst_locations">
                        <vs-td>
                            {{ item.WardCode }}
                        </vs-td>
                        <vs-td>
                            {{ item.WardName }}
                        </vs-td>
                        <vs-td>
                            {{ item.Type }}
                        </vs-td>
                        <vs-td>
                            {{ item.DistrictCode }}
                        </vs-td>
                        <vs-td>
                            {{ item.DistrictName }}
                        </vs-td>
                        <vs-td>
                            {{ item.CityCode }}
                        </vs-td>
                        <vs-td>
                            {{ item.CityName }}
                        </vs-td>
                        <vs-td>
                            {{ item.Population }}
                        </vs-td>
                        <vs-td>
                            {{ item.Area }}
                        </vs-td>
                        <vs-td>
                            <div class="d-flex table_edit">
                                <vs-button color="success" class="" @click="EditLocations(item)">Edit</vs-button>
                                <vs-button color="danger" class="ml-3" @click="DeleteLocations(item.ID)">Delete
                                </vs-button>
                            </div>
                        </vs-td>
                    </vs-tr>
                </template>
            </vs-table>
            <vs-pagination v-if="total != 0" class="pt-3" color="success" :total="total" v-model="page"
                @change="RunStart()"></vs-pagination>
            <vs-popup title="Locations Detail" :active.sync="popup">
                <div title="Horizontal Form" code-toggler>
                    <div class="vx-row mb-6">
                        <div class="vx-col sm:w-2/12 w-full align-center pull-right">
                            <b>Mã Tỉnh/Thành phố</b>
                        </div>
                        <div class="vx-col sm:w-4/12 w-full">
                            <vs-input class="w-full" v-model="city_code" />
                        </div>
                        <div class="vx-col sm:w-2/12 w-full align-center pull-right">
                            <b>Mã Quận/Huyện</b>
                        </div>
                        <div class="vx-col sm:w-4/12 w-full">
                            <vs-input class="w-full" v-model="district_code" />
                        </div>
                    </div>
                    <div class="vx-row mb-6">
                        <div class="vx-col sm:w-2/12 w-full align-center pull-right">
                            <b>Tỉnh/Thành phố</b>
                        </div>
                        <div class="vx-col sm:w-4/12 w-full">
                            <vs-input class="w-full" v-model="city_name" />
                        </div>
                        <div class="vx-col sm:w-2/12 w-full align-center pull-right">
                            <b>Quận/Huyện</b>
                        </div>
                        <div class="vx-col sm:w-4/12 w-full">
                            <vs-input class="w-full" v-model="district_name" />
                        </div>
                    </div>
                    <div class="vx-row mb-6">
                        <div class="vx-col sm:w-2/12 w-full align-center pull-right">
                            <b>Mã Xã</b>
                        </div>
                        <div class="vx-col sm:w-4/12 w-full">
                            <vs-input class="w-full" v-model="ward_code" />
                        </div>
                        <div class="vx-col sm:w-2/12 w-full align-center pull-right">
                            <b>Population</b>
                        </div>
                        <div class="vx-col sm:w-4/12 w-full">
                            <vs-input class="w-full" v-model="population" />
                        </div>
                    </div>
                    <div class="vx-row mb-6">
                        <div class="vx-col sm:w-2/12 w-full align-center pull-right">
                            <b>Xã Phường</b>
                        </div>
                        <div class="vx-col sm:w-4/12 w-full">
                            <vs-input class="w-full" v-model="ward_name" />
                        </div>
                        <div class="vx-col sm:w-2/12 w-full align-center pull-right">
                            <b>Area</b>
                        </div>
                        <div class="vx-col sm:w-4/12 w-full">
                            <vs-input class="w-full" v-model="area" />
                        </div>
                    </div>
                    <div class="vx-row">
                        <div class="vx-col sm:w-2/3 w-full ml-auto">
                            <vs-button color="success" class="mr-3 mb-2" @click="AddLocations()">Save</vs-button>
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
                lst_locations: [],
                popup: false,
                title_popup: 'Locations Detail',
                city_code: '',
                district_code: '',
                city_name: '',
                district_name: '',
                ward_code: '',
                population: '',
                ward_name: '',
                area: '',
                locations_id: 0,
                page: 1,
                total: 0,
                search_city: '',
                search_district: '',
                search_ward: ''
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
                param = {
                    params: {
                        page: vm.page
                    }
                }
                if (vm.search_city) {
                    Object.assign(param.params, { city_name: vm.search_city })
                }
                if (vm.search_district) {
                    Object.assign(param.params, { district_name: vm.search_district })
                }
                if (vm.search_ward) {
                    Object.assign(param.params, { ward_name: vm.search_ward })
                }
                axios.get("http://admin.bobbylct.com/api/ward", param)
                    .then((response) => {
                        var data = response.data;
                        vm.lst_locations = data.Data;
                        vm.total = Math.ceil(data.Error.Code / 12);
                    })
                    .catch((error) => { console.log(error) })
            },
            ClosePopup() {
                var vm = this;
                vm.popup = false;
            },
            OpenPopupAddLocations() {
                var vm = this;
                vm.popup = true;
                vm.locations_id = 0;
                vm.area = '';
                vm.city_code = '';
                vm.city_name = '';
                vm.district_code = '';
                vm.district_name = '';
                vm.population = '';
                vm.type = '';
                vm.ward_code = '';
                vm.ward_name = '';
            },
            AddLocations() {
                var vm = this;
                let params = new URLSearchParams()
                params.append('city_code', vm.city_code)
                params.append('city_name', vm.city_name)
                params.append('district_code', vm.district_code)
                params.append('district_name', vm.district_name)
                params.append('population', vm.population)
                params.append('type', vm.type)
                params.append('ward_code', vm.ward_code)
                params.append('ward_name', vm.ward_name)
                params.append('area', vm.area)
                params.append('id', vm.locations_id)
                var url = '';
                if (vm.locations_id != 0) {
                    url = 'http://admin.bobbylct.com/api/ward/update';
                } else {
                    url = 'http://admin.bobbylct.com/api/ward/create';
                }
                axios.post(url, params)
                    .then((response) => {
                        vm.RunStart();
                        vm.popup = false;
                    })
                    .catch((error) => { console.log(error) })
            },
            DeleteLocations(id) {
                this.locations_id = id;
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
                axios.post("http://admin.bobbylct.com/api/ward/delete", null, {
                    params: {
                        id: vm.locations_id
                    }
                })
                    .then(function (response) {
                        vm.RunStart();
                    })
                    .catch(function (error) {
                        console.log(error)
                    })
            },
            EditLocations(item) {
                var vm = this;
                vm.popup = true;
                vm.area = item.Area;
                vm.city_code = item.CityCode;
                vm.city_name = item.CityName;
                vm.district_code = item.DistrictCode;
                vm.district_name = item.DistrictName;
                vm.population = item.Population;
                vm.type = item.Type;
                vm.ward_code = item.WardCode;
                vm.ward_name = item.WardName;
                vm.locations_id = item.ID;
            }
        }
    }
</script>

<style lang="scss">
    .con-vs-popup .vs-popup {
        width: 80%;
    }
</style>