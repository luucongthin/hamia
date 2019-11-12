(function () {
    'use strict';

    angular
        .module('hamiaFrontEndApp')
        .controller('StoreController', StoreController);

    StoreController.$inject = ['$scope', 'StoreService', 'LocationService', '$localStorage', 'NgMap', '$stateParams'];

    function StoreController($scope, StoreService, LocationService, $localStorage, NgMap, $stateParams) {
        var vm = this;

        vm.lstStore = [];
        vm.lstCity = [{
            CityCode: "00",
            CityName: "Tất cả"
        }];
        vm.lstDistrict = [{
            DistrictCode: "000",
            DistrictName: "Tất cả"
        }];
        vm.lstWard = [{
            WardCode: "00000",
            WardName: "Tất cả"
        }];

        vm.lstStorePage = [];

        vm.dataSearch = {
            city_code: '00',
            district_code : '000',
            ward_code: '00000'
        }

        vm.lstCount = [];
        vm.lstCalculate = [];
        vm.industry = $stateParams.industry;
        vm.industryName = $localStorage.industryName;
        vm.isStart = 0;
        
        vm.url = ''
        vm.userRole = $localStorage.role ? $localStorage.role : '';

        vm.area = 0;
        vm.popular = 0;
        vm.markerNumber= 1;
        vm.distance = 0;
        vm.countStoreCity = 0;
        vm.countStoreDistrict = 0;
        vm.countCalculate = 0;

        vm.destinationA = '';
        vm.destinationB = '';
        vm.origin1 = '';
        vm.origin2 = '';
        vm.center = 'B1 Tô Hiệu, Nghĩa Tân, Cầu Giấy, Hà Nội , Việt Nam';

        vm.searchStore = searchStore;
        vm.searchStorePage = searchStorePage;
        vm.calculateDistance = calculateDistance;
        vm.citySelected  = citySelected;
        vm.districtSelected = districtSelected;
        vm.wardSelected = wardSelected;
        vm.startStop = startStop;
        vm.continute = continute;


        init();

        function init(){
            loadAllCity();
        }

        function searchStore() {

            if(vm.userRole.toUpperCase() == 'FREE USER' || vm.userRole.toUpperCase() == ''){
                alert('Đề nghị nâng cấp tài khoản để nhận kết quả ')
            }else{
                countStore();
                searchStorePage();

                vm.lstStore = [];
                vm.url = API_CONFIG.KMZ_URL + vm.dataSearch.city_code +'.kmz';

                StoreService.get({
                    pathMethod: 'front',
                    category_code: vm.industry,
                    city_code: vm.dataSearch.city_code != '00' ? vm.dataSearch.city_code : null,
                    district_code: vm.dataSearch.district_code != '000' ? vm.dataSearch.district_code : null,
                    ward_code: vm.dataSearch.ward_code != '00000' ? vm.dataSearch.ward_code : null,
                    page: vm.page,
                    size: 1000000
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
                    vm.center = data.Data.length > 0 ? data.Data[0].Adress : vm.center;
    
                    setTimeout(function(){
                        NgMap.getMap().then(function(map) {
                            map.setZoom(14);
                        })
                    }, 500)

                }, function (error) {
                    console.log(error)
                });
            }
        }

        function searchStorePage() {
                vm.lstStorePage = [];

                StoreService.get({
                    pathMethod: 'front',
                    category_code: vm.industry,
                    city_code: vm.dataSearch.city_code != '00' ? vm.dataSearch.city_code : null,
                    district_code: vm.dataSearch.district_code != '000' ? vm.dataSearch.district_code : null,
                    ward_code: vm.dataSearch.ward_code != '00000' ? vm.dataSearch.ward_code : null,
                    page: vm.page,
                    size: 12
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
                        vm.lstStorePage.push(item);
                    });
    
                    vm.total = data.Error.Code;

                }, function (error) {
                    console.log(error)
                });
        }

        function countStore() {
                StoreService.get({
                    pathMethod: 'count',
                    category_code: vm.industry,
                    city_code: vm.dataSearch.city_code != '00' ? vm.dataSearch.city_code : null,
                    district_code: vm.dataSearch.district_code != '000' ? vm.dataSearch.district_code : null,
                    ward_code: vm.dataSearch.ward_code != '00000' ? vm.dataSearch.ward_code : null,
                    page: vm.page,
                    size: 1000000
                }, function (data) {
                    vm.lstCount = data.Data;
                })
        }

        function calculateDistance(){
            var itemStart = {};
            var itemEnd = {};
            vm.startItem = vm.startItem ? vm.startItem : '';
            vm.endItem =vm.endItem ?vm.endItem : '';

            if(vm.countCalculate <= 10){
                if(vm.startItem != '' && vm.endItem != ''){
                    for(var i = 0; i < vm.lstStore.length; i++){
                        if(vm.lstStore[i].id == vm.startItem){
                            
                            vm.destinationA = vm.lstStore[i].adress;
                            vm.origin1 = vm.lstStore[i].adress;
                            vm.startTitle = vm.lstStore[i].name;
        
                            itemStart = angular.copy(vm.lstStore[i]);
                            itemStart.isStart = true;
                            itemStart.count = vm.countCalculate;
                        }
        
                        if(vm.lstStore[i].id == vm.endItem){
                            vm.destinationB = vm.lstStore[i].adress;
                            vm.origin2 = vm.lstStore[i].adress;
                            vm.endTitle = vm.lstStore[i].name;
        
                            itemEnd = angular.copy(vm.lstStore[i]);
                            itemEnd.count = vm.countCalculate;
                        }
                    }
        
                    var service = new google.maps.DistanceMatrixService();
                    service.getDistanceMatrix(
                    {
                        origins: [vm.origin1, vm.origin2],
                        destinations: [vm.destinationA, vm.destinationB],
                        travelMode: 'DRIVING'
                    }, callback);
        
                    function callback(response) {
                        if(response.rows.length > 0){
        
                            $scope.$apply(function(){
                                vm.drive = response.rows[0].elements[1].distance.text;
                                vm.minuteDrive = response.rows[0].elements[1].duration.text;
        
                                itemStart.drive = response.rows[0].elements[1].distance.text;
                                itemStart.minuteDrive = response.rows[0].elements[1].duration.text;
        
                                vm.lstCalculate.push(itemStart);
                                vm.lstCalculate.push(itemEnd);
                            });
                        }
                    }

                    vm.countCalculate += 1;
                }else{
                    alert('Chưa chọn địa điểm');
                }
                
            }else{
                alert('Vượt quá số lần tìm cho phép');
            }
        }

        function loadAllCity(){
            LocationService.get({
                pathMethod: 'suggestcity'
            },function(data){
                angular.forEach(data.Data, function(element){
                    vm.lstCity.push(element);
                })
            });
        }

        function citySelected(){

            vm.dataSearch.district_code = '000';
            vm.dataSearch.ward_code = '00000';

            vm.dataSearch.district_name = '';
            vm.dataSearch.ward_name = '';

            angular.forEach(vm.lstCity, function(element){
                if(element.CityCode == vm.dataSearch.city_code){
                    vm.dataSearch.city_name = element.CityName;
                }
            });

            loadDistrictByCity();
        }

        function districtSelected(){
            vm.dataSearch.ward_code = '00000';
            vm.dataSearch.ward_name = '';

            angular.forEach(vm.lstDistrict, function(element){
                if(element.DistrictCode == vm.dataSearch.district_code){
                    vm.dataSearch.district_name = element.DistrictName;
                }
            });

            loadByWardDistrict();
        }

        function wardSelected(){
            
            angular.forEach(vm.lstWard, function(element){
                if(element.WardCode == vm.dataSearch.ward_code){
                    vm.area = element.Area;
                    vm.popular = element.Population;
                    vm.dataSearch.ward_name = element.WardName;
                }
            });
        }

        function loadDistrictByCity(){
            LocationService.get({
                pathMethod: 'suggestdistrict',
                city_code: vm.dataSearch.city_code != '00' ? vm.dataSearch.city_code : null
            }, function (data) {
                vm.lstDistrict = [{
                    DistrictCode: "000",
                    DistrictName: "Tất cả"
                }];

                angular.forEach(data.Data, function(element){
                    vm.lstDistrict.push(element);
                })
            });
        }


        function loadByWardDistrict(){
            return LocationService.get({
                pathMethod: 'suggestward',
                city_code: vm.dataSearch.city_code != '00' ? vm.dataSearch.city_code : null,
                district_code: vm.dataSearch.district_code != '000' ? vm.dataSearch.district_code : null
            }, function (data) {
                
                vm.lstWard = [{
                    WardCode: "00000",
                    WardName: "Tất cả"
                }];

                 angular.forEach(data.Data, function(element){
                    vm.lstWard.push(element);
                })
            });
        }

        function startStop(type){
            vm.isStart = type;
        }

        function continute(){
            var btn_kq = angular.element('#btn_kq');
            var csroll = btn_kq.offset();
            $(window).scrollTop(csroll.top - 300);
        }

        NgMap.getMap().then(function(map) {
            vm.showCustomMarker= function(evt) {
              map.customMarkers.foo.setVisible(true);
              map.customMarkers.foo.setPosition(this.getPosition());
            };

            vm.closeCustomMarker= function(evt) {
              this.style.display = 'none';
            };
        });
    }
})();
