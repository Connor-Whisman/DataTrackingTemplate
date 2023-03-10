app.controller('containerCtrl', [
    '$scope',
    '$log',
    '$routeParams',
    '$location',
    'databaseSvc',
    function($scope, $log, $routeParams, $location, databaseSvc) {
        $scope.length = $routeParams.length || 1;
        console.log($routeParams.length);
        $scope.database = databaseSvc.getData($scope.length);

        // $scope.$watch('$routeParams.length', function() {
        //     $routeParams.length = $scope.length;
        //     // $scope.length = $routeParams.length;
        // });

        $scope.getContainers = function() {
            $location.url('/'+ $scope.length);
            $scope.database = databaseSvc.getData($scope.length);
        }

        
        $log.info('Database Response: ', $scope.database);
    }
]);