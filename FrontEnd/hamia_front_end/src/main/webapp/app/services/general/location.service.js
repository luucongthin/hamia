(function() {
    'use strict';

    angular
        .module('hamiaFrontEndApp')
        .factory('LocationService', LocationService);

    LocationService.$inject = ['$resource'];

    function LocationService ($resource) {
        var service = $resource('api/ward/:pathMethod', {}, {
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
