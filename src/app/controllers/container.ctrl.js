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

        $scope.newContainer = function() {
            var data = {
                name: "Container X",
                item: {
                    name: "Item X",
                    date: "1-1-23",
                    description: "testing..",
                    records: [
                        {
                            name: "record1",
                            date: "1-1-23",
                            data1: 1,
                            data2: 2,
                            data3: 3
                        },
                        {
                            name: "record2",
                            date: "1-2-23",
                            data1: 1,
                            data2: 2,
                            data3: 3
                        },
                        {
                            name: "record3",
                            date: "1-3-23",
                            data1: 1,
                            data2: 2,
                            data3: 3
                        },
                        {
                            name: "record4",
                            date: "1-4-23",
                            data1: 1,
                            data2: 2,
                            data3: 3
                        }
                    ]
                }
            }
            databaseSvc.saveData(data);            
        }

        
        $log.info('Database Response: ', $scope.database);
    }
]);