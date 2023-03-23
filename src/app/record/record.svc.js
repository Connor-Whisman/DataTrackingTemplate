app.factory('recordSvc', [
    '$rootScope',
    '$log',
    function($rootScope, $log) {
        const service  = {};

        service.addRecord = function(itemObj) {
            itemObj.newRecord();
            
            $rootScope.saveData($rootScope.containers);
            $log.info('Added Record To: ', itemObj);
        }

        return service;
    }
])








