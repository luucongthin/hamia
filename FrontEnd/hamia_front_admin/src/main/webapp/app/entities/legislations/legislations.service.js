(function() {
    'use strict';

    angular
        .module('reportToolApp')
        .factory('LegislationsService', LegislationsService);

    LegislationsService.$inject = ['$resource'];

    function LegislationsService ($resource) {
        var service = $resource('api/legislation/:pathMethod', {}, {
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
