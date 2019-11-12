(function() {
    'use strict';

    angular
        .module('reportToolApp')
        .factory('UserService', UserService);

    UserService.$inject = ['$resource'];

    function UserService ($resource) {
        var service = $resource('api/user/:pathMethod/:id',{},{
            'get': {
                method: 'GET',
                isArray: true
            },
            'query': {
                method: 'GET',
                interceptor: {
                    response: function(response) {
                        // expose response
                        return response;
                    }
                }
            },
            'update': {
                method: 'POST',
                interceptor: {
                    response: function(response) {
                        // expose response
                        return response;
                    }
                }
            }
        });

        return service;
    }
})();
