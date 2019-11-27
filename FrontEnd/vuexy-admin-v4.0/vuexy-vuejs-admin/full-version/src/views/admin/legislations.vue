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
                <b>Industry</b>
            </div>
            <div class="vx-col sm:w-4/12 w-full">
                <vs-select class="full-width" label="" v-model="search_categories">
                    <vs-select-item :key="index" :value="item.Code" :text="item.Code + ' - ' + item.Name"
                        v-for="item,index in lst_categories" />
                </vs-select>
            </div>
            <div class="vx-col sm:w-6/12 w-full">
                <div class="button-search">
                    <vs-button color="success" class="mr-3" @click="Import()" :disabled="disabled">Import</vs-button>
                    <vs-button color="danger" class="" @click="OpenFile()">File mẫu</vs-button>
                </div>
            </div>
        </div>
        <div class="vx-row mb-4">
            <div class="vx-col sm:w-2/12 w-full align-center pull-right">
                <b>File Import</b>
            </div>
            <div class="vx-col sm:w-4/12 w-full">
                <vs-input class="w-full" type="file" accept=".xls" v-model="file" v-on:change="ImportFile()" />
            </div>
            <div class="vx-col sm:w-6/12 w-full">
                <div class="button-search">
                    <vs-button color="success" class="mr-3" @click="RunStart()">Search</vs-button>
                    <vs-button color="success" class="" @click="OpenPopupAddLegislation()">Add New</vs-button>
                </div>
            </div>
        </div>
        <div class="vx-row mb-4">
            <div class="vx-col sm:w-2/12 w-full align-center pull-right">
                <b>Start Date</b>
            </div>
            <div class="vx-col sm:w-4/12 w-full">
                <datepicker :language="vi" v-model="search_start_date"></datepicker>
            </div>
        </div>
        <div class="vx-row mb-4">
            <div class="vx-col sm:w-2/12 w-full align-center pull-right">
                <b>End Date</b>
            </div>
            <div class="vx-col sm:w-4/12 w-full">
                <datepicker :language="vi" v-model="search_end_date"></datepicker>
            </div>
        </div>
        <div class="border-search mb-4"></div>
        <div class="">
            <vs-table stripe :data="lst_legislation">
                <template slot="thead">
                    <vs-th>
                        Title
                    </vs-th>
                    <vs-th>
                        Industry
                    </vs-th>
                    <vs-th>
                        Reporter
                    </vs-th>
                    <vs-th>
                        Start Date
                    </vs-th>
                    <vs-th>
                        End Date
                    </vs-th>
                    <vs-th>
                    </vs-th>
                </template>
                <template slot-scope="">
                    <vs-tr :key="index" v-for="(item, index) in lst_legislation">
                        <vs-td>
                            {{ item.Title }}
                        </vs-td>
                        <vs-td>
                            {{ item.CategoryCode }}
                        </vs-td>
                        <vs-td>
                            {{ item.Reporter }}
                        </vs-td>
                        <vs-td>
                            {{ item.StartDate | date }}
                        </vs-td>
                        <vs-td>
                            {{ item.EndDate | date }}
                        </vs-td>
                        <vs-td>
                            <div class="d-flex table_edit">
                                <vs-button color="success" class="" @click="EditLegislation(item)">Edit</vs-button>
                                <vs-button color="danger" class="ml-3" @click="DeleteLegislation(item.ID)">Delete
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
                        <div class="vx-col sm:w-2/12 w-full align-center pull-right">
                            <b>Start Date</b>
                        </div>
                        <div class="vx-col sm:w-4/12 w-full">
                            <datepicker :language="vi" v-model="start_date"></datepicker>
                        </div>
                    </div>
                    <div class="vx-row mb-6">
                        <div class="vx-col sm:w-2/12 w-full align-center pull-right">
                            <b>Title</b>
                        </div>
                        <div class="vx-col sm:w-4/12 w-full">
                            <vs-input class="w-full" v-model="title" />
                        </div>
                        <div class="vx-col sm:w-2/12 w-full align-center pull-right">
                            <b>End Date</b>
                        </div>
                        <div class="vx-col sm:w-4/12 w-full">
                            <datepicker :language="vi" v-model="end_date"></datepicker>
                        </div>
                    </div>
                    <div class="vx-row mb-6">
                        <div class="vx-col sm:w-2/12 w-full align-center pull-right">
                            <b>Implementing Authority</b>
                        </div>
                        <div class="vx-col sm:w-4/12 w-full">
                            <vs-input class="w-full" v-model="implementing_authority" />
                        </div>
                        <div class="vx-col sm:w-2/12 w-full align-center pull-right">
                            <b>Reporter</b>
                        </div>
                        <div class="vx-col sm:w-4/12 w-full">
                            <vs-input class="w-full" v-model="reporter" />
                        </div>
                    </div>
                    <div class="vx-row mb-6">
                        <div class="vx-col sm:w-2/12 w-full align-center pull-right">
                            <b>Agency</b>
                        </div>
                        <div class="vx-col sm:w-4/12 w-full">
                            <vs-input class="w-full" v-model="agency" />
                        </div>
                    </div>
                    <div class="vx-row mb-6">
                        <div class="vx-col sm:w-2/12 w-full align-center pull-right">
                            <b>Description</b>
                        </div>
                        <div class="vx-col sm:w-4/12 w-full">
                            <vs-textarea v-model="description" />
                        </div>
                        <div class="vx-col sm:w-2/12 w-full align-center pull-right">
                            <b>Summary</b>
                        </div>
                        <div class="vx-col sm:w-4/12 w-full">
                            <vs-textarea v-model="summary" />
                        </div>
                    </div>
                    <div class="vx-row">
                        <div class="vx-col sm:w-2/3 w-full ml-auto">
                            <vs-button color="success" class="mr-3 mb-2" @click="AddLegislation()">Save</vs-button>
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
    import Datepicker from 'vuejs-datepicker';
    import { en, vi } from 'vuejs-datepicker/dist/locale'
    import moment from 'moment'

    export default {
        data() {
            return {
                en: en,
                vi: vi,
                lst_categories: [],
                lst_legislation: [],
                popup: false,
                title_popup: 'Locations Detail',
                title: '',
                category_code: '',
                start_date: '',
                end_date: '',
                implementing_authority: '',
                reporter: '',
                agency: '',
                description: '',
                summary: '',
                legislation_id: 0,
                page: 1,
                total: 0,
                search_categories: '',
                search_start_date: 'Tue Nov 05 2019 15:37:00 GMT+0700 (Giờ Đông Dương)',
                search_end_date: '',
                disabled: true,
                file: ''
            }
        },
        components: {
            Datepicker
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
                console.log(vm.search_start_date)
                if (vm.search_start_date) {
                    Object.assign(param.params, { start_date: moment(vm.search_start_date).format('DD.MM.YYYY') })
                }
                if (vm.search_end_date) {
                    Object.assign(param.params, { end_date: moment(vm.search_end_date).format('DD.MM.YYYY') })
                }
                if (vm.search_categories) {
                    Object.assign(param.params, { category_code: vm.search_categories })
                }
                axios.get("http://admin.bobbylct.com/api/legislation", param)
                    .then((response) => {
                        var data = response.data;
                        vm.lst_legislation = data.Data;
                        vm.total = Math.ceil(data.Error.Code / 12);
                    })
                    .catch((error) => { console.log(error) })
            },
            ClosePopup() {
                var vm = this;
                vm.popup = false;
            },
            OpenPopupAddLegislation() {
                var vm = this;
                vm.popup = true;
                vm.legislation_id = 0;
                vm.category_code = '';
                vm.start_date = '';
                vm.end_date = '';
                vm.title = '';
                vm.implementing_authority = '';
                vm.reporter = '';
                vm.agency = '';
                vm.summary = '';
                vm.description = '';
            },
            AddLegislation() {
                var vm = this;
                let params = new URLSearchParams()
                params.append('agency', vm.agency)
                params.append('category_code', vm.category_code)
                params.append('description', vm.description)
                params.append('end_date', moment(vm.end_date).format('DD.MM.YYYY'))
                params.append('implementing_authority', vm.implementing_authority)
                params.append('is_importing_country', 1)
                params.append('reporter', vm.reporter)
                params.append('start_date', moment(vm.start_date).format('DD.MM.YYYY'))
                params.append('summary', vm.summary)
                params.append('title', vm.title)
                var url = '';
                if (vm.legislation_id != "0") {
                    params.append('id', vm.legislation_id)
                    url = 'http://admin.bobbylct.com/api/legislation/update';
                } else {
                    
                    url = 'http://admin.bobbylct.com/api/legislation/create';
                }
                axios.post(url, params)
                    .then((response) => {
                        vm.RunStart();
                        vm.popup = false;
                    })
                    .catch((error) => { console.log(error) })
            },
            DeleteLocations(id) {
                this.legislation_id = id;
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
                axios.post("http://admin.bobbylct.com/api/legislation/delete", null, {
                    params: {
                        id: vm.legislation_id
                    }
                })
                    .then(function (response) {
                        vm.RunStart();
                    })
                    .catch(function (error) {
                        console.log(error)
                    })
            },
            EditLegislation(item) {
                var vm = this;
                vm.popup = true;
                vm.legislation_id = item.ID;
                vm.category_code = item.CategoryCode;
                vm.start_date = new Date(item.StartDate);
                vm.end_date = new Date(item.EndDate);
                vm.title = item.Title;
                vm.implementing_authority = item.ImplementingAuthority;
                vm.reporter = item.Reporter;
                vm.agency = item.Agency;
                vm.summary = item.Summary;
                vm.description = item.Description;
            },
            OpenFile() {
                window.open('http://navisoft.bobbylct.com/i18n/file/Legislation_Meansuers.xls');
            },
            ImportFile(ev) {
               
            }
        }
    }
</script>

<style lang="scss">
    .con-vs-popup .vs-popup {
        width: 80%;
    }
</style>