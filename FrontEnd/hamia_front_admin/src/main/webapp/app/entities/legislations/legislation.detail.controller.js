(function() {
    'use strict';

    angular
        .module('reportToolApp')
        .controller('LegislationDetailController', LegislationDetailController);

    LegislationDetailController.$inject = ['$filter', 'LegislationsService', '$state', '$uibModal', 'CategoriesService'];

    function LegislationDetailController ($filter, LegislationsService, $state, $uibModal, CategoriesService) {
        var vm = this;

        vm.id = $state.params.id;

        vm.legislation = {};
        vm.datepickerOpened2 = false;
        vm.datepickerOpened1 = false;

        vm.save = save;
        vm.update = update;
        vm.deleteItem = deleteItem;
        vm.datepickerOpen = datepickerOpen;

        init();

        function init() {
            if(vm.id){
                getLegislation();
            }
            loadAllIndustry();
            
        }

        function getLegislation(){
            LegislationsService.get({
                pathMethod: 'search',
                id: vm.id
            }, function (data) {
                angular.forEach(data.Data, function(element, index){
                        vm.legislation.id = element.ID,
                        vm.legislation.title = element.Title,
                        vm.legislation.description = element.Description,
                        vm.legislation.summary = element.Summary,
                        vm.legislation.start_date = new Date(element.StartDate),
                        vm.legislation.end_date = new Date(element.EndDate),
                        vm.legislation.category_code = element.CategoryCode,
                        vm.legislation.reporter = element.Reporter,
                        vm.legislation.implementing_authority = element.ImplementingAuthority,
                        vm.legislation.is_importing_country = element.IsImportingCountry,
                        vm.legislation.agency = element.Agency
                });

            }, function (error) {
                console.log(error)
            });
        }

        function datepickerOpen(index){

            index == 1 ? vm.datepickerOpened1 = true : vm.datepickerOpened2 = true;
        }

        function loadAllIndustry(){
            CategoriesService.get({}
            ,function(data){
                vm.lstIndustry = data.Data;
            });
        }

        function update(data) {

            LegislationsService.update({
                    pathMethod: 'update'
                }, {

                    id: data.id != '' ? data.id : null,
                    title: data.title != '' ? data.title : null,
                    description: data.description != '' ? data.description : null,
                    summary: data.summary != '' ? data.summary : null,
                    start_date: data.start_date != '' ? $filter('date')(data.start_date, 'MM.dd.yyyy') : null,
                    end_date: data.end_date != '' ? $filter('date')(data.end_date, 'MM.dd.yyyy') : null,
                    category_code: data.category_code != '' ? data.category_code : null,
                    reporter: data.reporter != '' ? data.reporter : null,
                    implementing_authority: data.implementing_authority != '' ? data.implementing_authority : null,
                    agency: data.agency != '' ? data.agency : null,
                    is_importing_country:  1

                }, function (data) {
                    $state.go('legislations', {}, {reload: true});
                }, function (error) {
                    console.log(error)
                });
        }

        function save(data) {
            LegislationsService.save({
                pathMethod: 'create'
            }, {

                title: data.title != '' ? data.title : null,
                description: data.description != '' ? data.description : null,
                summary: data.summary != '' ? data.summary : null,
                start_date: data.start_date != '' ? $filter('date')(data.start_date, 'MM.dd.yyyy') : null,
                end_date: data.end_date != '' ? $filter('date')(data.end_date, 'MM.dd.yyyy') : null,
                category_code: data.category_code != '' ? data.category_code : null,
                reporter: data.reporter != '' ? data.reporter : null,
                implementing_authority: data.implementing_authority != '' ? data.implementing_authority : null,
                agency: data.agency != '' ? data.agency : null,
                is_importing_country:  1
            }, function (data) {
                $state.go('legislations', {}, {reload: true});
            }, function (error) {
                console.log(error)
            });
        }

        function deleteItem() {
            $uibModal.open({
                animation: true,
                templateUrl: 'app/entities/legislations/legislation.alert.html',
                controller: 'LegislationAlertController',
                controllerAs: 'vm',
                resolve: {
                    data : function() { 
                         return vm.id
                    }
                }
            });
        }
    }
})();
