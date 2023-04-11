angular.module('archive')
    .factory('archiveSvc', [
        '$rootScope',
        '$resource',
        '$http',
        'itemSvc',
        function($rootScope, $resource, $http, itemSvc) {
            var service = {};

            service.archiveItem  = function(containerObj) {
                containerObj.item.dateCreated = new Date();
                $rootScope.archive.push(containerObj.item);
                itemSvc.deleteItem(containerObj);
            }

            // ------ RETURN ------

            return service;
        }
    ])