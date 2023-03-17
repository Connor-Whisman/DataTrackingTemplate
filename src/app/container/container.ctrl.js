app.controller('containerCtrl', [
    '$scope',
    '$log',
    '$routeParams',
    '$location',
    'databaseSvc',
    function($scope, $log, $routeParams, $location, databaseSvc) {
        var total;

        $scope.amount = Number($routeParams.amount) || 1;
        
        $scope.database = databaseSvc.getData($scope.amount);
        
        $scope.database.$promise.then(function() {
            $scope.containers = $scope.database.containers;
            console.log($scope.containers);
            total = $scope.database.total;
        })
        

        

        $scope.getContainers = function() {
            $location.url('/'+ $scope.amount);
        }

        $scope.newContainer = function() {
            var newTotal  = total + 1;
            var name = `Container ${newTotal}`;
            var data = new Container(name)
            
            databaseSvc.saveData(data);

            $location.url('/'+ newTotal);
        }

        // STILL NEEDS TO BE HANDLED ON SERVER IN ORDER TO SAVE 
        $scope.addRecord = function(container) {
            var index = $scope.containers.indexOf(container);

            var containerRecords = $scope.containers[index].item.records;

            containerRecords.push(new Record());


            console.log('index: ', index);
            console.log('records: ', containerRecords);
        }


        // http://bguiz.github.io/js-standards/angularjs/single-responsibility/


        // -- ADD ABILITY TO CUSTOMIZE CONTAINER AND RECORD DATA THAT IS BEING ADDED. USE SOMETHING LIKE A MODAL WINDOW POPUP RATHER THAN JUST A BUTTON
        // -- ADD ABILITY TO CHANGE ITEM THAT IS IN CONTAINER !! 

        // -- IF ITEM IS REMOVED FROM CONTAINER, DATA IS SAVED. HOWEVER A NEW INSTANCE WILL BE CREATED WHEN SAME TYPE OF ITEM IS ADDED BACK
        
        // -- ADD LIST OF ITEMS TO CHOOSE FROM THAT CAN BE STORED IN CONTAINERS

        // -- SOME SORT OF 'VAULT' TO VIEW PAST DATA THAT NO LONGER LIVES IN THE CONTAINER

        // -- IMPLEMENT LOCALSTORAGE TO RETAIN DATA IF PAGE IS CLOSED. DECIDE WHEN API CALLS SHOULD BE MADE. FIRST ONE AT RUNTIME? HOW OFTEN SHOULD CHANGES BE SAVED?
        // -- IMPLEMENT SEPERATE MODULES FOR DIFFERENT APP FEATURES

        // OTHER SMALL FEATURES:
        // -- WAY TO RENAME CONTAINERS


        
        $log.info('Database Response: ', $scope.database);
    }
]);