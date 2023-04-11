angular.module('archive', [])

    .directive('archiveDiv', function() {
        return {
            templateUrl: 'archive/templates/archive.html'
        }
    })

    .controller('archiveCtrl', [
        '$scope', 
        function($scope) {
            $scope.testStr = 'Works';
    }]);





