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
        .when('/:length', {
            templateUrl: 'templates/container.html',
            controller: 'containerCtrl'
        })

})