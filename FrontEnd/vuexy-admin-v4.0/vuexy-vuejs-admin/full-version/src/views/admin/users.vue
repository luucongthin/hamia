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
                <b>Users Name</b>
            </div>
            <div class="vx-col sm:w-3/12 w-full">
                <vx-input-group class="">
                    <template slot="prepend">
                        <div class="prepend-text bg-success">
                        <span>i</span>
                        </div>
                    </template>
                    <vs-input v-model="search_usersname" placeholder="" />
                </vx-input-group>
            </div>
            <div class="vx-col sm:w-1/12 w-full align-center pull-right">
                <b>Email</b>
            </div>
            <div class="vx-col sm:w-3/12 w-full">
                <vx-input-group class="">
                    <template slot="prepend">
                        <div class="prepend-text bg-success">
                        <span>i</span>
                        </div>
                    </template>
                    <vs-input v-model="search_email" placeholder="" />
                </vx-input-group>
            </div>
            <div class="vx-col sm:w-3/12 w-full align-center">
                <div class="button-search">
                    <vs-button color="success" class="mr-3" @click="RunStart()">Search</vs-button>
                    <vs-button color="success" class="" @click="OpenPopupAddUsers()">Add Users</vs-button>
                </div>
            </div>
        </div>
        <div class="border-search mb-4"></div>
        <div class="">
            <vs-table stripe :data="lst_users">
                <template slot="thead">
                    <vs-th>
                        ID
                    </vs-th>
                    <vs-th>
                        Users Name
                    </vs-th>
                    <vs-th>
                        Email
                    </vs-th>
                    <vs-th>
                        Role
                    </vs-th>
                    <vs-th>
                    </vs-th>
                </template>
                <template slot-scope="">
                    <vs-tr :key="index" v-for="(item, index) in lst_users">
                        <vs-td>
                            {{ item.ID }}
                        </vs-td>
                        <vs-td>
                            {{ item.UserName }}
                        </vs-td>
                        <vs-td>
                            {{ item.Email }}
                        </vs-td>
                        <vs-td>
                            {{ item.Role }}
                        </vs-td>
                        <vs-td >
                            <div class="d-flex table_edit">
                                <vs-button color="success" class="" @click="EditUsers(item)">View</vs-button>
                            </div>
                        </vs-td>
                    </vs-tr>
                </template>
            </vs-table>
            <vs-pagination v-if="total != 0" class="pt-3" color="success" :total="total" v-model="page" @change="RunStart()"></vs-pagination>
            <vs-popup title="Users Detail" :active.sync="popup">
                <div title="Horizontal Form" code-toggler>
                    <div class="vx-row mb-6">
                        <div class="vx-col sm:w-2/12 w-full align-center pull-right">
                            <b>User name</b>
                        </div>
                        <div class="vx-col sm:w-4/12 w-full">
                            <vx-input-group class="">
                                <template slot="prepend">
                                    <div class="prepend-text bg-success">
                                    <span>i</span>
                                    </div>
                                </template>
                                <vs-input v-model="user_name" placeholder="" />
                            </vx-input-group>
                        </div>
                        <div class="vx-col sm:w-2/12 w-full align-center pull-right">
                            <b>Email</b>
                        </div>
                        <div class="vx-col sm:w-4/12 w-full">
                            <vx-input-group class="">
                                <template slot="prepend">
                                    <div class="prepend-text bg-success">
                                    <span>i</span>
                                    </div>
                                </template>
                                <vs-input v-model="email" type="email" placeholder="" />
                            </vx-input-group>
                        </div>
                    </div>
                    <div class="vx-row mb-6">
                        <div class="vx-col sm:w-2/12 w-full align-center pull-right">
                            <b>First Name</b>
                        </div>
                        <div class="vx-col sm:w-4/12 w-full">
                            <vx-input-group class="">
                                <template slot="prepend">
                                    <div class="prepend-text bg-success">
                                    <span>i</span>
                                    </div>
                                </template>
                                <vs-input v-model="first_name" placeholder="" />
                            </vx-input-group>
                        </div>
                        <div class="vx-col sm:w-2/12 w-full align-center pull-right">
                            <b>New passwword</b>
                        </div>
                        <div class="vx-col sm:w-4/12 w-full">
                            <vx-input-group class="">
                                <template slot="prepend">
                                    <div class="prepend-text bg-success">
                                    <span>i</span>
                                    </div>
                                </template>
                                <vs-input v-model="new_password" type="password" placeholder="" />
                            </vx-input-group>
                        </div>
                    </div>
                    <div class="vx-row mb-6">
                        <div class="vx-col sm:w-2/12 w-full align-center pull-right">
                            <b>Last Name</b>
                        </div>
                        <div class="vx-col sm:w-4/12 w-full">
                            <vx-input-group class="">
                                <template slot="prepend">
                                    <div class="prepend-text bg-success">
                                    <span>i</span>
                                    </div>
                                </template>
                                <vs-input v-model="last_name" placeholder="" />
                            </vx-input-group>
                        </div>
                        <div class="vx-col sm:w-2/12 w-full align-center pull-right">
                            <b>Verify Password</b>
                        </div>
                        <div class="vx-col sm:w-4/12 w-full">
                            <vx-input-group class="">
                                <template slot="prepend">
                                    <div class="prepend-text bg-success">
                                    <span>i</span>
                                    </div>
                                </template>
                                <vs-input v-model="verify_password" type="password" placeholder="" />
                            </vx-input-group>
                        </div>
                    </div>
                    <div class="vx-row mb-6">
                        <div class="vx-col sm:w-2/12 w-full align-center pull-right">
                            <b>Role</b>
                        </div>
                        <div class="vx-col sm:w-4/12 w-full">
                            <vs-select
                            class="full-width"
                            label=""
                            v-model="role"
                            >
                                <vs-select-item :key="index" :value="item.RoleName" :text="item.RoleName" v-for="item,index in lst_roles" />
                            </vs-select>
                        </div>
                    </div>
                    <div class="vx-row">
                        <div class="vx-col sm:w-2/3 w-full ml-auto">
                            <vs-button color="success" class="mr-3 mb-2" @click="AddUsers()">Save</vs-button>
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
            lst_users: [],
            lst_roles: [],
            popup: false,
            user_name: '',
            email: '',
            first_name: '',
            new_password: '',
            last_name: '',
            verify_password: '',
            role: '',
            users_id: "0",
            page: 1,
            total: 0,
            search_usersname: '',
            search_email: ''
        }
    },
    components: {
    },
    created() {
      this.RunStart();
    },
    methods: {
        RunRoles() {
            var vm = this;
            axios.get("http://admin.bobbylct.com/api/users/roles")
            .then((response) => {
                var data = response.data;
                vm.lst_roles = data.Data;
            })
            .catch((error) => { console.log(error) })
        },
        RunStart() {
            var vm = this;
            var param = {};
            param = {
                params: {
                    page: vm.page,
                    type: 0
                }
            }
            if (vm.search_usersname) {
                Object.assign(param.params, { username: vm.search_usersname })
            } 
            if (vm.search_email) {
                Object.assign(param.params, { email: vm.search_email })
            }
            axios.get("http://admin.bobbylct.com/api/users", param)
            .then((response) => {
                var data = response.data;
                vm.lst_users = data.Data;
                vm.total = Math.ceil(data.Error.Code / 12);
            })
            .catch((error) => { console.log(error) })
        },
        ClosePopup() {
            var vm = this;
            vm.popup = false;
        },
        OpenPopupAddUsers() {
            var vm = this;
            vm.popup = true;
            vm.RunRoles();
            vm.users_id = 0;
            vm.username = '';
            vm.email = '';
            vm.first_name = '';
            vm.new_password = '';
            vm.last_name = '';
            vm.verify_password = '';
            vm.role = '';
        },
        AddUsers() {
            var vm = this;
            var param = {
                email: vm.email,
                first_name: vm.first_name,
                last_name: vm.last_name,
                password: vm.new_password,
                role: vm.role,
                username: vm.user_name
            };
            var url = '';
            if(vm.users_id != 0) {
                Object.assign(param, { id: vm.users_id });
                url = 'http://admin.bobbylct.com/api/user/update';
            } else {
                Object.assign(param, { new_password: vm.new_password });
                Object.assign(param, { verify_password: vm.verify_password });
                url = 'http://admin.bobbylct.com/api/user/create';
            }
            axios.post(url, param)
            .then((response) => {
                vm.RunStart();
                vm.popup = false;
            })
            .catch((error) => { console.log(error) })
        },
        EditUsers(item) {
            var vm = this;
            vm.popup = true;
            vm.RunRoles();
            vm.users_id = item.ID;
            vm.user_name = item.UserName;
            vm.email = item.Email;
            vm.first_name = item.FirstName;
            vm.new_password = '';
            vm.last_name = item.LastName;
            vm.verify_password = '';
            vm.role = item.Role;
        }
    }
}
</script>

<style lang="scss">
    .con-vs-popup .vs-popup {
        width: 70%;
    }
</style>
