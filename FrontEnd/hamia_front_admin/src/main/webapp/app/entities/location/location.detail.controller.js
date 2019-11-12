(function () {
    'use strict';

    angular
        .module('reportToolApp')
        .controller('LocationDetailController', LocationDetailController);

    LocationDetailController.$inject = ['$filter', 'LocationService', '$uibModal', '$state'];

    function LocationDetailController($filter, LocationService, $uibModal, $state) {
        var vm = this;

        vm.location = {};

        vm.id = $state.params.id;

        vm.save = save;
        vm.update = update;
        vm.deleteItem = deleteItem;
        vm.back = back;


        init();

        function init() {
            if(vm.id){
                search();
            }
        }

        function search() {
            vm.lstLocation = [];

            LocationService.get({
                pathMethod: 'search',
                id: vm.id
            }, function (data) {
                angular.forEach(data.Data, function(element, index){
                        vm.location.id = element.ID,
                        vm.location.wardCode = element.WardCode,
                        vm.location.wardName = element.WardName,
                        vm.location.type = element.Type,
                        vm.location.districtCode = element.DistrictCode,
                        vm.location.districtName = element.DistrictName,
                        vm.location.cityCode = element.CityCode,
                        vm.location.cityName = element.CityName,
                        vm.location.population = element.Population,
                        vm.location.area = element.Area
                });

            }, function (error) {
                console.log(error)
            });
        }

        function update(data) {

            LocationService.update({
                    pathMethod: 'update'
                }, {

                    id: data.id != '' ? data.id : null,
                    ward_code: data.wardCode != '' ? data.wardCode : null,
                    ward_name: data.ward_Name != '' ? data.wardName : null,
                    type: data.type != '' ? data.type : null,
                    district_code: data.districtCode != '' ? data.districtCode : null,
                    district_name: data.district_Name != '' ? data.districtName : null,
                    city_code: data.cityCode != '' ? data.cityCode : null,
                    city_name: data.city_Name != '' ? data.cityName : null,
                    population: data.population != '' ? data.population : null,
                    area: data.area != '' ? data.area : null,

                }, function (data) {
                    back()
                }, function (error) {
                    console.log(error)
                });
        }

        function save(data) {
            LocationService.save({
                pathMethod: 'create'
            }, {

                ward_code: data.wardCode != '' ? data.wardCode : null,
                ward_name: data.ward_Name != '' ? data.wardName : null,
                // type: data.type != '' ? data.type : null,
                type: "Xã",
                district_code: data.districtCode != '' ? data.districtCode : null,
                district_name: data.district_Name != '' ? data.districtName : null,
                city_code: data.cityCode != '' ? data.cityCode : null,
                city_name: data.city_Name != '' ? data.cityName : null,
                population: data.population != '' ? data.population : null,
                area: data.area != '' ? data.area : null,
                }, function (data) {
                    back()
                }, function (error) {
                    console.log(error)
                });
        }

        function back(){
            $state.go('locations', {}, {reload: true});
        }


        function deleteItem(id) {
            $uibModal.open({
                animation: true,
                templateUrl: 'app/entities/location/location.alert.html',
                controller: 'LocationAlertController',
                controllerAs: 'vm',
                resolve: {
                    data : function() { 
                         return id
                    }
                }
            });
           
        }
    }
})();
