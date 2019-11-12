(function() {
    'use strict';

    angular
        .module('reportToolApp')
        .factory('authInterceptor', authInterceptor);

    authInterceptor.$inject = ['$rootScope', '$q', '$location', '$localStorage', '$sessionStorage'];

    function authInterceptor ($rootScope, $q, $location, $localStorage, $sessionStorage) {
        var service = {
            request: request
        };

        return service;

        function request (config) {
            /*jshint camelcase: false */
            config.headers = config.headers || {};

            //set Root URI API
            if (config.url.indexOf('api') != -1) {
                config.url = API_CONFIG.API_URL + '/' + config.url;
            }
            
            var token = $localStorage.authenticationToken || $sessionStorage.authenticationToken;
            if (token) {
                config.headers.Authorization = 'Bearer ' + token;
            }
            return config;
        }
    }
})();
