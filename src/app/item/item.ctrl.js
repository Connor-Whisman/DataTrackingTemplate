item.controller('itemCtrl', [
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
            var item = new Item(itemOpt.name, itemOpt.description, [], new Date());
            containerObj.item = item;
            databaseSvc.saveData();
            $scope.hideModals();
            $log.info('Added New Item: ', item, '\n', 'From Item: ', itemOpt, '\n', 'To Container: ', containerObj);
        }
        $scope.deleteItem = function(containerObj) {
            containerObj.item = {};
            databaseSvc.saveData();
            $log.info('Deleted Item From: ', containerObj);
        }


        // ADD NEW INSTANCES TO CONTAINER NOT WORKING
        
    }
]);