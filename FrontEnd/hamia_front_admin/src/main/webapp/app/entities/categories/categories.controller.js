(function () {
    'use strict';

    angular
        .module('reportToolApp')
        .controller('CategoriesController', CategoriesController);

    CategoriesController.$inject = ['$filter', 'CategoriesService', 'ParseLinks', '$uibModal'];

    function CategoriesController($filter, CategoriesService, ParseLinks, $uibModal) {
        var vm = this;

        vm.lstCategory = [];
        vm.dataSearch = {};

        vm.dataSearch.name = null;
        vm.dataSearch.title = null;
        vm.dataSearch.code = null;

        vm.addNew = addNew;
        vm.search = search;
        vm.update = update;
        vm.save = save;
        vm.deleteItem = deleteItem;


        init();

        function init() {
            loadAll();
        }

        function loadAll() {
            CategoriesService.get(function (data) {
                angular.forEach(data.Data, function (element, index) {
                    var item = {
                        id: element.ID,
                        name: element.Name,
                        title: element.Title,
                        code: element.Code
                    }

                    vm.lstCategory.push(item);

                });

            }, function (error) {
                console.log(error)
            });
        }

        function search() {
            vm.lstCategory = [];

            CategoriesService.get({
                name: vm.dataSearch.name != '' ? vm.dataSearch.name : null,
                title: vm.dataSearch.title != '' ? vm.dataSearch.title : null,
                code: vm.dataSearch.code != '' ? vm.dataSearch.code : null,
            }, function (data) {
                angular.forEach(data.Data, function (element, index) {
                    var item = {
                        id: element.ID,
                        name: element.Name,
                        title: element.Title,
                        code: element.Code
                    }

                    vm.lstCategory.push(item);

                });

            }, function (error) {
                console.log(error)
            });
        }

        function update(data) {
            $uibModal.open({
                animation: true,
                templateUrl: 'app/entities/categories/categories.detail.html',
                controller: 'CategoriesDetailController',
                controllerAs: 'vm',
                resolve: {
                    data : function() { 
                        return data
                    }
                }
            });
        }

        function save(data) {
            CategoriesService.save({
                pathMethod: 'create'
            }, {
                    name: data.name != '' ? data.name : null,
                    title: data.title != '' ? data.title : null,
                    code: data.code != '' ? data.code : null,
                }, function (data) {

                }, function (error) {
                    console.log(error)
                });
        }

        function deleteItem(item) {
            $uibModal.open({
                animation: true,
                templateUrl: 'app/entities/categories/categories.alert.html',
                controller: 'CategoriesAlertController',
                controllerAs: 'vm',
                resolve: {
                    data : function() { 
                         return {id: item.id, category_code: item.code}
                    }
                }
            });
        }

        function addNew() {
            var data = null;
            $uibModal.open({
                animation: true,
                templateUrl: 'app/entities/categories/categories.detail.html',
                controller: 'CategoriesDetailController',
                controllerAs: 'vm',
                resolve: {
                    data : function() { 
                        return data
                    }
                }
            });
        }
    }
})();
