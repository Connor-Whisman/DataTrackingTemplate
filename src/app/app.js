var app = angular.module('app', [
    'ngMessages',
    'ngRoute',
    'ngResource'
]);


app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'container/container.html'
        })
})


app.controller('appCtrl', [
    '$rootScope',
    '$log',
    'databaseSvc',
    function($rootScope, $log, databaseSvc) {
        
    }
]);