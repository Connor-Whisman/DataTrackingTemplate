// -------- DEFINE MODULE --------
var container = angular.module('container', []);



// ------ CONTAINER DISPLAY ------
container.directive('containerDiv', function() {
    return {
        templateUrl: 'container/templates/container.html'
    }
})