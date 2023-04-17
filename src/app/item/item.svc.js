item.factory('itemSvc', [
    '$rootScope',
    '$http',
    '$log',
    'containerSvc',
    function($rootScope, $http, $log, containerSvc) {
        var service = {};

        const URL       = 'http://localhost:8080/';


        service.addItem = function(containerObj, itemOpt) {
            var item = new Item(itemOpt.name, itemOpt.description, [], new Date(), containerObj.name);
            containerObj.item = item;
            containerSvc.saveContainers();
            $log.info('Added New Item: ', item, '\n', 'From Item: ', itemOpt, '\n', 'To Container: ', containerObj);
        }
        service.deleteItem = function(containerObj) {
            containerObj.item = {};
            containerSvc.saveContainers();
            $log.info('Deleted Item From: ', containerObj);
        }
            


        service.saveItemOpts = function() {
            $http({
                method: 'POST',
                url: `${URL}saveItemOpts`,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    itemOpts: $rootScope.itemOpts
                }
            });
        }
        



        return service
    }
])