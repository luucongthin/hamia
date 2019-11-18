<!-- =========================================================================================
  File Name: DashboardAnalytics.vue
  Description: Dashboard Analytics
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
    <div id="admin-categories">
        <div class="vx-row">
            <div class="vx-col sm:w-1/3">
                <div class="vx-row mb-6">
                <div class="vx-col sm:w-1/3 w-full">
                    <span>Industry Name</span>
                </div>
                <div class="vx-col sm:w-2/3 w-full">
                    <vx-input-group class="">
                    <template slot="prepend">
                        <div class="prepend-text bg-primary">
                        <span>i</span>
                        </div>
                    </template>
                    <vs-input v-model="txt_search" placeholder="Email" />
                    </vx-input-group>
                </div>
                </div>
            </div>
            <div class="vx-col sm:w-2/3">
                <vs-button class="mr-3 mb-2" @click="RunStart()">Search</vs-button>
            </div>
        </div>
        <div class="">
            <vs-table stripe>
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
                        <vs-button class="mr-3 mb-2" @click="OpenPopupAddLocations()">Add</vs-button>
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
                    <vs-button class="mr-3 mb-2" @click="EditLocations(item)">Edit</vs-button>
                    <vs-button class="mr-3 mb-2" @click="DeleteLocations(item.ID)">Delete</vs-button>
                    </vs-td>
                </vs-tr>
                </template>
            </vs-table>
            <vs-popup title="Industry Detail" :active.sync="popup">
                <div title="Horizontal Form" code-toggler>
                    <div class="vx-row mb-3">
                        <div class="vx-col sm:w-2/12 w-full">
                            <span>Mã Tỉnh/Thành phố</span>
                        </div>
                        <div class="vx-col sm:w-4/12 w-full">
                            <vs-input class="w-full" v-model="city_code" />
                        </div>
                        <div class="vx-col sm:w-2/12 w-full">
                            <span>Mã Quận/Huyện</span>
                        </div>
                        <div class="vx-col sm:w-4/12 w-full">
                            <vs-input class="w-full" type="email" v-model="district_code" />
                        </div>
                    </div>
                    <div class="vx-row mb-6">
                        <div class="vx-col sm:w-2/12 w-full">
                            <span>Tỉnh/Thành phố</span>
                        </div>
                        <div class="vx-col sm:w-4/12 w-full">
                            <vs-input class="w-full" v-model="city_name" />
                        </div>
                        <div class="vx-col sm:w-2/12 w-full">
                            <span>Quận/Huyện</span>
                        </div>
                        <div class="vx-col sm:w-4/12 w-full">
                            <vs-input class="w-full" v-model="district_name" />
                        </div>
                    </div>
                    <div class="vx-row mb-6">
                        <div class="vx-col sm:w-2/12 w-full">
                            <span>Mã Xã</span>
                        </div>
                        <div class="vx-col sm:w-4/12 w-full">
                            <vs-input class="w-full" v-model="ward_code" />
                        </div>
                        <div class="vx-col sm:w-2/12 w-full">
                            <span>Population</span>
                        </div>
                        <div class="vx-col sm:w-4/12 w-full">
                            <vs-input class="w-full" v-model="population" />
                        </div>
                    </div>
                    <div class="vx-row mb-6">
                        <div class="vx-col sm:w-2/12 w-full">
                            <span>Xã Phường</span>
                        </div>
                        <div class="vx-col sm:w-4/12 w-full">
                            <vs-input class="w-full" v-model="ward_name" />
                        </div>
                        <div class="vx-col sm:w-2/12 w-full">
                            <span>Area</span>
                        </div>
                        <div class="vx-col sm:w-4/12 w-full">
                            <vs-input class="w-full" v-model="area" />
                        </div>
                    </div>
                    <div class="vx-row">
                        <div class="vx-col sm:w-2/3 w-full ml-auto">
                            <vs-button class="mr-3 mb-2" @click="AddLocations()">Save</vs-button>
                            <vs-button color="warning" type="border" class="mb-2" @click="ClosePopup()">Cancel</vs-button>
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
            page: 1
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
            
            axios.get("http://admin.bobbylct.com/api/ward", param)
            .then((response) => {
                var data = response.data;
                this.lst_locations = data.Data;
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
            if(vm.locations_id != 0) {
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
            axios.post("http://admin.bobbylct.com/api/ward/delete", null, { params: {
                id: vm.locations_id
            }})
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
#dashboard-analytics {
  .greet-user{
    position: relative;
    .decore-left{
      position: absolute;
      left:0;
      top: 0;
    }
    .decore-right{
      position: absolute;
      right:0;
      top: 0;
    }
  }

  @media(max-width: 576px) {
    .decore-left, .decore-right{
      width: 140px;
    }
  }
}
</style>
