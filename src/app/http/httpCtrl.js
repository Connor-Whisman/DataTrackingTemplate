app.controller('httpCtrl', [
    '$scope',
    '$log',
    '$http',
    function($scope, $log, $http) {    
        const URL   = 'http://localhost:8080/';

        $http.get(URL)
            .then(function(response) {
                    $scope.response = response.data;
                }, function(error) {
                    $log.error('ERROR GETTING DATA');
                }
            )
        $scope.showDataVar = false;
        $scope.showData = function() {
            $scope.showDataVar = !$scope.showDataVar;
        }
    }
]);