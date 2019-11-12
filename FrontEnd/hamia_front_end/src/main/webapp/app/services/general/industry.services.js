(function() {
    'use strict';

    angular
        .module('hamiaFrontEndApp')
        .factory('IndustryService', IndustryService);

    IndustryService.$inject = ['$resource'];

    function IndustryService ($resource) {
        var service = $resource('api/categories/:pathMethod', {}, {
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
