app.controller('bucketCtrl', [
    '$scope',
    'httpSvc',
    function($scope, httpSvc) {
        httpSvc.getBuckets();
    }
]);