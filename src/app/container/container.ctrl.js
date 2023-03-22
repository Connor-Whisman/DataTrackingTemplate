app.controller('containerCtrl', [
    '$rootScope',
    '$scope',
    '$log',
    '$location',
    'databaseSvc',
    function($rootScope, $scope, $log, $location, databaseSvc) {

        $scope.getContainers = function() {
            $location.url('/');
        }

        $scope.newContainer = function(total) {
            $rootScope.total = total += 1;
            var name = `Container ${total}`;
            var container = new Container(name);

            $rootScope.containers.push(container);
            databaseSvc.saveData($rootScope.containers);

            $log.info('New Container Added: ', container);
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


        // ADD NEW ITEMS FUNCTIONALITY AND SAVE WITH DATABASESVC.SAVEDATA(): ALSO REMOVE THE NEED TO PASS ROOTSCOPE.CONTAINERS TO THE FUNCTION
    }
]);