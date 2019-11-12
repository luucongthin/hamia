(function() {
    'use strict';

    angular
        .module('hamiaFrontEndApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('legislation', {
            parent: 'entity',
            url: '/legislation/{industry}',
            data: {
                // authorities: ['ROLE_ADMIN'],
                // pageTitle: 'legislation.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/legislation/legislation.html',
                    controller: 'LegislationController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    // $translatePartialLoader.addPart('legislation');
                    return $translate.refresh();
                }]
            }
        });
    }
})();
