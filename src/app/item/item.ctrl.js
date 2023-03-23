app.controller('itemCtrl', [
    '$rootScope',
    '$scope',
    '$log',
    'databaseSvc',
    function($rootScope, $scope, $log, databaseSvc) {

        $rootScope.itemOpts = databaseSvc.itemOpts;
        $scope.addingItem   = false;


        $scope.printValue = function(value) {
            $log.log(value);
        }


        /// ------------------ CREATE / DELETE ITEMS FROM CONTAINER -------------------------
        $scope.addItem = function(container) {
            container.item = new Item();
            $rootScope.saveData($rootScope.containers);
            $log.info('Added Item To: ', container);
        }
        $scope.deleteItem = function(container) {
            container.item = {};
            $rootScope.saveData($rootScope.containers);
            $log.info('Deleted Item From: ', container);
        }
        // ------ (ITEM CHOICES/OPTIONS WHEN ADDDING) ------
        $scope.createItemOpt    = function() {
            $scope.addingItem = !$scope.addingItem;
        }
        $scope.deleteItemOpt    = function() {
            return
        }
        

        
        
    }
]);