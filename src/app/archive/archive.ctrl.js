archive.controller('archiveCtrl', [
    '$scope',
    'archiveSvc',
    function($scope, archiveSvc) {
        $scope.archiveSvc = archiveSvc;
        $scope.archiveSvc.getArchive();
}]);