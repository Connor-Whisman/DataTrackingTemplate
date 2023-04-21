archive.controller('archiveCtrl', [
    '$scope',
    'archiveSvc',
    '$timeout',
    function($scope, archiveSvc, $timeout) {
        $scope.archiveSvc = archiveSvc;

        $scope.archiveSvc.getArchive();
        

        $scope.archiveSvc.archive.forEach(function(item){
            item.expanded = false;
        });
        


        $scope.expand = function(item){
            item.expanded = !item.expanded;
        }
}]);