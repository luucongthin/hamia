(function() {
    'use strict';

    angular
        .module('reportToolApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('locations', {
            parent: 'entity',
            url: '/locations',
            data: {
                // authorities: ['ROLE_ADMIN'],
                // pageTitle: 'location.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/location/location.html',
                    controller: 'LocationController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    // $translatePartialLoader.addPart('location');
                    return $translate.refresh();
                }]
            }
        });

        $stateProvider.state('location', {
            parent: 'entity',
            url: '/location/{id}',
            data: {
                // authorities: ['ROLE_ADMIN'],
                // pageTitle: 'location.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/location/location.detail.html',
                    controller: 'LocationDetailController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    // $translatePartialLoader.addPart('location');
                    return $translate.refresh();
                }]
            }
        });
    }
})();
