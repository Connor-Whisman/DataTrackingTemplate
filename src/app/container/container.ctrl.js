app.controller('containerCtrl', [
    '$rootScope',
    '$scope',
    '$log',
    '$routeParams',
    '$location',
    'databaseSvc',
    function($rootScope, $scope, $log, $routeParams, $location, databaseSvc) {
        var total;
        $scope.database = databaseSvc.getData();

        $scope.database.$promise.then(function() {
            total = $scope.database.total;

            var containers = $scope.database.containers;
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
            $log.info('Database Response: ', $scope.database);
        })
        

        $scope.getContainers = function() {
            $location.url('/');
        }


        $scope.newContainer = function() {
            total += 1;
            var name = `Container ${total}`;
            var container = new Container(name);

            $rootScope.containers.push(container);
            databaseSvc.saveData($rootScope.containers);

            $log.info('New Container Added: ', container);
        }


        $scope.deleteItem = function(container) {
            container.item = {};
            databaseSvc.saveData($rootScope.containers);
            $log.info('Deleted Item From: ', container);
        }
        $scope.addItem = function(container) {
            container.item = new Item();
            databaseSvc.saveData($rootScope.containers);
            $log.info('Added Item To: ', container);
        }


        // RESOURCES
        // http://bguiz.github.io/js-standards/angularjs/single-responsibility/
        // -- https://www.sitepoint.com/creating-crud-app-minutes-angulars-resource/
        // -----------------------------------------------------------------------------------------

        // -- ADD ABILITY TO CUSTOMIZE CONTAINER AND RECORD DATA THAT IS BEING ADDED. USE SOMETHING LIKE A MODAL WINDOW POPUP RATHER THAN JUST A BUTTON
        // -- ADD ABILITY TO CHANGE ITEM THAT IS IN CONTAINER !! 
        
        // -- ADD LIST OF ITEMS TO CHOOSE FROM THAT CAN BE STORED IN CONTAINERS

        // -- SOME SORT OF 'VAULT' TO VIEW PAST DATA THAT NO LONGER LIVES IN THE CONTAINER

        // -- IMPLEMENT LOCALSTORAGE TO RETAIN DATA IF PAGE IS CLOSED. DECIDE WHEN API CALLS SHOULD BE MADE. FIRST ONE AT RUNTIME? HOW OFTEN SHOULD CHANGES BE SAVED?
        // -- IMPLEMENT SEPERATE MODULES FOR DIFFERENT APP FEATURES

        // OTHER SMALL FEATURES:
        // -- WAY TO RENAME CONTAINERS



        // -- Should add/delete item be moved to item controller? 
        // ---- Either have self related functions in their space or in their parents space?

        
        
    }
]);