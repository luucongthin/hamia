(function () {
    'use strict';

    angular
        .module('hamiaFrontEndApp')
        .controller('LegislationController', LegislationController);

    LegislationController.$inject = ['$stateParams', 'LegislationService', 'ReporterService', 'ProductService', 'MeansuerService', '$uibModal', '$localStorage'];

    function LegislationController($stateParams, LegislationService, ReporterService, ProductService, MeansuerService, $uibModal, $localStorage) {
        var vm = this;

        vm.categoryCode = $stateParams.industry;

        vm.pageLegislation = 1;
        vm.totalLegislation = 0;
        vm.userRole = $localStorage.role ? $localStorage.role : '';

        vm.pageNTM = 1;
        vm.totalNTM = 0;

        vm.dataSearch = {};
        vm.lstLegislation = [];
        vm.lstMeansuer = [];
        vm.lstMeansuerBP = [];

        vm.search = search;
        vm.getLegislation = getLegislation;
        vm.getMeansuer = getMeansuer;
        vm.loadSuggestrReporter = loadSuggestrReporter;
        vm.selestSuggestReporter = selestSuggestReporter;
        vm.loadSuggestProduct = loadSuggestProduct;
        vm.selestSuggestProduct = selestSuggestProduct;
        // vm.loadSuggestIndustry = loadSuggestIndustry;
        // vm.selestSuggestIndustry = selestSuggestIndustry;
        vm.detail = detail;


        function search() {

            if(vm.userRole.toUpperCase() == 'FREE USER' || vm.userRole.toUpperCase() == ''){
                alert('Đề nghị nâng cấp tài khoản để nhận kết quả ')
            }else{
                if (vm.dataSearch.reporter == null || vm.dataSearch.reporter == '' || vm.dataSearch.product == null || vm.dataSearch.product == '') {
                    alert('Seach input invalid')
                } else {
                    vm.isSearch = true;
                    getLegislation();
                    getMeansuer();
                    getMeansuerBP();
                }
            }
        }

        function detail(item) {
            $uibModal.open({
                animation: true,
                templateUrl: 'app/entities/legislation/legislation.detail.html',
                controller: 'LegislationDetailController',
                controllerAs: 'vm',
                size: 'lg',
                resolve: {
                    data: function () {
                        return item
                    }
                }
            });
        }


        function getLegislation() {
            LegislationService.get({
                pathMethod: 'get',
                category_code: vm.categoryCode,
                reporter: vm.dataSearch.reporter,
                page: vm.pageLegislation
            }, function (data) {
                vm.lstLegislation = data.Data
                for (var i = 0; i < vm.lstLegislation.length; i++) {
                    vm.lstLegislation[i].StartDate = new Date(vm.lstLegislation[i].StartDate);
                    vm.lstLegislation[i].EndDate = new Date(vm.lstLegislation[i].EndDate);
                }
                vm.totalLegislation = data.Error.Code;
                vm.totalLegislationU = data.Error.Message;
            });
        }

        function getMeansuer() {
            MeansuerService.get({
                category_code: vm.categoryCode,
                reporter: vm.dataSearch.reporter,
                product: vm.dataSearch.product_code,
                page: vm.pageNTM
            }, function (data) {
                vm.lstMeansuer = data.Data;
                vm.totalNTM = data.Error.Code;
            });
        }

        function getMeansuerBP() {
            MeansuerService.get({
                pathMethod: 'BP',
                category_code: vm.categoryCode,
                reporter: vm.dataSearch.reporter,
                product: vm.dataSearch.product_code,
                page: 1000000
            }, function (data) {
                vm.lstMeansuerBP = data.Data;
                console.log('vm.lstMeansuerBP', vm.lstMeansuerBP);
            });
        }

        function loadSuggestrReporter(val) {
            return ReporterService.get({
                name: val != '' ? val : null
            }).$promise.then(function (data) {
                return data.Data;
            });
        }

        function selestSuggestReporter($item, $model, $label, $event) {
            vm.dataSearch.reporter_code = $item.Code;
            // vm.dataSearch.category_code = $item.Code;
        }

        function loadSuggestProduct(val) {
            return ProductService.get({
                name: val != '' ? val : null
            }).$promise.then(function (data) {
                return data.Data;
            });
        }

        function selestSuggestProduct($item, $model, $label, $event) {
            vm.dataSearch.product_code = $item.Code;
            // vm.dataSearch.category_code = $item.Code;
        }

    }
})();
