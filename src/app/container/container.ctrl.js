app.controller('containerCtrl', [
    '$rootScope',
    'httpSvc',
    function($rootScope, httpSvc) {
        httpSvc.getSavedData();
        console.log($rootScope.databaseObj);
    }
]);