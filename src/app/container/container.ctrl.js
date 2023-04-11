container.controller('containerCtrl', [
    '$rootScope',
    '$scope',
    '$log',
    '$location',
    'containerSvc',
    'databaseSvc',
    function($rootScope, $scope, $log, $location, containerSvc, databaseSvc) {

        $scope.containerSvc = containerSvc;

        // // ------ CREATE NEW CONTAINER OBJ ------
        // $scope.newContainer = function() {
        //     $rootScope.totalContainers += 1;
        //     var total = $rootScope.totalContainers;
        //     var name = `Container ${total}`;
        //     var container = new Container(name);

        //     $rootScope.containers.push(container);
        //     databaseSvc.saveData();

        //     $log.info('New Container Added: ', container);
        // }
    }
]);