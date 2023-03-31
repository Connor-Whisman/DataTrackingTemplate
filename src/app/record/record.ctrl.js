record.controller('recordCtrl', [
    '$scope',
    '$log',
    'databaseSvc',
    function($scope, $log, databaseSvc) {

        $scope.recordTitle  = '';
        $scope.recordData   = '';

        $scope.hideModal = function() {
            $scope.addingRecord = false;
        }

        // --- SHOW 'ADD RECORD TO ITEM' MODAL ---
        $scope.addingRecord = false;
        $scope.showAddModal = function() {
            $scope.addingRecord = true;
            $scope.recordDate = new Date();
        }

        // ------ ADD RECORD TO EXISTING ITEM ------
        $scope.addRecord = function(itemObj) {
            itemObj.records.push(new Record($scope.recordTitle, $scope.recordData));
            databaseSvc.saveData();
            $scope.recordTitle  = '';
            $scope.recordData   = '';
            $log.info('Added Record To: ', itemObj);
        }
    }
]);