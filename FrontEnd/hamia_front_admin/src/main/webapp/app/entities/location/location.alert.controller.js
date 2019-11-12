(function () {
    'use strict';

    angular
        .module('reportToolApp')
        .controller('LocationAlertController', LocationAlertController);

    LocationAlertController.$inject = ['$uibModalInstance', 'LocationService', 'data', '$state'];

    function LocationAlertController($uibModalInstance, LocationService, data, $state) {
        var vm = this;

        vm.id = data;

        vm.cancel = cancel;
        vm.deleteItem = deleteItem;


        function deleteItem() {
            LocationService.update({
                pathMethod: 'delete',
                id: vm.id,
            },{}, function(data){
                $uibModalInstance.dismiss('cancel');
                $state.go('locations',{}, {reload: true});
            });
        }

        function cancel(){
            $uibModalInstance.dismiss('cancel');
        }
    }
})();
