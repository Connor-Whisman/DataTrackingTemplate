app.controller('itemCtrl', [
    '$rootScope',
    '$scope',
    '$log',
    'databaseSvc',
    function($rootScope, $scope, $log, databaseSvc) {

        // ------------------------- MODALS -------------------------
        // --- SHOW 'ADD ITEM TO CONTAINER' MODAL ---
        $scope.addingItem = false;
        $scope.showAddModal = function() {
            $scope.addingItem = true;            
        }
        // --- SHOW 'NEW ITEM TO OPTIONS' MODAL ---
        $scope.addingItemOpt = false
        $scope.showNewOptModal = function() {
            $scope.addingItemOpt = true;
        }
        // --- HIDE ALL MODALS ---
        $scope.hideModals = function() {
            $scope.addingItem = false;
            $scope.addingItemOpt = false;
        }        


        // ------ ADD / DELETE ITEMS IN CONTAINERS ------
        $scope.addItem = function(containerObj, itemOpt) {
            containerObj.item = itemOpt;
            databaseSvc.saveData();
            $scope.hideModals();
            $log.info('Added Item: ', itemOpt, '\n', 'To Container: ', containerObj);
        }
        $scope.deleteItem = function(containerObj) {
            containerObj.item = {};
            databaseSvc.saveData();
            $log.info('Deleted Item From: ', containerObj);
        }


        // ------ CREATE / DELETE ITEM OPTIONS ------
        $scope.createItemOpt = function(itemOpt = undefined) {
            $rootScope.itemOpts.push(itemOpt || new Item())
            databaseSvc.saveData();
        }
        $scope.deleteItemOpt = function(itemOpt) {
            var index = $rootScope.itemOpts.indexOf(itemOpt);
            $rootScope.itemOpts.splice(index, 1);
            databaseSvc.saveData();
        }
        
    }
]);