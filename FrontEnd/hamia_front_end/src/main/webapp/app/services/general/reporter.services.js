(function() {
    'use strict';

    angular
        .module('hamiaFrontEndApp')
        .factory('ReporterService', ReporterService);

    ReporterService.$inject = ['$resource'];

    function ReporterService ($resource) {
        var service = $resource('api/reporter/:pathMethod', {}, {
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
