app.factory('databaseSvc', [
    '$rootScope',
    '$resource',
    '$http',
    '$log',
    function($rootScope, $resource, $http, $log) {

        // --------------------- $ROOTSCOPE ----------------------
        $rootScope.saveData = function(data) {
            $http({
                method: 'POST',
                url: `${URL}post`,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            });
        }

        // --------------------- SERVICE ----------------------
        const service   = {};
        const URL       = 'http://localhost:8080/';


        // ------ LOAD DATA FROM DATABASE / SERVER ------
        service.dataAPI = 
			$resource(URL, {
                get: {method: 'JSONP'},
            });

        service.database = service.dataAPI.get();

        service.database.$promise.then(function() {
            $rootScope.totalContainers = service.database.total;

            updateContainers();
            updateItemOpts();

            $log.info('Database Response: ', service.database);
        })

        // ------ SAVE DATA BACK TO DATABASE / SERVER ------
        service.saveData = function() {
            $http({
                method: 'POST',
                url: `${URL}post`,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: $rootScope.containers
            });
        }


        // ------ LOAD ROOTSCOPE OBJECTS ------
        function updateContainers() {
            var containers = service.database.containers;
            for (var i = 0; i < containers.length; i++) {
                var container = containers[i];
                if (container.item.name) {
                    var item = new Item(container.item.name, container.item.date, container.item.records);
                }
                else {
                    var item = {};
                }
                $rootScope.containers[i] = new Container(container.name, item);
            }
        }
        function updateItemOpts() {
            var itemList = service.database.itemList;
            for (var i = 0; i < itemList.length; i++) {
                var item = itemList[i];
                $rootScope.itemOpts[i] = new Item(item.name, item.dateCreated, item.description, item.records);
            }
        }


        // ------ RETURN ------


        return service;
    }
])