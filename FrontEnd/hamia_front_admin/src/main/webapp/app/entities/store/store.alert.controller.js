(function () {
    'use strict';

    angular
        .module('reportToolApp')
        .controller('StoreAlertController', StoreAlertController);

    StoreAlertController.$inject = ['$uibModalInstance', 'StoreService', 'data', '$state'];

    function StoreAlertController($uibModalInstance, StoreService, data, $state) {
        var vm = this;

        vm.id = data;

        vm.cancel = cancel;
        vm.deleteItem = deleteItem;


        function deleteItem() {
            StoreService.update({
                pathMethod: 'delete',
                id: vm.id,
            },{}, function(data){
                $uibModalInstance.dismiss('cancel');
                $state.go('stores',{}, {reload: true});
            });
        }

        function cancel(){
            $uibModalInstance.dismiss('cancel');
        }
    }
})();
