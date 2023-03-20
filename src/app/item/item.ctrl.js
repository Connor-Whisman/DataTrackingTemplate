app.controller('itemCtrl', [
    '$rootScope',
    '$scope',
    '$log',
    'databaseSvc',
    function($rootScope, $scope, $log, databaseSvc) {

        $scope.addRecord = function(itemObj) {
            itemObj.newRecord();
            databaseSvc.saveData($rootScope.containers);
            $log.info('Added Record To: ', itemObj);
        }
    }
]);