(function () {
    'use strict';

    angular
        .module('reportToolApp')
        .controller('CategoriesAlertController', CategoriesAlertController);

    CategoriesAlertController.$inject = ['$filter', 'CategoriesService', 'data', '$state', '$uibModalInstance'];

    function CategoriesAlertController($filter, CategoriesService, data, $state, $uibModalInstance) {
        var vm = this;

        vm.id = data.id;
        vm.category_code = data.category_code;
        vm.erorrMessage = null;

        vm.cancel = cancel;
        vm.deleteItem = deleteItem;


        function deleteItem() {
            CategoriesService.update({
                pathMethod: 'delete',
                id: vm.id,
                category_code: vm.category_code
            },{}, function(data){
                
                if(data.Error == null){
                    $uibModalInstance.dismiss('cancel');
                    $state.go('categories',{}, {reload: true});
                }else{
                    vm.erorrMessage = data.Error.Message;
                }
            });
        }

        function cancel(){
            $uibModalInstance.dismiss('cancel');
        }
    }
})();
