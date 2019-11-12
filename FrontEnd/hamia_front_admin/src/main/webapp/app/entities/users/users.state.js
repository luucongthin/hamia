(function() {
    'use strict';

    angular
        .module('reportToolApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('users', {
            parent: 'entity',
            url: '/users',
            data: {
                // authorities: ['ROLE_ADMIN'],
                // pageTitle: 'users.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/users/users.html',
                    controller: 'UsersController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    // $translatePartialLoader.addPart('users');
                    return $translate.refresh();
                }]
            }
        });
    }
})();
