(function() {
    'use strict';

    angular
        .module('hamiaFrontEndApp')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', '$localStorage', 'FileSaver', '$state', 'CategoriesService', 'CrawlService'];

    function HomeController ($scope, $localStorage, FileSaver, $state, CategoriesService, CrawlService) {
        var vm = this;

        vm.industrySelected = '';
        vm.lstIndustry = [];

        vm.selected = selected;
        vm.stateGo = stateGo;
        vm.exportPDF = exportPDF;


        loadAllIndustry();
        $localStorage.industry = '';
        function loadAllIndustry(){
            CategoriesService.get({}, function(data){
                vm.lstIndustry = data.Data;
            })
        }

        function selected(item){
            for(var i = 0; i < vm.lstIndustry.length; i++){
                if(vm.lstIndustry[i].Code == item.Code){
                    $localStorage.industry = item.Code;
                    $localStorage.industryName = item.Name;
                    vm.lstIndustry[i].selected = true;
                }else{
                    vm.lstIndustry[i].selected = false;
                }
            }
        }

        function stateGo(link){
            if($localStorage.industry != ''){
                $state.go(link, {industry: $localStorage.industry})
            }else{
                alert('Your must choose industry firt');
            }
        }

        function exportPDF() {
            // CrawlService.get({
            //     pathMethod: 'export'
            // }, function(data){
            //     //var fileData = new Blob([data], {type: 'application/pdf;charset=UTF-8'});
            //     //FileSaver.saveAs(fileData, "Report.pdf");
            // })

            window.open(API_CONFIG.API_URL + '/api/crawl/export');
        }
    }
})();
