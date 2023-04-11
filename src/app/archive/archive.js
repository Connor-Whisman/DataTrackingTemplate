angular.module('archive', [
    'ngResource'
]);


angular.module('archive')
    .directive('archiveDiv', function() {
        return {
            templateUrl: 'archive/templates/archive.html'
        }
    });


angular.module('archive')
    .controller('archiveCtrl', [
        '$scope', 
        function($scope) {
            $scope.testStr = 'Works';
    }]);

    
