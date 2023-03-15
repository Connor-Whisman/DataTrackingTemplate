app.controller('containerCtrl', [
    '$scope',
    '$log',
    '$routeParams',
    '$location',
    'databaseSvc',
    function($scope, $log, $routeParams, $location, databaseSvc) {
        var total;

        $scope.amount = Number($routeParams.amount) || 1;
        
        $scope.database = databaseSvc.getData($scope.amount);
        
        $scope.database.$promise.then(function() {
            $scope.containers = $scope.database.containers;
            console.log($scope.containers);
            total = $scope.database.total;
        })
        

        

        $scope.getContainers = function() {
            $location.url('/'+ $scope.amount);
        }

        $scope.newContainer = function() {
            var newTotal  = total + 1;
            var data = {
                name: `Container ${newTotal}`,
                item: {
                    name: "Item X",
                    date: new Date(),
                    description: "testing..",
                    records: []
                }
            }
            databaseSvc.saveData(data);
            
            $location.url('/'+ newTotal);
        }

        
        $log.info('Database Response: ', $scope.database);
    }
]);