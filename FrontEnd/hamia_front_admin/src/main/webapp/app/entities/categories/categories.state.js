(function() {
    'use strict';

    angular
        .module('reportToolApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('categories', {
            parent: 'entity',
            url: '/categories',
            data: {
                // authorities: ['ROLE_ADMIN'],
                // pageTitle: 'categories.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/categories/categories.html',
                    controller: 'CategoriesController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    // $translatePartialLoader.addPart('categories');
                    return $translate.refresh();
                }]
            }
        });
    }
})();
