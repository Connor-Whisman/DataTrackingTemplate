app.factory('databaseSvc', [
    '$resource',
    function($resource) {
        const service = {};
        const URL   = 'http://localhost:8080/';

        var dataAPI = 
			$resource(URL, {
                get: {method: 'JSONP'},
                length: '3'
            });

        service.getData = 
            dataAPI.get(function() {
                return service.getData;
                // return data;
            })
            
        
        


        return service;
    }
])