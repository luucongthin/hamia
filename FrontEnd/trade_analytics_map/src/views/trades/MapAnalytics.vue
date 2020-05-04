<template>
    <div id="dashboard-analytics">
        <div class="vx-row">
            <vx-card class="vx-col w-full lg:w-1/4 mb-base">
                <div class="input-group">
                    <label for="citySelect">Tỉnh/Thành phố</label>
                    <v-select
                        id="citySelect"
                        v-model="citySelected"
                        :options="cityOptions"
                        :reduce="item => item.CityCode"
                        label="CityName"
                        @input="cityChange()"
                    ></v-select>
                </div>

                <div class="input-group">
                    <label for="districtSelect">Quận/Huyện</label>
                    <v-select
                        id="districtSelect"
                        v-model="districtSelected"
                        :options="districtOptions"
                        :reduce="item => item.DistrictCode"
                        label="DistrictName"
                        @input="districtChange()"
                    ></v-select>
                </div>

                <div class="input-group">
                    <label for="wardSelect">Phường/Xã</label>
                    <v-select
                        id="wardSelect"
                        v-model="wardSelected"
                        :options="wardOptions"
                        :reduce="item => item.WardCode"
                        label="WardName"
                    ></v-select>
                </div>

                <div class="input-group">
                    <vs-button class="bg-primary-gradient w-full" @click="search()">Search</vs-button>
                </div>
            </vx-card>

            <div class="vx-col w-full lg:w-3/4 mb-base">
                <vl-map
                    :load-tiles-while-animating="true"
                    :load-tiles-while-interacting="true"
                    data-projection="EPSG:4326"
                    style="height: 550px"
                >
                    <vl-view :zoom.sync="zoom" :center.sync="center" :rotation.sync="rotation"></vl-view>

                    <vl-layer-tile id="osm">
                        <vl-source-osm></vl-source-osm>
                    </vl-layer-tile>

                    <vl-layer-vector>
                        <vl-source-vector :features="features"></vl-source-vector>
                    </vl-layer-vector>
                </vl-map>
            </div>
        </div>
    </div>
</template>

<script>
import vSelect from "vue-select";
import axios from "../../http/axios/index.js";

export default {
    components: {
        "v-select": vSelect
    },
    data() {
        return {
            zoom: 12,
            center: [105.85590720176691, 21.013874769689863],
            rotation: 0,
            geolocPosition: undefined,

            features: [
                {
                    type: "Feature",
                    geometry: {
                        type: "Point",
                        coordinates: [105.85590720176691, 21.013874769689863]
                    },
                    properties: {}
                }
            ],

            citySelected: undefined,
            districtSelected: undefined,
            wardSelected: undefined,
            cityOptions: [],
            districtOptions: [],
            wardOptions: []
        };
    },
    created() {
        var vm = this;
        vm.init();
        vm.loadCity();
    },
    methods: {
        init: function() {
            console.log("init screen");
        },

        search: function() {
            axios
                .get("api/store/front", {
                    params: {
                        category_code: '001',
                        size: 12,
                        city_code: this.citySelected,
                        district_code: this.districtSelected,
                        ward_code: this.wardSelected
                    }
                })
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error);
                });
        },

        cityChange: function() {
            if (this.citySelected != null && this.citySelected != "")
                this.loadDistrict();
        },

        districtChange: function() {
            if (this.districtSelected != "" && this.citySelected != "")
                this.loadWard();
        },

        loadCity: function() {
            axios
                .get("api/ward/suggestcity")
                .then(response => {
                    this.cityOptions = response.data.Data;
                })
                .catch(error => {
                    console.log(error);
                });
        },

        loadDistrict: function() {
            axios
                .get("api/ward/suggestdistrict", {
                    params: {
                        city_code: this.citySelected
                    }
                })
                .then(response => {
                    this.districtOptions = response.data.Data;
                })
                .catch(error => {
                    console.log(error);
                });
        },

        loadWard: function() {
            axios
                .get("api/ward/suggestward", {
                    params: {
                        city_code: this.citySelected,
                        district_code: this.districtSelected
                    }
                })
                .then(response => {
                    this.wardOptions = response.data.Data;
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
};
</script>

<style lang="scss">
#dashboard-analytics {
    .greet-user {
        position: relative;
        .decore-left {
            position: absolute;
            left: 0;
            top: 0;
        }
        .decore-right {
            position: absolute;
            right: 0;
            top: 0;
        }
    }

    @media (max-width: 576px) {
        .decore-left,
        .decore-right {
            width: 140px;
        }
    }
}
</style>
