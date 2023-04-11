item.controller('createItemCtrl', [
    '$rootScope',
    '$scope',
    'databaseSvc',
    function($rootScope, $scope, databaseSvc) {

        $scope.name = '';
        $scope.description = '';

        // ------ CREATE / DELETE ITEM OPTIONS ------
        $scope.createItemOpt = function() {
            if ($rootScope.itemOpts.length === 0 && $scope.name.length === 0) {
                var item = new Item("Item 1");
            }
            else {
                var item = new Item($scope.name, ($scope.description || '<No Description>'));
            }
            $rootScope.itemOpts.push(item);
            databaseSvc.saveData();
        }
        $scope.deleteItemOpt = function(itemOpt) {
            var index = $rootScope.itemOpts.indexOf(itemOpt);
            $rootScope.itemOpts.splice(index, 1);
            databaseSvc.saveData();
        }


        
        
    }
]);