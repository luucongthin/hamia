(function() {
    'use strict';

    angular
        .module('reportToolApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('legislations', {
            parent: 'entity',
            url: '/legislations',
            data: {
                // authorities: ['ROLE_ADMIN'],
                // pageTitle: 'legislations.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/legislations/legislations.html',
                    controller: 'LegislationsController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    // $translatePartialLoader.addPart('legislations');
                    return $translate.refresh();
                }]
            }
        });

        $stateProvider.state('legislation', {
            parent: 'entity',
            url: '/legislation/{id}',
            data: {
                // authorities: ['ROLE_ADMIN'],
                // pageTitle: 'legislations.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/legislations/legislation.detail.html',
                    controller: 'LegislationDetailController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    // $translatePartialLoader.addPart('legislations');
                    return $translate.refresh();
                }]
            }
        });
    }
})();
