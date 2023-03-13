app.factory('databaseSvc', [
    '$resource',
    '$routeParams',
    function($resource, $routeParams) {
        const service = {};
        const URL   = 'http://localhost:8080/';
        
        var dataAPI = 
			$resource(URL, {
                get: {method: 'JSONP'}
            });

        service.getData = function(length) {
            return dataAPI.get(
                {length: length}
            )
        }
        
        


        return service;
    }
])