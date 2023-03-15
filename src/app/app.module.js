var app = angular.module('app', [
    'ngMessages',
    'ngRoute',
    'ngResource'
]);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'templates/container.html',
            controller: 'containerCtrl'
        })
        .when('/:amount', {
            templateUrl: 'templates/container.html',
            controller: 'containerCtrl'
        })

})