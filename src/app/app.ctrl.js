app.controller('appCtrl', [
    '$scope',
    '$log',
    function($scope, $log) {

        $scope.logWarning = function(msg) {
            $log.warn(msg);
        }

        $scope.interpolationStr = "Home";    
}]);