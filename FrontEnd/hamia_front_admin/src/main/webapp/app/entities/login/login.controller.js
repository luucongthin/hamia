
(function() {
    'use strict';

    angular
        .module('reportToolApp')
        .controller('LoginUseController', LoginUseController);

    LoginUseController.$inject = ['$state', '$rootScope', 'LoginUserService', 'Auth'];

    function LoginUseController ($state, $rootScope, LoginUserService, Auth) {
        var vm = this;

        vm.username = null;
        vm.password = null;

        vm.login = login;

        vm.authenticationError = false;

        function login () {
            Auth.login({
                username: vm.username,
                password: vm.password,
                rememberMe: vm.rememberMe,
                page: 'admin'
            }).then(function () {
                vm.authenticationError = false;
                $state.go('stores', {}, {reload: true});
                // if ($state.current.name === 'register' || $state.current.name === 'activate' ||
                //     $state.current.name === 'finishReset' || $state.current.name === 'requestReset') {
                //     $state.go('store');
                // }

                $rootScope.$broadcast('authenticationSuccess');

                // // previousState was set in the authExpiredInterceptor before being redirected to login modal.
                // // since login is successful, go to stored previousState and clear previousState
                // if (Auth.getPreviousState()) {
                //     var previousState = Auth.getPreviousState();
                //     Auth.resetPreviousState();
                //     $state.go(previousState.name, previousState.params);
                // }
            }).catch(function () {
                vm.authenticationError = true;
            });
        }

    }
})();
