var app = angular.module('app', [
    'ngMessages',
    'ngRoute',
    'ngResource'
]);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/containerPage.html'
        })
        .when('/automation', {
            templateUrl: 'pages/automationPage.html'
        })
})

app.controller('appCtrl', [
    '$rootScope',
    function($rootScope) {
        $rootScope.totalContainers  = 0;
        $rootScope.containers       = [];
        $rootScope.itemOpts         = [];

        // $rootScope.automation       = {};
        
    }
]);