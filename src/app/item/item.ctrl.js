app.controller('itemCtrl', [
    '$rootScope',
    '$scope',
    'databaseSvc',
    function($rootScope, $scope, databaseSvc) {

        $scope.addRecord = function(item) {
            item.newRecord();
            databaseSvc.saveData($rootScope.containers);
        }
    }
]);