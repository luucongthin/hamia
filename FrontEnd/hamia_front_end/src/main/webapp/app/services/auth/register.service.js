(function () {
    'use strict';

    angular
        .module('hamiaFrontEndApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        var service = $resource('api/user/:pathMethod',{},{
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
