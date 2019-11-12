(function () {
    'use strict';

    angular
        .module('hamiaFrontEndApp')
        .controller('LegislationDetailController', LegislationDetailController);

    LegislationDetailController.$inject = ['$uibModalInstance', 'data'];

    function LegislationDetailController($uibModalInstance, data) {
        var vm = this;

        vm.cancel = cancel;

        vm.legislation = angular.copy(data);
        console.log('vm.legislation', vm.legislation);

        function cancel(){
            $uibModalInstance.dismiss('cancel');
        }

    }
})();
