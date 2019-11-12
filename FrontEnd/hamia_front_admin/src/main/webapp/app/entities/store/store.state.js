(function() {
    'use strict';

    angular
        .module('reportToolApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('stores', {
            parent: 'entity',
            url: '/stores',
            data: {
                // authorities: ['ROLE_ADMIN'],
                // pageTitle: 'store.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/store/store.html',
                    controller: 'StoreController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    // $translatePartialLoader.addPart('store');
                    return $translate.refresh();
                }]
            }
        });

        $stateProvider.state('store', {
            parent: 'entity',
            url: '/store/{id}',
            data: {
                // authorities: ['ROLE_ADMIN'],
                // pageTitle: 'store.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/store/store.detail.html',
                    controller: 'StoreDetailController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    // $translatePartialLoader.addPart('store');
                    return $translate.refresh();
                }]
            }
        });
    }
})();
