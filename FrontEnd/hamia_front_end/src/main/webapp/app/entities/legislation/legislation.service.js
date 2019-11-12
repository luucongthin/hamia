(function() {
    'use strict';

    angular
        .module('hamiaFrontEndApp')
        .factory('LegislationService', LegislationService);

    LegislationService.$inject = ['$resource'];

    function LegislationService ($resource) {
        var service = $resource('api/legislation/:pathMethod', {}, {
            'get': {
                method: 'GET',
            },
            'update': {
                method: 'POST',
                params:{
                    id: null,
                    category_code: null,
                    page: null,
                    size: 12
                }
            },
            'save': {
                method: 'POST',
            }
        });

        return service;
    }
})();
