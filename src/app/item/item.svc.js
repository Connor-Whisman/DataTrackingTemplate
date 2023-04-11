item.factory('itemSvc', [
    '$rootScope',
    '$log',
    'databaseSvc',
    function($rootScope, $log, databaseSvc) {
        var service = {};

        service.addItem = function(containerObj, itemOpt) {
            var item = new Item(itemOpt.name, itemOpt.description, [], new Date());
            containerObj.item = item;
            databaseSvc.saveData();
            // $scope.hideModals();
            $log.info('Added New Item: ', item, '\n', 'From Item: ', itemOpt, '\n', 'To Container: ', containerObj);
        }
        service.deleteItem = function(containerObj) {
            containerObj.item = {};
            databaseSvc.saveData();
            $log.info('Deleted Item From: ', containerObj);
        }



        return service
    }
])