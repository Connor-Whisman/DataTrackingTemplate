app.controller('itemCtrl', [
    '$rootScope',
    '$scope',
    '$log',
    'databaseSvc',
    function($rootScope, $scope, $log, databaseSvc) {

        // SHOW 'ADD ITEM TO CONTAINER' MODAL
        $scope.addingItem = false;
        $scope.openModal = function() {
            $scope.addingItem = true;
        }
        $scope.closeModal = function() {
            $scope.addingItem = false;
            $scope.addingItemOpt = false;
        }


        // ------ CREATE A NEW ITEM TO CHOOSE FROM WHEN ADDING TO CONTAINER ------
        $scope.addingItemOpt = false
        $scope.createItemOpt = function() {
            $scope.addingItemOpt = !$scope.addingItemOpt;
        }
        $scope.printValue = function(value) {
            $log.log(value);
        }
        // ------ CREATE 
        


        // ------ ADD / DELETE ITEMS IN CONTAINERS ------
        $scope.deleteItem = function(containerObj) {
            containerObj.item = {};
            databaseSvc.saveData();
            $log.info('Deleted Item From: ', containerObj);
        }
        $scope.addItem = function(containerObj) {
            $scope.openModal();
            containerObj.item = new Item();
            databaseSvc.saveData();
            $log.info('Added Item To: ', containerObj);
        }
    }
]);