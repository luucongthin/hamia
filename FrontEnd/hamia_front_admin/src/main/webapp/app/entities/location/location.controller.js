(function () {
    'use strict';

    angular
        .module('reportToolApp')
        .controller('LocationController', LocationController);

    LocationController.$inject = ['$filter', 'LocationService', '$uibModal', '$state', 'FileSaver'];

    function LocationController($filter, LocationService, $uibModal, $state, FileSaver) {
        var vm = this;

        vm.lstLocation = []
        vm.fileImport = null;
        vm.dataSearch = {};
        vm.page = 1;
        vm.total = 0;

        vm.addNew = addNew;
        vm.search = search;
        vm.deleteItem = deleteItem;
        vm.importFile = importFile;
        vm.exportTemplate = exportTemplate;
        vm.selectFile=  selectFile;
        vm.loadSuggestCity = loadSuggestCity;
        vm.selestSuggestCity = selestSuggestCity;
        vm.loadSuggestDistrict = loadSuggestDistrict;
        vm.selestSuggestDistrict = selestSuggestDistrict;


        init();

        function init() {
            loadAll();
        }

        function loadAll() {
            LocationService.get({
                page: vm.page
            },function (data) {
                angular.forEach(data.Data, function(element, index){
                    var item = {
                        id: element.ID,
                        wardCode: element.WardCode,
                        wardName: element.WardName,
                        type: element.Type,
                        districtCode: element.DistrictCode,
                        districtName: element.DistrictName,
                        cityCode: element.CityCode,
                        cityName: element.CityName,
                        population: element.Population,
                        area: element.Area,
                    }
                    vm.lstLocation.push(item);
                });

                vm.total = data.Error.Code;
            });
        }

        function loadSuggestCity(val){
            return LocationService.get({
                pathMethod: 'suggestcity',
                city_name: val != '' ? val : null
            }).$promise.then(function (data) {
                return data.Data;
            });
        }

        function selestSuggestCity($item, $model, $label, $event){
            vm.dataSearch.city_code = $item.CityCode;
            // vm.dataSearch.category_code = $item.Code;
        }

        function loadSuggestDistrict(val){
            return LocationService.get({
                pathMethod: 'suggestdistrict',
                city_code: vm.dataSearch.city_code != '' ? vm.dataSearch.city_code : null,
                district_name: val != '' ? val : null
            }).$promise.then(function (data) {
                return data.Data;
            });
        }

        function selestSuggestDistrict($item, $model, $label, $event){
            vm.dataSearch.district_code = $item.DistrictCode;
            // vm.dataSearch.category_code = $item.Code;
        }

        function search(type) {
            vm.lstLocation = [];

            vm.page = type == 1 ? 1 : vm.page;

            LocationService.get({
                city_code: vm.dataSearch.city_code != '' ? vm.dataSearch.city_code : null,
                district_code: vm.dataSearch.district_code != '' ? vm.dataSearch.district_code : null,
                ward_name: vm.dataSearch.ward != '' ? vm.dataSearch.ward : null,
                page: vm.page
            }, function (data) {
                angular.forEach(data.Data, function(element, index){
                    var item = {
                        id: element.ID,
                        wardCode: element.WardCode,
                        wardName: element.WardName,
                        type: element.Type,
                        districtCode: element.DistrictCode,
                        districtName: element.DistrictName,
                        cityCode: element.CityCode,
                        cityName: element.CityName,
                        population: element.Population,
                        area: element.Area,
                    }
                    vm.lstLocation.push(item);
                });
                vm.total = data.Error.Code;

            }, function (error) {
                console.log(error)
            });
        }


        function selectFile (file) {
            vm.fileImport = file;
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
            console.log('excelRows', excelRows);
            
            LocationService.save({pathMethod: 'import'}, excelRows, function (data) {
                    $state.go($state.current.name, {}, {reload: true});
                }, function (error) {
                    console.log(error)
                });
        };

        function exportTemplate(){
            window.open(API_CONFIG.FILE_PATH + '/i18n/file/LocationTemplate.xls');
        }

        function deleteItem(id) {

            $uibModal.open({
                animation: true,
                templateUrl: 'app/entities/location/location.alert.html',
                controller: 'LocationAlertController',
                controllerAs: 'vm',
                resolve: {
                    data : function() { 
                         return id
                    }
                }
            });
        }

        function addNew() {
            $state.go('location')
        }
    }
})();
