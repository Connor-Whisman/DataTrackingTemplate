app.controller('containerCtrl', [
    '$scope',
    '$log',
    '$routeParams',
    '$location',
    'databaseSvc',
    function($scope, $log, $routeParams, $location, databaseSvc) {
        $scope.length = Number($routeParams.length) || 1;
        
        $scope.database = databaseSvc.getData($scope.length);
        $scope.database.$promise.then(function() {
            $scope.containers = $scope.database.containers;
            console.log($scope.containers);
        })

        

        $scope.getContainers = function() {
            $location.url('/'+ $scope.length);
        }

        
        $log.info('Database Response: ', $scope.database);
    }
]);