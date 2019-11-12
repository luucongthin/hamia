(function() {
    'use strict';

    angular
        .module('hamiaFrontEndApp')
        .factory('MeansuerService', MeansuerService);

    MeansuerService.$inject = ['$resource'];

    function MeansuerService ($resource) {
        var service = $resource('api/meansuer/:pathMethod', {}, {
            'get': {
                method: 'GET',
            },
            'update': {
                method: 'POST',
                params:{
                    reporter: null,
                    category_code: null,
                    product: null,
                    page: null,
                    size: 12,
                }
            },
            'save': {
                method: 'POST',
            }
        });

        return service;
    }
})();
