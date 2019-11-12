(function() {
    'use strict';

    angular
        .module('reportToolApp')
        .factory('UsersService', UsersService);

    UsersService.$inject = ['$resource'];

    function UsersService ($resource) {
        var service = $resource('api/users/:pathMethod', {}, {
            'get': {
                method: 'GET'
            },
            'query': {
                method: 'GET'
            }
        });

        return service;
    }
})();
