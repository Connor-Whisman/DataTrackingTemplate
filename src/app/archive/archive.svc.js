angular.module('archive')
    .factory('archiveSvc', [
        '$rootScope',
        '$resource',
        '$http',
        'itemSvc',
        function($rootScope, $resource, $http, itemSvc) {
            var service = {};
            service.archive = [];

            const URL       = 'http://localhost:8080/';



            // ------ ADD ITEM TO ARCHIVE ------
            service.archiveItem  = function(containerObj) {
                containerObj.item.dateCreated = new Date();
                service.archive.push(containerObj.item);
                itemSvc.deleteItem(containerObj);
                service.saveArchive();
            }


                        
            // --------- RETRIEVE ARCHIVES ---------
            service.getArchive = function() {
                service.dataAPI = 
                    $resource(URL, {
                        get: {method: 'JSONP'},
                });
                service.database = service.dataAPI.get();
                service.database.$promise.then(function() {
                    service.archive = service.database.archive;
                    if (service.archive.length > 0) {
                        for (var i = 0; i < service.archive.length; i++) {
                            var item = service.archive[i];
                            service.archive[i] = new Item(item.name, item.description, item.records, item.dateCreated);
                        }
                    }
            })}



            // --------- DELETE ARCHIVE ---------
            service.deleteArchiveItem = function(index) {
                service.archive.splice(index, 1);
                service.saveArchive();
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