angular.module('archive')
    .factory('archiveSvc', [
        '$rootScope',
        '$resource',
        '$http',
        "databaseSvc",
        'itemSvc',
        function($rootScope, $resource, $http, databaseSvc, itemSvc) {
            var service = {};
            service.archive = [];

            const URL       = 'http://localhost:8080/';



            // ------ ADD ITEM TO ARCHIVE ------
            service.archiveItem  = function(containerObj) {
                item = containerObj.item;
                item.dateCreated   = new Date();
                item.container     = containerObj.name;
                service.archive.push(item);

                databaseSvc.saveData($rootScope.containers, $rootScope.itemOpts, service.archive);
                
                itemSvc.deleteItem(containerObj);
            }


                        
            // --------- RETRIEVE ARCHIVES ---------
            service.getArchive = function() {
                var dataAPI = 
                    $resource(URL, {
                        get: {method: 'JSONP'},
                });
                var database = dataAPI.get();
                database.$promise.then(function() {
                    service.archive = database.archive;
                    if (typeof service.archive !== 'undefined') {
                        for (var i = 0; i < service.archive.length; i++) {
                            var item = service.archive[i];
                            service.archive[i] = new Item(item.name, item.description, item.records, item.dateCreated);
                        }
                    }
            })}



            // --------- DELETE ARCHIVE ---------
            service.deleteArchiveItem = function(index) {
                service.archive.splice(index, 1);

                // service.saveArchive();
                databaseSvc.saveData($rootScope.containers, $rootScope.itemOpts, service.archive);
            }



            // --------- SAVE ARCHIVE ---------
            service.saveArchive = function() {
                $http({
                    method: 'POST',
                    url: `${URL}post`,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: {
                        containers: $rootScope.containers, 
                        itemOpts: $rootScope.itemOpts,
                        archive: service.archive
                    }
                });
            }



            // ------ RETURN ------
            return service;
        }
    ])