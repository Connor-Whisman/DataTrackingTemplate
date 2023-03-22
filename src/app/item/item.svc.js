app.factory('itemSvc', [
    'databaseSvc',
    function(databaseSvc) {
        $scope.database = databaseSvc.getData();
        return service;
    }
])