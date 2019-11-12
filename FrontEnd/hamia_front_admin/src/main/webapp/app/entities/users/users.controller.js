
(function() {
    'use strict';

    angular
        .module('reportToolApp')
        .controller('UsersController', UsersController);

    UsersController.$inject = ['$state', 'UsersService', '$localStorage'];

    function UsersController ($state, UsersService, $localStorage) {
        var vm = this;

        vm.lstUser = [];
        vm.searchUser = {};
        vm.userRole = $localStorage.role;

        vm.detail = detail;
        vm.search = search;
        vm.addNew = addNew;


        init();

        function init(){

            loadAllUser();
        }

        function loadAllUser() {
            UsersService.get(function(data){
               var lstUser = data.Data;
               angular.forEach(lstUser, function(element, item){
                    var user = {
                        id: element.ID,
                        username: element.UserName,
                        email: element.Email,
                        firstname: element.FirstName,
                        lastname: element.LastName,
                        role: element.Role,
                    }

                    vm.lstUser.push(user);

               })
            }, function(error){ 
                console.log(error);
            });
        }

        function search(){
            UsersService.query({
                username: vm.searchUser.username,
                email: vm.searchUser.email,
                type: 0
            }, function(data){
                var lstUser = data.Data;
                vm.lstUser = [];

               angular.forEach(lstUser, function(element, item){
                    var user = {
                        id: element.ID,
                        username: element.UserName,
                        email: element.Email,
                        firstname: element.FirstName,
                        lastname: element.LastName,
                        role: element.Role,
                    }

                    vm.lstUser.push(user);
               })
            }, function(error){
                console.log(error);
            });
        }

        function addNew(){
            $state.go('user');
        }

        function detail(id){
            $state.go('user',{id: id});
        }


    }
})();
