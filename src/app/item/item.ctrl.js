app.controller('itemCtrl', [
    '$rootScope',
    '$scope',
    '$log',
    'databaseSvc',
    function($rootScope, $scope, $log, databaseSvc) {

        // ------ SHOW 'ADD ITEM TO CONTAINER' MODAL ------
        $scope.addingItem = false;
        $scope.openModalAdd = function() {
            $scope.addingItem = true;
        }
        // ------ SHOW 'NEW ITEM TO OPTIONS' MODAL ------
        $scope.addingItemOpt = false
        $scope.openModalNew = function() {
            $scope.addingItemOpt = true;
        }
        // ------ CLOSE ALL MODALS ------
        $scope.closeModal = function() {
            $scope.addingItem = false;
            $scope.addingItemOpt = false;
        }        


        // ------ ADD / DELETE ITEMS IN CONTAINERS ------
        $scope.deleteItem = function(containerObj) {
            containerObj.item = {};
            databaseSvc.saveData();
            $log.info('Deleted Item From: ', containerObj);
        }
        $scope.addItem = function(containerObj, itemOpt) {
            containerObj.item = itemOpt || new Item();
            databaseSvc.saveData();
            $log.info('Added Item To: ', containerObj);
        }
    }
]);