var record = angular.module('record', []);



// ------ RECORD DISPLAY ------
record.directive('recordDiv', function() {
    return {
        templateUrl: 'record/templates/record.html'
    }
})

// ------ ADD RECORD MODAL ------
record.directive('addRecord', function() {
    return {
        templateUrl: 'record/addRecord/addRecord.html'
    }
})