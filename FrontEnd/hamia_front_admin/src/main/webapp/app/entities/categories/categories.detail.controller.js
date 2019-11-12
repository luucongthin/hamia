(function () {
    'use strict';

    angular
        .module('reportToolApp')
        .controller('CategoriesDetailController', CategoriesDetailController);

    CategoriesDetailController.$inject = ['$filter', 'CategoriesService', 'data', '$state', '$uibModalInstance'];

    function CategoriesDetailController($filter, CategoriesService, data, $state, $uibModalInstance) {
        var vm = this;

        vm.industry = data;


        vm.cancel = cancel;
        vm.deleteItem = deleteItem;
        vm.save = save;
        vm.update = update;


        function deleteItem() {
            CategoriesService.update({
                pathMethod: 'delete',
                id: vm.industry.id,
            }, {}, function (data) {
                $uibModalInstance.dismiss('cancel');
                $state.go('categories', {}, { reload: true });
                cancel()
            });
        }

        function save() {
            CategoriesService.save({
                pathMethod: 'create'
            }, {
                    name: vm.industry.name != '' ? vm.industry.name : null,
                    title: vm.industry.title != '' ? vm.industry.title : null,
                    code: vm.industry.code != '' ? vm.industry.code : null,
                }, function (data) {
                    $state.go('categories', {}, { reload: true });
                    cancel()
                });
        }

        function update() {
            CategoriesService.update({
                pathMethod: 'update'
            }, {
                    id: vm.industry.id,
                    name: vm.industry.name != '' ? vm.industry.name : null,
                    title: vm.industry.title != '' ? vm.industry.title : null,
                    code: vm.industry.code != '' ? vm.industry.code : null,
                }, function (data) {
                    $state.go('categories', {}, { reload: true });
                    cancel()
                });
        }

        function cancel() {
            $uibModalInstance.dismiss('cancel');
        }
    }
})();
