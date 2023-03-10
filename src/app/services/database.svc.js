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

        var getData = dataAPI.get(function() {
            service.data = getData;
        })
        


        return service;
    }
])