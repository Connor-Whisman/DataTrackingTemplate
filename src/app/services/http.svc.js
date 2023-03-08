app.factory('httpSvc', [
    '$http',
    '$rootScope',
    function($http, $rootScope) {
        var service = {};
        service.databaseObj;

        const URL   = 'http://localhost:8080/';

        // service.getSavedData = function() {
        // $http.get(URL).then(function(response) {
        //     service.databaseObj = response.data;
        // })
        $http({
            method: 'GET',
            url: URL
          }).then(function successCallback (response) {
                service.databaseObj = response.data;
            }
          );
        //   return service.databaseObj;
        

        return service;
    }
])