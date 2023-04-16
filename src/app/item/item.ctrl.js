item.controller('itemCtrl', [
    '$rootScope',
    '$scope',
    '$log',
    'itemSvc',
    'databaseSvc',
    'archiveSvc',
    function($rootScope, $scope, $log, itemSvc, databaseSvc, archiveSvc) {

        $scope.itemSvc = itemSvc;
        $scope.archiveSvc = archiveSvc;

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

    }
]);