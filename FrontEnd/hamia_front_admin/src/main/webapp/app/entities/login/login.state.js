(function() {
    'use strict';

    angular
        .module('reportToolApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('login', {
            parent: 'entity',
            url: '/login',
            data: {
                // authorities: ['ROLE_ADMIN'],
                // pageTitle: 'login.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/login/login.html',
                    controller: 'LoginUseController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('login');
                    return $translate.refresh();
                }]
            }
        });
    }
})();
