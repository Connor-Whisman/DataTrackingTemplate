app.service('httpSvc', [
    '$http',
    '$rootScope',
    function($http, $rootScope) {
        const URL   = 'http://localhost:8080/';

        this.getSavedData = function() {
            $http.get(URL).then(function(response) {
                $rootScope.databaseObj = response.data;
            })
        }
    }
])