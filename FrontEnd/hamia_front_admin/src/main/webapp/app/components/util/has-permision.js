
(function() {
    'use strict';

    angular
        .module('reportToolApp')
        .directive('hasPermission', hasPermission);

    hasPermission.$inject = ['Principal', '$localStorage'];

    function hasPermission(Principal, $localStorage) {
        var directive = {
            restrict: 'A',
            link: linkFunc
        };

        return directive;

        function linkFunc(scope, element, attrs) {
            var authority = attrs.hasPermission.replace(/\s+/g, '');
            var permission = $localStorage.permission;

            var setVisible = function () {
                    element.removeClass('hidden');
                },
                setHidden = function () {
                    element.addClass('hidden');
                },
                defineVisibility = function (reset) {

                    if (reset) {
                        setVisible();
                    }

                    if(permission.indexOf(authority) != -1){
                        setVisible();
                    }else{
                        setHidden();
                    }

                    // Principal.hasAuthority(authority)
                    //     .then(function (result) {
                    //         if (result) {
                    //             setVisible();
                    //         } else {
                    //             setHidden();
                    //         }
                    //     });


                };

            if (authority.length > 0) {
                defineVisibility(true);

                scope.$watch(function() {
                    return Principal.isAuthenticated();
                }, function() {
                    defineVisibility(true);
                });
            }
        }
    }
})();