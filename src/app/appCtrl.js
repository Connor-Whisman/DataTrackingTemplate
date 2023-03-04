app.controller('appCtrl', [
    '$scope',
    '$log',
    function($scope, $log) {

        $scope.logData = function() {
            $log.warn($scope.default);
        }
        // $scope.logData();

        $scope.titleField = String($scope.default);
        $scope.interpolationStr = "Home";
    
}]);