record.controller('recordCtrl', [
    '$scope',
    '$log',
    'databaseSvc',
    function($scope, $log, databaseSvc) {

        // ------ ADD RECORD TO EXISTING ITEM ------
        $scope.addRecord = function(itemObj) {
            itemObj.records.push(new Record())
            databaseSvc.saveData();
            $log.info('Added Record To: ', itemObj);
        }
    }
]);