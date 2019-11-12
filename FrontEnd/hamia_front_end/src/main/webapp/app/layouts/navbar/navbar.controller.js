(function() {
    'use strict';

    angular
        .module('hamiaFrontEndApp')
        .controller('NavbarController', NavbarController);

    NavbarController.$inject = ['$state', 'Auth', 'Principal', 'ProfileService', 'LoginService', '$scope', '$localStorage'];

    function NavbarController ($state, Auth, Principal, ProfileService, LoginService, $scope, $localStorage) {
        var vm = this;

        vm.isNavbarCollapsed = true;
        vm.isShowNav = true;
        vm.isAuthenticated = Principal.isAuthenticated;
        vm.account = {};

        ProfileService.getProfileInfo().then(function(response) {
            vm.inProduction = response.inProduction;
            vm.swaggerEnabled = response.swaggerEnabled;
        });

        vm.login = login;
        vm.logout = logout;
        vm.toggleNavbar = toggleNavbar;
        vm.collapseNavbar = collapseNavbar;
        vm.$state = $state;
        vm.stateGo = stateGo;
        vm.register = register;

        $scope.$watch(function(){
            switch ($state.current.name){
                case 'home':
                    vm.isShowNav = false;
                    break;
                default:
                    vm.isShowNav = true;
                    break;
            }
        })

        init();

        function init(){
            getAccount();
        }

        function register(){
            $state.go('register');
        }

        function getAccount() {
            Principal.identity().then(function (account) {
                vm.account = account;
            });
        }

        function login() {
            // collapseNavbar();
            LoginService.open();
        }

        function logout() {
            // collapseNavbar();
            vm.account = {};
            Auth.logout();
            $state.go('home');
        }

        function toggleNavbar() {
            vm.isNavbarCollapsed = !vm.isNavbarCollapsed;
        }

        function stateGo(link){
            $state.go(link, {industry: $localStorage.industry})
        }

        function collapseNavbar() {
            vm.isNavbarCollapsed = true;
        }
    }
})();
