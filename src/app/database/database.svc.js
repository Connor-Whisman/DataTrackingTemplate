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


        service.containers   = [];
        service.itemOpts     = [];




        service.dataAPI = 
			$resource(URL, {
                get: {method: 'JSONP'},
            });

        service.getDatabase = function() {
            return service.dataAPI.get()
        }

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

    

        service.database = service.getDatabase();

        service.database.$promise.then(function() {
            $rootScope.total = service.database.total;

            updateContainers();
            updateItemOpts();

            $log.info('Database Response: ', service.database);
        })



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
                service.containers[i] = new Container(container.name, item);
            }
        }

        function updateItemOpts() {
            var itemList = service.database.itemList;
            for (var i = 0; i < itemList.length; i++) {
                var item = itemList[i];
                service.itemOpts[i] = new Item(item.name, item.dateCreated, item.description, item.records);
            }
        }



        return service;
    }
])