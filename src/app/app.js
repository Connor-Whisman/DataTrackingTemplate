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
        .when('/:amount', {
            templateUrl: 'container/container.html',
            controller: 'containerCtrl'
        })

})

app.controller('appCtrl', [
    '$scope',
    function($scope) {
        $scope.title = "Home";
}]);