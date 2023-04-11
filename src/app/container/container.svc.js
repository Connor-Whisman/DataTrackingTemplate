container.factory('containerSvc', [
    '$rootScope',
    '$log',
    'databaseSvc',
    function($rootScope, $log, databaseSvc) {
        var service = {};

        
        // ------ CREATE NEW CONTAINER OBJ ------
        service.newContainer = function() {
            $rootScope.totalContainers += 1;
            var total = $rootScope.totalContainers;
            var name = `Container ${total}`;
            var container = new Container(name);

            $rootScope.containers.push(container);
            databaseSvc.saveData();

            $log.info('New Container Added: ', container);
        }



        return service
    }
])