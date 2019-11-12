(function() {
    'use strict';

    angular
        .module('hamiaFrontEndApp')
        .controller('RegisterController', RegisterController);


    RegisterController.$inject = ['$translate', '$timeout', 'Auth', 'LoginService', 'Register'];

    function RegisterController ($translate, $timeout, Auth, LoginService, Register) {
        var vm = this;

        vm.doNotMatch = null;
        vm.error = null;
        vm.errorUserExists = null;
        vm.login = LoginService.open;
        vm.register = register;
        vm.registerAccount = {};
        vm.success = null;

        $timeout(function (){angular.element('#login').focus();});

        // function register () {
        //     if (vm.registerAccount.password !== vm.confirmPassword) {
        //         vm.doNotMatch = 'ERROR';
        //     } else {
        //         vm.registerAccount.langKey = $translate.use();
        //         vm.doNotMatch = null;
        //         vm.error = null;
        //         vm.errorUserExists = null;
        //         vm.errorEmailExists = null;

        //         Auth.createAccount(vm.registerAccount).then(function () {
        //             vm.success = 'OK';
        //         }).catch(function (response) {
        //             vm.success = null;
        //             if (response.status === 400 && angular.fromJson(response.data).type === errorConstants.LOGIN_ALREADY_USED_TYPE) {
        //                 vm.errorUserExists = 'ERROR';
        //             } else if (response.status === 400 && angular.fromJson(response.data).type === errorConstants.EMAIL_ALREADY_USED_TYPE) {
        //                 vm.errorEmailExists = 'ERROR';
        //             } else {
        //                 vm.error = 'ERROR';
        //             }
        //         });
        //     }
        //}


        function register(){

            var userData = {
                username: vm.registerAccount.login,
                email: vm.registerAccount.email,
                first_name: vm.registerAccount.fisrtName,
                last_name: vm.registerAccount.lastName,
                password:  vm.registerAccount.password,
                role: 'Free User',
            }
            
            Register.update({
                pathMethod: 'create'
            }, userData, function(data){
                console.log('data', data);
            }, function(error){
                console.log(error)
            })
        }
    }
})();
