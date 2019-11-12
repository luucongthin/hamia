(function() {
    'use strict';

    angular
        .module('reportToolApp')
        .controller('LegislationAlertController', LegislationAlertController);

    LegislationAlertController.$inject = ['LegislationsService', '$state', '$uibModalInstance', 'data'];

    function LegislationAlertController (LegislationsService, $state, $uibModalInstance, data) {
        var vm = this;
        
        vm.id = data;

        vm.cancel = cancel;
        vm.deleteItem = deleteItem;


        function deleteItem() {
            LegislationsService.update({
                pathMethod: 'delete',
                id: vm.id,
            },{}, function(data){
                $uibModalInstance.dismiss('cancel');
                $state.go('legislations',{}, {reload: true});
            });
        }

        function cancel(){
            $uibModalInstance.dismiss('cancel');
        }
    }
})();
