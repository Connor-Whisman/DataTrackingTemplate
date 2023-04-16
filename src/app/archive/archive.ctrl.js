archive.controller('archiveCtrl', [
    '$scope',
    'archiveSvc',
    function($scope, archiveSvc) {
        $scope.archiveSvc = archiveSvc;

        $scope.expanded = true;

        $scope.expand = function(log){
            console.log(log);
        }

        $scope.archiveSvc.getArchive();
}]);