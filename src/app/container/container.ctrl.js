app.controller('containerCtrl', [
    '$rootScope',
    '$scope',
    '$log',
    '$location',
    'databaseSvc',
    function($rootScope, $scope, $log, $location, databaseSvc) {

        // ------ CREATE NEW CONTAINER OBJ ------
        $scope.newContainer = function() {
            $rootScope.totalContainers += 1;
            var total = $rootScope.totalContainers;
            var name = `Container ${total}`;
            var container = new Container(name);

            $rootScope.containers.push(container);
            databaseSvc.saveData();

            $log.info('New Container Added: ', container);
        }


        // ------ RESOURCES / NOTES ------
        
        // http://bguiz.github.io/js-standards/angularjs/single-responsibility/
        // -- https://www.sitepoint.com/creating-crud-app-minutes-angulars-resource/
        // -----------------------------------------------------------------------------------------

        // -- ADD ABILITY TO CHANGE ITEM THAT IS IN CONTAINER !! 
        // -- ADD LIST OF ITEMS TO CHOOSE FROM THAT CAN BE STORED IN CONTAINERS

        // -- SOME SORT OF 'VAULT' TO VIEW PAST DATA THAT NO LONGER LIVES IN THE CONTAINER
        // -- IMPLEMENT SEPERATE MODULES FOR DIFFERENT APP FEATURES

        // OTHER SMALL FEATURES:
        // -- WAY TO RENAME CONTAINERS

        // ADD NEW ITEMS FUNCTIONALITY AND SAVE WITH DATABASESVC.SAVEDATA()
    }
]);