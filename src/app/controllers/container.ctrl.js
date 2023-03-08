app.controller('containerCtrl', [
    '$rootScope',
    'httpSvc',
    function($rootScope, httpSvc) {
        // $rootScope.test = httpSvc.getSavedData();
        $rootScope.obj = httpSvc;
        console.log(httpSvc);
    }
]);