(function() {
    'use strict';

    angular
        .module('hamiaFrontEndApp')
        .factory('StoreService', StoreService);

    StoreService.$inject = ['$resource'];

    function StoreService ($resource) {
        var service = $resource('api/store/:pathMethod', {}, {
            'get': {
                method: 'GET',
            },
            'update': {
                method: 'POST',
                params:{
                    id: null,
                    category_code: null
                }
            },
            'save': {
                method: 'POST',
            }
        });

        return service;
    }
})();
