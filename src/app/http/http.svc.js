app.service('httpSvc', [
    '$http',
    '$rootScope',
    function($http, $rootScope) {
        const URL   = 'http://localhost:8080/';

        this.getContainers = function() {
            $http.get(URL)
            .then(function(response) {
                    $rootScope.containers = response.data.containers;
                }, function(error) {
                    $log.error(`ERROR GETTING DATA: ${error}`);
                }
            )
        }
        
    }
])