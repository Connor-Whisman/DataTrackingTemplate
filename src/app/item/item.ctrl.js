app.controller('itemCtrl', [
    '$rootScope',
    '$scope',
    '$log',
    'databaseSvc',
    function($rootScope, $scope, $log, databaseSvc, $modal) {

        $rootScope.itemOpts = databaseSvc.itemOpts;
        $scope.addingItem   = false;




        $scope.createItemOpt = function() {
            $scope.addingItem = !$scope.addingItem;
        }



        $scope.printValue = function(value) {
            $log.log(value);
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
    }
]);