app.service('httpSvc', [
    '$http',
    '$rootScope',
    function($http, $rootScope) {
        const URL   = 'http://localhost:8080/';

        this.getBuckets = function() {
            $http.get(URL)
            .then(function(response) {
                    $rootScope.buckets = response.data.buckets;
                }, function(error) {
                    $log.error(`ERROR GETTING DATA: ${error}`);
                }
            )
        }
        
    }
])