app.factory('databaseSvc', [
    '$rootScope',
    '$resource',
    '$http',
    '$routeParams',
    function($rootScope, $resource, $http, $routeParams) {
        const service = {};
        const URL   = 'http://localhost:8080/';
        

        var dataAPI = 
			$resource(URL, {
                get: {method: 'JSONP'},
            });


        service.getDatabase = function() {
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

        // service.getDatabase = 
                // dataAPI.get().$promise.then(function(data) {
                //     service.database = data;
                //     // console.log($rootScope.database);
                // })
        // console.log(service.database);
            



        return service;
    }
])