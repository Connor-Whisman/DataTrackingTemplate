container.factory('containerSvc', [
    '$rootScope',
    '$http',
    '$log',
    function($rootScope, $http, $log) {
        var service = {};

        service.containers      = [];
        service.totalContainers = 0;

        const URL       = 'http://localhost:8080/';

        
        // ------ CREATE NEW CONTAINER OBJ ------
        service.newContainer = function() {
            service.totalContainers += 1;
            var total = service.totalContainers;
            var name = `Container ${total}`;
            var container = new Container(name);

            service.containers.push(container);
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
                    containers: service.containers
                }
            });
        }



        return service
    }
])