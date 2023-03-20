app.factory('databaseSvc', [
    '$resource',
    '$http',
    '$routeParams',
    function($resource, $http, $routeParams) {
        const service = {};
        const URL   = 'http://localhost:8080/';
        

        var dataAPI = 
			$resource(URL, {
                get: {method: 'JSONP'},
            });


        service.getData = function() {
            return dataAPI.get()
        }


        service.saveData = function(data) {
            $http({
                method: 'POST',
                url: `${URL}post`,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            });
        }



        return service;
    }
])