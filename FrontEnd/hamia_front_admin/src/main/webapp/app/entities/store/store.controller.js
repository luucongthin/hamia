(function () {
    'use strict';

    angular
        .module('reportToolApp')
        .controller('StoreController', StoreController);

    StoreController.$inject = ['$filter', 'StoreService', '$uibModal', '$state', 'FileSaver', 'CategoriesService'];

    function StoreController($filter, StoreService, $uibModal, $state, FileSaver, CategoriesService) {
        var vm = this;

        vm.lstStore = [];
        vm.lstIndustry = [];
        vm.dataSearch = {};
        vm.fileImport;
        vm.page = 1;
        vm.total = 0;

        vm.addNew = addNew;
        vm.save = save;
        vm.search = search;
        vm.update = update;
        vm.deleteItem = deleteItem;
        vm.importFile = importFile;
        vm.exportTemplate = exportTemplate;
        vm.selectFile = selectFile;
        vm.loadSuggestCategory = loadSuggestCategory;
        vm.selestSuggestCategory = selestSuggestCategory;

        init();

        function init() {
            loadAll();
            loadAllIndustry();
        }

        function selectFile (file) {
            vm.fileImport = file;
        }

        function loadAll() {
            StoreService.get({
                page: vm.page
            },function (data) {
                angular.forEach(data.Data, function (element, index) {
                    var item = {
                        id: element.ID,
                        code: element.Code,
                        name: element.Name,
                        adress: element.Adress,
                        information: element.Information,
                        ward_code: element.WardCode,
                        latitude: element.Latitude,
                        longitude: element.Longitude,
                        category_code: element.CategoryCode,
                        type: element.Type,
                        note: element.Note
                    }
                    vm.lstStore.push(item);
                });

                vm.total = data.Error.Code;
            });
        }

        function loadAllIndustry(){
            CategoriesService.get({}
            ,function(data){
                vm.lstIndustry = data.Data;
            });
        }

        function loadSuggestCategory(val){
            return CategoriesService.get({
                title: val != '' ? val : null
            }).$promise.then(function (data) {
                return data.Data;
            });
        }

        function selestSuggestCategory($item, $model, $label, $event){
            vm.dataSearch.category_code = $item.Code;
            // vm.dataSearch.category_code = $item.Code;
        }

        function search(type) {
            vm.lstStore = [];
            vm.page = type == 1 ? 1 : vm.page;
            StoreService.get({
                name: vm.dataSearch.name != '' ? vm.dataSearch.name : null,
                category_code: vm.dataSearch.category_code != '' ? vm.dataSearch.category_code : null,
                address: vm.dataSearch.adress != '' ? vm.dataSearch.adress : null,
                page: vm.page
            }, function (data) {
                angular.forEach(data.Data, function (element, index) {
                    var item = {
                        id: element.ID,
                        code: element.Code,
                        name: element.Name,
                        adress: element.Adress,
                        information: element.Information,
                        ward_code: element.WardCode,
                        latitude: element.Latitude,
                        longitude: element.Longitude,
                        category_code: element.CategoryCode,
                        type: element.Type,
                        note: element.Note
                    }
                    vm.lstStore.push(item);
                });

                vm.total = data.Error.Code;
            }, function (error) {
                console.log(error)
            });
        }

        function update(data) {

            StoreService.update({
                pathMethod: 'update'
            }, {

                    id: data.id != '' ? data.id : null,
                    code: data.code != '' ? data.code : null,
                    name: data.name != '' ? data.name : null,
                    adress: data.adress != '' ? data.adress : null,
                    information: data.information != '' ? data.information : null,
                    ward_code: data.ward_code != '' ? data.ward_code : null,
                    latitude: data.latitude != '' ? data.latitude : null,
                    longitude: data.longitude != '' ? data.longitude : null,
                    category_code: data.category_code != '' ? data.category_code : null,
                    type: data.type != '' ? data.type : null,
                    note: data.note != '' ? data.note : null

                }, function (data) {

                }, function (error) {
                    console.log(error)
                });
        }

        function save(data) {
            StoreService.save({
                pathMethod: 'create'
            }, {

                    code: data.code != '' ? data.code : null,
                    name: data.name != '' ? data.name : null,
                    adress: data.adress != '' ? data.adress : null,
                    information: data.information != '' ? data.information : null,
                    ward_code: data.ward_code != '' ? data.ward_code : null,
                    latitude: data.latitude != '' ? data.latitude : null,
                    longitude: data.longitude != '' ? data.longitude : null,
                    category_code: data.category_code != '' ? data.category_code : null,
                    type: data.type != '' ? data.type : null,
                    note: data.note != '' ? data.note : null
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
            var excelRows = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[firstSheet]);

            excelRows.shift();
            // console.log('excelRows', excelRows);

            for(var i = 0; i < excelRows.length; i++){
                excelRows[i].category_code = vm.dataSearch.category_code;
            }

            if(vm.dataSearch.category_code == '' || vm.dataSearch.category_code == null){
                alert('You must choose industry first')
            }else{
                StoreService.save({pathMethod: 'import'}, excelRows, function (data) {
                    $state.go($state.current.name, {}, {reload: true});
                }, function (error) {
                    console.log(error)
                });
            }
        };

        function exportTemplate(file){
            window.open(API_CONFIG.FILE_PATH + '/i18n/file/StoreTemplate.xls');
        }

        function deleteItem(id) {

            $uibModal.open({
                animation: true,
                templateUrl: 'app/entities/store/store.alert.html',
                controller: 'StoreAlertController',
                controllerAs: 'vm',
                resolve: {
                    data : function() {
                         return id
                    }
                }
            });
        }

        function addNew() {
            $state.go('store');
        }
    }
})();
