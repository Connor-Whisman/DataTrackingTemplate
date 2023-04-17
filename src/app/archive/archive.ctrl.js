archive.controller('archiveCtrl', [
    '$scope',
    'archiveSvc',
    function($scope, archiveSvc) {
        $scope.archiveSvc = archiveSvc;

        $scope.archiveSvc.getArchive();
        

        $scope.archiveSvc.archive.forEach(function(item){
            item.expanded=false;
        })
        $scope.expand = function(item){
            item.expanded = !item.expanded;
        }
}]);