app.controller('containerCtrl', [
    '$scope',
    'httpSvc',
    function($scope, httpSvc) {
        httpSvc.getContainers();
    }
]);