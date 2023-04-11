var archive = angular.module('archive', [
    'ngResource'
]);


archive.directive('archiveDiv', function() {
        return {
            templateUrl: 'archive/templates/archive.html'
        }
    });
