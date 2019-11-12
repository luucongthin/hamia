(function () {
    'use strict';

    angular
        .module('reportToolApp')
        .controller('StoreDetailController', StoreDetailController);

    StoreDetailController.$inject = ['$state', 'StoreService', '$uibModal', 'CategoriesService'];

    function StoreDetailController($state, StoreService, $uibModal, CategoriesService) {
        var vm = this;

        vm.id = $state.params.id;
        vm.store = {}

        vm.save = save;
        vm.update = update;
        vm.deleteItem = deleteItem;
        vm.back = back;

        init();

        function init() {
            if(vm.id){
                loadData();
            }
            loadAllIndustry();
        }

        function loadAllIndustry(){
            CategoriesService.get({}
            ,function(data){
                vm.lstIndustry = data.Data;
            });
        }

        function loadData() {
            StoreService.get({
                pathMethod: 'search',
                id: vm.id
            }, function (data) {
                angular.forEach(data.Data, function (element, index) {
                        vm.store.id = element.ID,
                        vm.store.code = element.Code,
                        vm.store.name = element.Name,
                        vm.store.adress = element.Adress,
                        vm.store.information = element.Information,
                        vm.store.ward_code = element.WardCode,
                        vm.store.latitude = element.Latitude,
                        vm.store.longitude = element.Longitude,
                        vm.store.category_code = element.CategoryCode,
                        vm.store.type = element.Type,
                        vm.store.note = element.Note
                });
            });
        }

        function update(data) {

            StoreService.update({
                pathMethod: 'update'
            }, {

                    id: data.id != '' ? data.id : null,
                    code: data.code != '' ? data.code : null,
                    name: data.name != '' ? data.name : null,
                    adress: data.adress != '' ? data.adress : null,
                    information: data.information != '' ? data.information : null,
                    ward_code: data.ward_code != '' ? data.ward_code : null,
                    latitude: data.latitude != '' ? data.latitude : null,
                    longitude: data.longitude != '' ? data.longitude : null,
                    category_code: data.category_code != '' ? data.category_code : null,
                    type: data.type != '' ? data.type : null,
                    note: data.note != '' ? data.note : null

                }, function (data) {
                    $state.go('stores', {}, {reload: true});
                }, function (error) {
                    console.log(error)
                });
        }

        function save(data) {
            StoreService.save({
                pathMethod: 'create'
            }, {

                    code: data.code != '' ? data.code : null,
                    name: data.name != '' ? data.name : null,
                    adress: data.adress != '' ? data.adress : null,
                    information: data.information != '' ? data.information : null,
                    ward_code: data.ward_code != '' ? data.ward_code : null,
                    latitude: data.latitude != '' ? data.latitude : null,
                    longitude: data.longitude != '' ? data.longitude : null,
                    category_code: data.category_code != '' ? data.category_code : null,
                    type: data.type != '' ? data.type : null,
                    note: data.note != '' ? data.note : null
                }, function (data) {
                    $state.go('stores', {}, {reload: true});
                }, function (error) {
                    console.log(error)
                });
        }


        function back(){
            $state.go('stores', {}, {reload: true});
        }

        function deleteItem(id) {

            $uibModal.open({
                animation: true,
                templateUrl: 'app/entities/store/store.alert.html',
                controller: 'StoreAlertController',
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
