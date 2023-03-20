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
    function($rootScope) {
        $rootScope.containers   = [];
        $rootScope.itemOpts     = [
            {name: 'Choice 1', dateCreated: new Date(), description: 'test 1', records: []},
            {name: 'Choice 2', dateCreated: new Date(), description: 'test 2', records: []},
            {name: 'Choice 3', dateCreated: new Date(), description: 'test 3', records: []},
        ];
}]);