(function() {
    'use strict';

    angular
        .module('hamiaFrontEndApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('store', {
            parent: 'entity',
            url: '/store/{industry}',
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
    }
})();
