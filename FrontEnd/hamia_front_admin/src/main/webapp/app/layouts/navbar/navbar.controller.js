(function() {
    'use strict';

    angular
        .module('reportToolApp')
        .controller('NavbarController', NavbarController);

    NavbarController.$inject = ['$state', 'Auth', 'Principal', 'ProfileService', 'LoginService'];

    function NavbarController ($state, Auth, Principal, ProfileService, LoginService) {
        var vm = this;

        vm.isNavbarCollapsed = true;
        vm.isAuthenticated = Principal.isAuthenticated();

        vm.login = login;
        vm.logout = logout;
        vm.toggleNavbar = toggleNavbar;
        vm.collapseNavbar = collapseNavbar;
        vm.$state = $state;


        init();

        function init(){
            getAccount();
        }

        function login() {
            collapseNavbar();
            // LoginService.open();
        }

        function getAccount() {
            Principal.identity().then(function (account) {
                vm.account = account;
            });

            // console.log('vm.isAuthenticated', vm.isAuthenticated);


            if(!vm.isAuthenticated){
                $state.go('login');
            }
            //else{
            //     $state.go('store', {}, {reload: true});
            // }
        }

        function logout() {
            collapseNavbar();
            Auth.logout();

            vm.isAuthenticated = false;

            $state.go('login', {}, {reload: true});
        }

        function toggleNavbar() {
            vm.isNavbarCollapsed = !vm.isNavbarCollapsed;
        }

        function collapseNavbar() {
            vm.isNavbarCollapsed = true;
        }
    }
})();
