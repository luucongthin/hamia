(function() {
    'use strict';

    angular
        .module('reportToolApp')
        .controller('UserController', UserController);

    UserController.$inject = ['$state', '$stateParams', 'UserService', 'UsersService'];

    function UserController ($state, $stateParams, UserService, UsersService) {
        var vm = this;

        vm.back = back;
        vm.update = update;
        vm.userId = $stateParams.id ? $stateParams.id : 0;
        vm.userInfo = {};
        vm.lstRole = [];


        init();

        function init(){
            getAllRole();
            if(vm.userId != 0){
                getUserInfo();
            }
        }

        function back(){
            $state.go('users');
        }

        function getUserInfo(){
            UserService.query({
                id: vm.userId
            },function(data){

                vm.userInfo.id = data.data.Data.ID;
                vm.userInfo.username = data.data.Data.UserName;
                vm.userInfo.email = data.data.Data.Email;
                vm.userInfo.first_name = data.data.Data.FirstName;
                vm.userInfo.last_name = data.data.Data.LastName;
                vm.userInfo.role = data.data.Data.Role;

            }, function(error){
                console.log(error);
            })
        }

        function getAllRole(){
            UsersService.query({
                pathMethod: 'roles'
            },function(data){

                vm.lstRole = data.Data;
                
                console.log('vm.lstRole', vm.lstRole);

            }, function(error){
                console.log(error);
            })
        }

        function update(type){
            vm.userInfo.password = vm.userInfo.new_password ? vm.userInfo.new_password : "" ;
            
            var pathMethod = type ==0 ? 'create': 'update';

            UserService.update({
                pathMethod: pathMethod
            },vm.userInfo, function(response){
                var error = response.Error;
                if(error){
                    vm.errorMessage = error.Message;
                }else{
                    $state.go($state.current.name,{}, {reload: true});
                }
            }, function(error){
                console.log(error)
            })
        }
    }
})();
