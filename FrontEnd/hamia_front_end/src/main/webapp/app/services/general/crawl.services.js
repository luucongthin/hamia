(function() {
    'use strict';

    angular
        .module('hamiaFrontEndApp')
        .factory('CrawlService', CrawlService);

    CrawlService.$inject = ['$resource'];

    function CrawlService ($resource) {
        var service = $resource('api/crawl/:pathMethod', {}, {
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
