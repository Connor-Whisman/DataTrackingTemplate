app.controller('containerCtrl', [
    '$rootScope',
    'httpSvc',
    function($rootScope, httpSvc) {
        // $rootScope.test = httpSvc.getSavedData();
        
        // $rootScope.databaseObj = httpSvc.databaseObj;
        console.log(httpSvc);
    }
]);