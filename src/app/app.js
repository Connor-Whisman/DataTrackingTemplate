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
})

app.controller('appCtrl', [
    '$rootScope',
    function($rootScope) {
        $rootScope.totalContainers = 0;
        $rootScope.containers = [];
        $rootScope.itemOpts     = [];
    }
]);