record.factory('recordSvc', [
    '$rootScope',
    '$log',
    'databaseSvc',
    function($rootScope, $log, databaseSvc) {
        var service = {};

        
        // ------ ADD RECORD TO EXISTING ITEM ------
        service.addRecord = function(itemObj) {
            itemObj.records.push(new Record(service.recordTitle, service.recordData));
            databaseSvc.saveData();
            service.recordTitle  = '';
            service.recordData   = '';
            $log.info('Added Record To: ', itemObj);
        }



        return service
    }
])