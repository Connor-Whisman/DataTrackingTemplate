container.factory('containerSvc', [
    '$rootScope',
    '$http',
    '$log',
    function($rootScope, $http, $log) {
        var service = {};

        const URL       = 'http://localhost:8080/';

        
        // ------ CREATE NEW CONTAINER OBJ ------
        service.newContainer = function() {
            $rootScope.totalContainers += 1;
            var total = $rootScope.totalContainers;
            var name = `Container ${total}`;
            var container = new Container(name);

            $rootScope.containers.push(container);
            service.saveContainers();

            $log.info('New Container Added: ', container);
        }



        service.saveContainers = function() {
            $http({
                method: 'POST',
                url: `${URL}saveContainers`,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    containers: $rootScope.containers
                }
            });
        }



        return service
    }
])