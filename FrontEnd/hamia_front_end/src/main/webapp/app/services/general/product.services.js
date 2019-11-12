(function() {
    'use strict';

    angular
        .module('hamiaFrontEndApp')
        .factory('ProductService', ProductService);

    ProductService.$inject = ['$resource'];

    function ProductService ($resource) {
        var service = $resource('api/product/:pathMethod', {}, {
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
