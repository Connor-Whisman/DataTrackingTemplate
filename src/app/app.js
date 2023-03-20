var app = angular.module('app', [
    'ngMessages',
    'ngRoute',
    'ngResource'
]);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'container/container.html',
            controller: 'containerCtrl'
        })
        // .when('/:amount', {
        //     templateUrl: 'container/container.html',
        //     controller: 'containerCtrl'
        // })

})

app.controller('appCtrl', [
    '$rootScope',
    '$log',
    function($rootScope, $log) {
        $rootScope.containers = [];
        
        $rootScope.logInfo = function(string, obj) {
            var data = obj;
            $log.info(string, obj);
        }
}]);