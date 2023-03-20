app.controller('containerCtrl', [
    '$rootScope',
    '$scope',
    '$log',
    '$routeParams',
    '$location',
    'databaseSvc',
    function($rootScope, $scope, $log, $routeParams, $location, databaseSvc) {
        $rootScope.containers = [];

        var total;
        $scope.amount = Number($routeParams.amount) || 1;
        $scope.database = databaseSvc.getData($scope.amount);

        $scope.database.$promise.then(function() {
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

            total = $scope.database.total;
            console.log($rootScope.containers);
        })
        

        $scope.getContainers = function() {
            $location.url('/'+ $scope.amount);
        }


        $scope.newContainer = function() {
            var newTotal  = total + 1;
            var name = `Container ${newTotal}`;

            $rootScope.containers.push(new Container(name))
            
            databaseSvc.saveData($rootScope.containers);
            console.log($rootScope.containers);
        }


        $scope.deleteItem = function(container) {
            container.item = {};
            databaseSvc.saveData($rootScope.containers);
        }
        $scope.addItem = function(container) {
            container.item = new Item();
            databaseSvc.saveData($rootScope.containers);
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

        
        $log.info('Database Response: ', $scope.database);
    }
]);