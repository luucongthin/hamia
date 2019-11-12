(function() {
    'use strict';

    angular
        .module('reportToolApp')
        .factory('LoginUserService', LoginUserService);

    LoginUserService.$inject = ['$resource'];

    function LoginUserService ($resource) {
        var service = $resource('api/login', {}, {
            'get': {
                method: 'GET',
                isArray: true
            },
            'query': {
                method: 'GET',
                isArray: true,
                params: {fromDate: null, toDate: null}
            }
        });

        return service;
    }
})();
