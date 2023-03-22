var app = angular.module('app', [
    'ngMessages',
    'ngRoute',
    'ngResource'
]);


app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'container/container.html'
        })
})


app.controller('appCtrl', [
    '$rootScope',
    'databaseSvc',
    function($rootScope, databaseSvc) {
        $rootScope.containers   = [];
        $rootScope.database     = databaseSvc.getDatabase();


        $rootScope.database.$promise.then(function() {

            // console.log($rootScope.database);
            updateContainers();
        })
        

        $rootScope.itemOpts     = [
            new Item('Choice 1', new Date(), 'Description 1'),
            new Item('Choice 2', new Date(), 'Description 2'),
            new Item('Choice 3', new Date(), 'Description 3')
        ];


        function updateContainers() {
            $rootScope.total = $rootScope.database.total;
            console.log($rootScope.total);
            var containers = $rootScope.database.containers;
            for (var i = 0; i < containers.length; i++) {
                var container = containers[i];
                if (container.item.name) {
                    var item = new Item(container.item.name, container.item.date, container.item.records);
                }
                else {
                    var item = {};
                }

                $rootScope.containers[i] = new Container(container.name, item);
            }
            $log.info('Database Response: ', $rootScope.database);
        }

        function updateItemList() {
            return
        }
}]);