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
                // post: {method: 'POST', headers: {'Access-Control-Allow-Origin': '*'}}
            });

        service.getData = function(amount) {
            return dataAPI.get(
                {amount: amount}
            )
        }

        service.saveData = function(data) {
            var req = {
                method: 'POST',
                url: `${URL}post`,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };
            
            console.log(data);

            $http(req).then(
                function successCallback(response) {
                  console.log('Success response: ', response);
                },
                function errorCallback(response) {
                  console.log('Error response: ', response);
                }
            );
        }
        
        


        return service;
    }
])