(function() {
    'use strict';

    angular
        .module('reportToolApp')
        .factory('StoreService', StoreService);

    StoreService.$inject = ['$resource'];

    function StoreService ($resource) {
        var service = $resource('api/store/:pathMethod', {}, {
            'get': {
                method: 'GET',
            },
            'update': {
                method: 'POST',
            },
            'save': {
                method: 'POST',
            }
        });

        return service;
    }
})();
