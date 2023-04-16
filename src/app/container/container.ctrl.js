container.controller('containerCtrl', [
    '$rootScope',
    '$scope',
    '$log',
    '$location',
    'containerSvc',
    'databaseSvc',
    function($rootScope, $scope, $log, $location, containerSvc, databaseSvc) {

        $scope.containerSvc = containerSvc;
        
    }
]);