app.controller('containerCtrl', [
    '$log',
    '$scope',
    'databaseSvc',
    function($log, $scope, databaseSvc) {
        $scope.length = 1;
        $scope.database = databaseSvc;

        $log.info('Database Response: ', $scope.database);
    }
]);