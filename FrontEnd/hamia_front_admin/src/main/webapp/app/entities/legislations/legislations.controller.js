(function() {
    'use strict';

    angular
        .module('reportToolApp')
        .controller('LegislationsController', LegislationsController);

    LegislationsController.$inject = ['$filter', 'LegislationsService', '$state', '$uibModal', 'CategoriesService'];

    function LegislationsController ($filter, LegislationsService, $state, $uibModal, CategoriesService) {
        var vm = this;

        vm.fileImport;
        vm.lstLegislation = [];
        vm.lstIndustry = [];
        vm.dataSearch = {};

        vm.datepickerOpened2 = false;
        vm.datepickerOpened1 = false;
        vm.page = 1;
        vm.total = 0;

        vm.dateOptions = {
            dateFormat: 'dd-MM-yyyy'
        }

        vm.save = save;
        vm.search = search;
        vm.update = update;
        vm.deleteItem = deleteItem;
        vm.importFile = importFile;
        vm.datepickerOpen = datepickerOpen;
        vm.detail = detail;
        vm.exportTemplate = exportTemplate;
        vm.selectFile = selectFile;
        vm.loadSuggestCategory = loadSuggestCategory;
        vm.selestSuggestCategory = selestSuggestCategory;
        // vm.changeDate = changeDate;

        init();

        function init() {
            loadAll();
            loadSuggestCategory();
        }

        function selectFile (file) {
            vm.fileImport = file;
        }

        function loadSuggestCategory(val){
            return CategoriesService.get({
                title: val != '' ? val : null
            }).$promise.then(function (data) {
                return data.Data;
            });
        }

        function loadSuggestCategory(){
            CategoriesService.get(
            {}, 
            function (data) {
                angular.forEach(data.Data, function(element){
                    vm.lstIndustry.push(element);
                });
            });
        }

        function selestSuggestCategory($item, $model, $label, $event){
            vm.dataSearch.category_code = $item.Code;
            // vm.dataSearch.category_code = $item.Code;
        }

        function loadAll() {
            LegislationsService.get({ page: vm.page},function (data) {
                angular.forEach(data.Data, function(element, index){
                    var item = {
                        id: element.ID,
                        title: element.Title,
                        description: element.Description,
                        summary: element.Summary,
                        start_date: new Date(element.StartDate),
                        end_date: new Date(element.EndDate),
                        category_code: element.CategoryCode,
                        reporter: element.Reporter,
                        implementing_authority: element.ImplementingAuthority,
                        is_importing_country: element.IsImportingCountry,
                        agency: element.Agency
                    }
                    vm.lstLegislation.push(item);
                });
                vm.total = data.Error.Code;
            });
        }

        function datepickerOpen(index){

            index == 1 ? vm.datepickerOpened1 = true : vm.datepickerOpened2 = true;
        }

        function detail(item){
            $state.go('legislation', {data: item, id: item.id});
        }

        function search(type) {
            vm.lstLegislation = [];

            vm.page = type == 1 ? 1 : vm.page;

            LegislationsService.get({
                category_code: vm.dataSearch.category_code != '' ? vm.dataSearch.category_code : null,
                start_date: vm.dataSearch.start_date != '' ? $filter('date')(vm.dataSearch.start_date, 'dd.MM.yyyy') : null,
                end_date: vm.dataSearch.end_date != '' ? $filter('date')(vm.dataSearch.end_date, 'dd.MM.yyyy') : null,
                // partner_code: vm.dataSearch.partner_code != '' ? vm.dataSearch.partner_code : null,
                page: vm.page
            }, function (data) {
                angular.forEach(data.Data, function(element, index){
                    var item = {
                        id: element.ID,
                        title: element.Title,
                        description: element.Description,
                        summary: element.Summary,
                        start_date: new Date(element.StartDate),
                        end_date: new Date(element.EndDate),
                        category_code: element.CategoryCode,
                        reporter: element.Reporter,
                        implementing_authority: element.ImplementingAuthority,
                        is_importing_country: element.IsImportingCountry,
                        agency: element.Agency,
                    }
                    vm.lstLegislation.push(item);
                });
                vm.total = data.Error.Code;
            }, function (error) {
                console.log(error)
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
                    start_date: data.start_date != '' ? data.start_date : null,
                    end_date: data.end_date != '' ? data.end_date : null,
                    category_code: data.category_code != '' ? data.category_code : null,
                    reporter: data.reporter != '' ? data.reporter : null,
                    implementing_authority: data.implementing_authority != '' ? data.implementing_authority : null,
                    is_importing_country: data.is_importing_country != '' ? data.is_importing_country : null,
                    agency: data.agency != '' ? data.agency : null

                }, function (data) {

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
                start_date: data.start_date != '' ? data.start_date : null,
                end_date: data.end_date != '' ? data.end_date : null,
                category_code: data.category_code != '' ? data.category_code : null,
                reporter: data.reporter != '' ? data.reporter : null,
                implementing_authority: data.implementing_authority != '' ? data.implementing_authority : null,
                is_importing_country: data.is_importing_country != '' ? data.is_importing_country : null,
                agency: data.agency != '' ? data.agency : null
            }, function (data) {

            }, function (error) {
                console.log(error)
            });
        }

        function importFile() {
            var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.xls|.xlsx)$/;
            if (regex.test(vm.fileImport.name.toLowerCase())) {
                if (typeof (FileReader) != "undefined") {
                    var reader = new FileReader();
                    //For Browsers other than IE.
                    if (reader.readAsBinaryString) {
                        reader.onload = function (e) {
                            processImportExcel(e.target.result);
                        };
                        reader.readAsBinaryString(vm.fileImport);
                    } else {
                        //For IE Browser.
                        reader.onload = function (e) {
                            var data = "";
                            var bytes = new Uint8Array(e.target.result);
                            for (var i = 0; i < bytes.byteLength; i++) {
                                data += String.fromCharCode(bytes[i]);
                            }
                            processImportExcel(data);
                        };
                        reader.readAsArrayBuffer(vm.fileImport);
                    }
                } else {
                    console.log("This browser does not support HTML5.");
                }
            } else {
                console.log("Please upload a valid Excel file.");
            }
        };

        function processImportExcel (data) {
            //Read the Excel File data.
            var workbook = XLSX.read(data, {
                type: 'binary'
            });

            var firstSheet = workbook.SheetNames[0];
            var secondSheet = workbook.SheetNames[1];
            var excelFirstRows = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[firstSheet]);
            var excelSecondRows = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[secondSheet]);

            for(var i = 0; i< excelFirstRows.length; i++){
                excelFirstRows[i].category_code = vm.dataSearch.category_code;
                excelFirstRows[i].start_date = '01.' + excelFirstRows[i].start_date;
                excelFirstRows[i].end_date = '01.' + excelFirstRows[i].end_date;
            }

            for(var i = 0; i< excelSecondRows.length; i++){
                excelSecondRows[i].category_code = vm.dataSearch.category_code;
            }

            excelFirstRows.shift();
            excelSecondRows.shift();

            if(vm.dataSearch.category_code == null || vm.dataSearch.category_code == '' ){
                alert('You must choose industry');
            }else{
                // var success = false;

                LegislationsService.save({pathMethod: 'import'}, excelFirstRows, function (data) {
                    
                }, function (error) {
                    console.log(error)
                });

                LegislationsService.save({pathMethod: 'import_NTM'}, excelSecondRows, function (data) {
                    
                    $state.go($state.current.name, {}, {reload: true});
                }, function (error) {
                    console.log(error)
                });

                // if(success){
                //     $state.go($state.current.name, {}, {reload: true});
                // }
            }
        };


        function exportTemplate(){
            window.open(API_CONFIG.FILE_PATH + '/i18n/file/Legislation_Meansuers.xls');
        }

        function deleteItem(id) {

            $uibModal.open({
                animation: true,
                templateUrl: 'app/entities/legislations/legislation.alert.html',
                controller: 'LegislationAlertController',
                controllerAs: 'vm',
                resolve: {
                    data : function() { 
                         return id
                    }
                }
            });
        }
    }
})();
