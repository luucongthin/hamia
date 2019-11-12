(function() {
    'use strict';

    angular
        .module('reportToolApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('user', {
            parent: 'entity',
            url: '/user/:id',
            data: {
                // authorities: ['ROLE_ADMIN'],
                // pageTitle: 'user.title'
                id: null
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/user/user.html',
                    controller: 'UserController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    // $translatePartialLoader.addPart('user');
                    return $translate.refresh();
                }]
            }
        });
    }
})();
