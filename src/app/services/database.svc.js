angular.module('database', [
    'ngResource'
])
.factory('databaseSvc', [
    '$rootScope',
    '$resource',
    '$http',
    '$log',
    'containerSvc',
    'itemSvc',
    function($rootScope, $resource, $http, $log, containerSvc, itemSvc) {

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
            containerSvc.totalContainers = service.database.total;

            updateContainers();
            updateItemOpts();

            $log.info('Database Response: ', service.database);
        })

        // ------ SAVE DATA BACK TO DATABASE / SERVER ------
        service.saveData = function(containers, itemOpts, archive) {
            $http({
                method: 'POST',
                url: `${URL}saveAll`,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    containers: containers, 
                    itemOpts: itemOpts,
                    archive: archive
                }
            });
        }



        // ------ LOAD ROOTSCOPE OBJECTS ------
        function updateContainers() {
            var containers = service.database.containers;
            for (var i = 0; i < containers.length; i++) {
                var container = containers[i];
                if (container.item.name) {
                    var item = new Item(container.item.name, container.item.description, container.item.records, container.item.date, container.name);
                }
                else {
                    var item = {};
                }
                containerSvc.containers[i] = new Container(container.name, item);
            }
        }
        function updateItemOpts() {
            var itemList = service.database.itemOpts;
            for (var i = 0; i < itemList.length; i++) {
                var item = itemList[i];
                itemSvc.itemOpts[i] = new Item(item.name, item.description, item.records, item.dateCreated);
            }
        }


        // ------ RETURN ------

        return service;
    }
])