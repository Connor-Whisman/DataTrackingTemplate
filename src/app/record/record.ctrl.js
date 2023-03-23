app.controller('recordCtrl', [
    '$rootScope',
    '$scope',
    '$log',
    'databaseSvc',
    function($rootScope, $scope, $log, databaseSvc, recordSvc) {

        $scope.addRecord = recordSvc.addRecord();
    }
]);