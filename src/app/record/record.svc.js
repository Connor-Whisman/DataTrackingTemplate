record.factory('recordSvc', [
    '$rootScope',
    '$log',
    'containerSvc',
    function($rootScope, $log, containerSvc) {
        var service = {};

        
        // ------ ADD RECORD TO EXISTING ITEM ------
        service.addRecord = function(itemObj) {
            itemObj.records.push(new Record(service.recordTitle, service.recordData));
            containerSvc.saveContainers();
            service.recordTitle  = '';
            service.recordData   = '';
            $log.info('Added Record To: ', itemObj);
        }



        return service
    }
])