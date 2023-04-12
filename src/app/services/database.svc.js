angular.module('database', [
    'ngResource'
])
.factory('databaseSvc', [
    '$rootScope',
    '$resource',
    '$http',
    '$log',
    function($rootScope, $resource, $http, $log) {

        // --------------------- $ROOTSCOPE ----------------------
        // $rootScope.saveData = function(data) {
        //     $http({
        //         method: 'POST',
        //         url: `${URL}post`,
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         data: data
        //     });
        // }

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
            // updateArchive();

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
                data: {
                    containers: $rootScope.containers, 
                    itemOpts: $rootScope.itemOpts
                    // archive: archiveSvc.archive
                }
            });
        }


        // ------ LOAD ROOTSCOPE OBJECTS ------
        function updateContainers() {
            var containers = service.database.containers;
            for (var i = 0; i < containers.length; i++) {
                var container = containers[i];
                if (container.item.name) {
                    var item = new Item(container.item.name, container.item.description, container.item.records, container.item.date);
                }
                else {
                    var item = {};
                }
                $rootScope.containers[i] = new Container(container.name, item);
            }
        }
        function updateItemOpts() {
            var itemList = service.database.itemOpts;
            for (var i = 0; i < itemList.length; i++) {
                var item = itemList[i];
                $rootScope.itemOpts[i] = new Item(item.name, item.description, item.records, item.dateCreated);
            }
        }
        // function updateArchive() {
        //     var archive = service.database.archive;
        //     for (var i = 0; i < archive.length; i++) {
        //         var item = archive[i];
        //         $rootScope.archive[i] = new Item(item.name, item.description, item.records, item.dateCreated);
        //     }
        // }


        // ------ RETURN ------

        return service;
    }
])